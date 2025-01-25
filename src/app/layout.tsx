/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google';
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/react';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "andryrads website",
  description: "My name is Andry Rachdian Sumardi. I am deeply passionate about technology and programming. Feel free to learn more about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>
          It's me, Andry Rachdian Sumardi
        </title>
      </head>
      <body className={roboto.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
