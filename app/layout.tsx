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
  title: "Garvit Mittal — Business Analytics & AI Portfolio",
  description:
    "MS in Business Analytics & AI at UT Dallas. I build forecasting models, KPI dashboards, and automated reporting systems that support real business decisions.",
  keywords: [
    "Garvit Mittal",
    "Business Analytics",
    "Data Analyst",
    "AI",
    "UT Dallas",
    "Portfolio",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Forecasting",
  ],
  authors: [{ name: "Garvit Mittal" }],
  openGraph: {
    title: "Garvit Mittal — Business Analytics & AI Portfolio",
    description:
      "MS in Business Analytics & AI at UT Dallas. Building forecasting models, KPI dashboards, and automated reporting systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garvit Mittal — Business Analytics & AI Portfolio",
    description:
      "MS in Business Analytics & AI at UT Dallas. Building forecasting models, KPI dashboards, and automated reporting systems.",
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