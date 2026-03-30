import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { SiteProvider } from "@/contexts/SiteContext";
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

const THEME_INIT_SCRIPT = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full bg-background text-foreground font-mono antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-terminal-green focus:text-background focus:rounded-md focus:text-sm"
        >
          Skip to main content
        </a>
        <div className="scanline-overlay" aria-hidden="true" />
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
