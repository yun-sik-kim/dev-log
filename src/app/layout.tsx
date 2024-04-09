import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const ubuntu = Ubuntu({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  title: "dev-log",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
