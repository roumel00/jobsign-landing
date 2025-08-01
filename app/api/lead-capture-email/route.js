import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined in environment variables');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { to, subject, html } = await request.json();

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