import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";
import { AuthProvider } from "../components/auth/AuthContext";
import { AnimatedBg } from "../components/ui/AnimatedBg";
import { NavUser } from "../components/ui/NavUser";

export const metadata = {
  title: {
    default: "AI Learning Tracker - Track Your Learning Progress",
    template: "%s | AI Learning Tracker"
  },
  description: "Track your AI learning journey with smart progress tracking, auto-resume playback, and detailed timeline analytics. Plan lessons, watch videos, and review your learning sessions.",
  keywords: ["AI learning", "progress tracking", "video learning", "education tracker", "learning analytics", "auto-resume", "timeline"],
  authors: [{ name: "AI Learning Tracker" }],
  creator: "AI Learning Tracker",
  publisher: "AI Learning Tracker",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000',
    title: 'AI Learning Tracker - Track Your Learning Progress',
    description: 'Track your AI learning journey with smart progress tracking, auto-resume playback, and detailed timeline analytics.',
    siteName: 'AI Learning Tracker',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Learning Tracker - Track Your Learning Progress',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Learning Tracker - Track Your Learning Progress',
    description: 'Track your AI learning journey with smart progress tracking, auto-resume playback, and detailed timeline analytics.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI Learning Tracker",
    "description": "Track your AI learning journey with smart progress tracking, auto-resume playback, and detailed timeline analytics.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000',
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Progress tracking",
      "Auto-resume playback",
      "Timeline analytics",
      "Task management",
      "Video learning"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AuthProvider>
          <div className="header">
            <div className="headerInner">
              <div className="brand">
                <div className="logo" />
                <div>
                  <div className="brandTitle">AI Learning Tracker</div>
                  <div className="brandSub">Watch · Resume · Segments · Timeline</div>
                </div>
              </div>
              <nav className="nav" aria-label="Primary">
                <NavUser />
              </nav>
            </div>
          </div>
          <AnimatedBg />
          <div className="container">{children}</div>
          <div className="footer">
            <div className="footerInner">
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontWeight: 800, color: "rgba(15,23,42,.78)" }}>AI Learning Tracker</span>
                <span>Plan lessons, watch with auto-resume, and review sessions over time.</span>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
                <Link className="navLink" href="/">Dashboard</Link>
                <Link className="navLink" href="/tasks">Tasks</Link>
                <Link className="navLink" href="/timeline">Timeline</Link>
              </div>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
