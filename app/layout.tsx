import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Garvit Mittal - AI Evaluation & Business Analytics";
const siteDescription =
  "AI Evaluation & Harness Engineer at StatusNeo and MS Business Analytics & AI student at UT Dallas. I build eval harnesses, LLM-as-judge scoring, forecasting models, and decision-support systems that are tested before anyone relies on them.";

export const metadata: Metadata = {
  metadataBase: new URL("https://garvitmittal.com"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Garvit Mittal",
    "AI Evaluation",
    "LLM Evaluation",
    "Eval Harness",
    "LLM-as-Judge",
    "LLM Observability",
    "StatusNeo",
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
    title: siteTitle,
    description:
      "AI Evaluation & Harness Engineer at StatusNeo. Building eval harnesses, LLM-as-judge scoring, forecasting models, and decision-support systems.",
    url: "https://garvitmittal.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "AI Evaluation & Harness Engineer at StatusNeo. Building eval harnesses, LLM-as-judge scoring, forecasting models, and decision-support systems.",
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
