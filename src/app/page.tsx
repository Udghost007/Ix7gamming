import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "IX7 Game – Download APK, Register, Login & Play 500+ Games on Android 2026",
  description: "IX7 Game is the ultimate Android gaming platform with 500+ premium games. Download the latest IX7 APK for free, create your account in 60 seconds, and unlock daily rewards. Your complete IX7 Gaming guide for 2026.",
  keywords: ["IX7 Game", "IX7", "ix7game", "ix7gaming", "IX7 APK", "IX7 App", "IX7 Download", "IX7 Game Download", "IX7 Game APK", "IX7 Game Login", "IX7 Game Register", "IX7 Game Android", "IX7 Game 2026", "IX7 Gaming"],
  openGraph: {
    title: "IX7 Game – Download APK, Register & Play 500+ Games | Complete Guide 2026",
    description: "Your complete guide to IX7 Game. Download the latest IX7 APK for free, register in 60 seconds, and explore 500+ premium games on Android.",
    url: "https://ix7gamming.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IX7 Game – Premium Android Gaming Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IX7 Game – Download APK, Register & Play 500+ Games | Complete Guide 2026",
    description: "Your complete guide to IX7 Game. Download the latest IX7 APK for free, register in 60 seconds, and explore 500+ premium games on Android.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://ix7gamming.com" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is IX7 Game and how does it work?", acceptedAnswer: { "@type": "Answer", text: "IX7 Game is a premium Android gaming platform offering 500+ games across categories like slots, live tables, sports, and arcade. Download the APK, create a free account, and start playing instantly." } },
    { "@type": "Question", name: "Is IX7 Game free to download and use?", acceptedAnswer: { "@type": "Answer", text: "Yes, the IX7 Game APK is completely free to download and install. Creating an account costs nothing, and new players receive a welcome bonus to get started." } },
    { "@type": "Question", name: "How do I create an IX7 Game account?", acceptedAnswer: { "@type": "Answer", text: "Open the IX7 app, tap Register, enter your mobile number or email, set a password, verify via OTP, and your account is ready in under 60 seconds." } },
    { "@type": "Question", name: "Is my personal information safe on IX7 Game?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. IX7 Game uses 256-bit SSL encryption, secure servers, and multi-factor authentication to protect all user data and transactions." } },
    { "@type": "Question", name: "What devices are compatible with IX7 Game?", acceptedAnswer: { "@type": "Answer", text: "IX7 Game runs on any Android device with Android 5.0 or higher, at least 2GB RAM, and 60MB of free storage." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomePage />
    </>
  );
}
