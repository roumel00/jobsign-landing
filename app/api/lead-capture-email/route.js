import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiter (best-effort)
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;   // max 5 requests per window per IP
const rateLimitStore = new Map(); // key: client identifier, value: { count, resetAt }

function getClientIdentifier(request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const firstIp = forwardedFor.split(',')[0].trim();
    if (firstIp) return firstIp;
  }
  const realIp = request.headers.get('x-real-ip');
  return realIp || 'unknown';
}

function isRateLimited(clientId) {
  const now = Date.now();
  const entry = rateLimitStore.get(clientId);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(clientId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { limited: false, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { limited: true, remaining: 0, resetAt: entry.resetAt };
  }
  entry.count += 1;
  rateLimitStore.set(clientId, entry);
  return { limited: false, remaining: RATE_LIMIT_MAX_REQUESTS - entry.count, resetAt: entry.resetAt };
}

// Basic HTML safety checks (reject on unsafe patterns)
const MAX_HTML_LENGTH = 20_000; // ~20KB
const DISALLOWED_HTML_PATTERNS = [
  /<\s*script\b/i,
  /<\s*iframe\b/i,
  /<\s*object\b/i,
  /<\s*embed\b/i,
  /<\s*style\b/i,
  /<\s*link\b/i,
  /<\s*meta\b/i,
  /on[a-z]+\s*=\s*[^\s>]+/i, // inline event handlers like onclick=
  /javascript\s*:/i
];

function containsUnsafeHtml(html) {
  if (typeof html !== 'string') return true;
  if (html.length > MAX_HTML_LENGTH) return true;
  return DISALLOWED_HTML_PATTERNS.some((pattern) => pattern.test(html));
}

export async function POST(request) {
  try {
    // Rate limit
    const clientId = getClientIdentifier(request);
    const rate = isRateLimited(clientId);
    if (rate.limited) {
      return new NextResponse(JSON.stringify({ error: 'Too many requests' }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': Math.ceil((rate.resetAt - Date.now()) / 1000).toString(),
          'X-RateLimit-Remaining': rate.remaining.toString(),
          'X-RateLimit-Reset': Math.floor(rate.resetAt / 1000).toString(),
        },
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined in environment variables');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { to, subject, html } = await request.json();

    // Input validation
    const allowedRecipient = 'info@jobsign.au';
    if (typeof to !== 'string' || to.trim().toLowerCase() !== allowedRecipient) {
      return NextResponse.json({ error: 'Recipient not allowed' }, { status: 400 });
    }
    if (typeof subject !== 'string' || subject.trim().length === 0 || subject.length > 200) {
      return NextResponse.json({ error: 'Invalid subject' }, { status: 400 });
    }
    if (typeof html !== 'string' || html.trim().length === 0) {
      return NextResponse.json({ error: 'Invalid html content' }, { status: 400 });
    }
    if (containsUnsafeHtml(html)) {
      return NextResponse.json({ error: 'Unsafe or too large HTML content' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'JobSign <noreply@notifications.jobsign.au>',
      to: to,
      subject: subject,
      html: html,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in send-email API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 