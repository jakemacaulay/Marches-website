import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marchy's Custom Decks Inc. | Premium Outdoor Spaces in Nova Scotia",
  description: "Family owned and operated construction company specializing in custom decks, renovations, and new residential construction in Halifax and surrounding areas.",
  openGraph: {
    title: "Marchy's Custom Decks Inc. | Premium Outdoor Spaces in Nova Scotia",
    description: "Family owned and operated construction company specializing in custom decks, renovations, and new residential construction in Halifax and surrounding areas.",
    url: 'https://marchyscustomdecks.ca',
    siteName: "Marchy's Custom Decks Inc.",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Marchy's Custom Decks Inc. | Premium Outdoor Spaces in Nova Scotia",
    description: "Family owned and operated construction company specializing in custom decks, renovations, and new residential construction in Halifax and surrounding areas.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
