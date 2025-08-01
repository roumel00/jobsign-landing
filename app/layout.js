import { Inter } from 'next/font/google';
import Providers from './providers';
import { Analytics } from "@vercel/analytics/next"
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JobSign - Less Paperwork. More Time on the Tools.',
  description: 'JobSign takes the admin off your plate—quoting, invoicing, scheduling, and tracking—all in one simple app for Australian tradies.',
  icons: {
    icon: [
      {
        url: '/jobsign_logo.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: '/jobsign_logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/jobsign_logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/jobsign_logo.svg" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
} 