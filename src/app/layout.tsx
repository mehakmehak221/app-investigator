import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI App Crash Investigator | Mobile Crash Intelligence Platform",
  description:
    "Industry-leading AI-powered crash analysis, mobile observability and real-time debugging for Android and iOS applications. Reduce debugging time by 70%.",
  icons: {
    icon: "/logo.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "AI App Crash Investigator | Mobile Crash Intelligence",
    description: "AI-powered crash analysis and mobile observability platform",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="page-bg min-h-screen antialiased">{children}</body>
    </html>
  );
}