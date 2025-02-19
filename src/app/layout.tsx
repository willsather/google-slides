import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { Toaster } from "sonner";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Slides",
  applicationName: "Google Slides",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "16x16 32x32 64x64",
      },
      {
        url: "/favicons/96x96.png",
        sizes: "96x96",
      },
      {
        url: "/favicons/192x192.png",
        sizes: "192x192",
      },
      {
        url: "/favicons/512x512.png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
