import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ix7gaming.com"),
  title: {
    default: "IX7 Game – Download APK, Login, Register & Complete Guide 2026",
    template: "%s | IX7 Game",
  },
  description:
    "IX7 Game is a premium Android gaming platform with 500+ games. Download the latest IX7 APK, register your account, login securely, and explore exclusive rewards. The ultimate IX7 Gaming guide for 2026.",
  keywords: [
    "IX7 Game",
    "IX7",
    "IX7 APK",
    "IX7 App",
    "IX7 Game Download",
    "IX7 Game APK",
    "Download IX7",
    "IX7 Game Login",
    "IX7 Game Register",
    "IX7 Game Features",
    "IX7 Game 2026",
    "IX7 Android",
    "IX7 Gaming",
    "IX7 Download APK",
    "ix7game",
    "ix7gaming",
  ],
  authors: [{ name: "ix7gaming.com" }],
  creator: "ix7gaming.com",
  publisher: "ix7gaming.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ix7gaming.com",
    siteName: "IX7 Game",
    title: "IX7 Game – Download APK, Login, Register & Complete Guide 2026",
    description:
      "IX7 Game is a premium Android gaming platform. Download the latest IX7 APK, register, login, and explore features & exclusive rewards.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IX7 Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IX7 Game – Download APK, Login, Register & Complete Guide 2026",
    description:
      "IX7 Game is a premium Android gaming platform. Download the latest IX7 APK, register, login, and explore features & exclusive rewards.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "ix7gaming-verification-pending",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://ix7gaming.com/#website",
      url: "https://ix7gaming.com",
      name: "IX7 Game",
      description:
        "IX7 Game is a premium Android gaming platform. Download APK, register, login, and explore features.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://ix7gaming.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://ix7gaming.com/#organization",
      name: "IX7 Game",
      url: "https://ix7gaming.com",
      logo: "https://ix7gaming.com/logo.webp",
      sameAs: [
        "https://www.facebook.com/ix7game",
        "https://t.me/ix7game"
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "IX7 Game",
      operatingSystem: "Android",
      applicationCategory: "GameApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
