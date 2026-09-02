import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CT House District 2 Voter Guide: Raghib Allie-Brennan vs. Debbie Rizzo",
  description: "An in-depth, research-backed comparison of Democratic incumbent State Representative Raghib Allie-Brennan and Republican challenger Debbie Rizzo for Bethel and Danbury, CT.",
  keywords: [
    "Raghib Allie-Brennan",
    "Debbie Rizzo",
    "Connecticut 2nd District",
    "Bethel CT election",
    "Danbury CT election",
    "CT State Representative District 2",
    "Take Back Our Grid Act",
    "Eversource accountability",
    "Candidate comparison"
  ],
  authors: [{ name: "Connecticut District 2 Civic Project" }],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
