import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlexYoung | AI Engineer",
  description:
    "Personal website of AlexYoung — AI engineer based in NY. Explore projects, experience, and blog posts through an interactive terminal.",
  openGraph: {
    title: "AlexYoung | AI Engineer",
    description:
      "Personal website of AlexYoung — AI engineer based in NY.",
    url: "https://alex2yang97.github.io",
    siteName: "AlexYoung",
    type: "website",
  },
  metadataBase: new URL("https://alex2yang97.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground font-mono antialiased">
        <div className="scanline-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
