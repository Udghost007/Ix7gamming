import type { Metadata } from "next";
import Link from "next/link";

const CTA_LINK = "https://share.ix7game.org/share/agent/AA0R99AX?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0=";

export const metadata: Metadata = {
  title: "IX7 APK – Official Download for Android (Safe & Free)",
  description: "Get the official IX7 APK for Android. Safe, verified, under 60 MB. Learn about APK security, version history, and installation requirements before downloading.",
  keywords: ["IX7 APK", "IX7 APK download", "IX7 APK Android", "IX7 APK free", "IX7 APK safe", "IX7 APK latest"],
  openGraph: {
    title: "IX7 APK – Official Download for Android (Safe & Free)",
    description: "Get the official IX7 APK for Android. Safe, verified, under 60 MB.",
    url: "https://ix7gamming.com/ix7-apk",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IX7 APK Download" }],
  },
  twitter: { card: "summary_large_image", title: "IX7 APK – Official Download for Android", description: "Get the official IX7 APK. Safe, free, under 60 MB.", images: ["/og-image.png"] },
  alternates: { canonical: "https://ix7gamming.com/ix7-apk" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ix7gamming.com" },
    { "@type": "ListItem", position: 2, name: "IX7 APK", item: "https://ix7gamming.com/ix7-apk" },
  ],
};

export default function IX7ApkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">IX7 APK</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">IX7 APK</span> – Official Android Package
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The IX7 APK is the official installation package for Android. It is digitally signed, malware-free, and optimized for performance on a wide range of devices. Download with confidence.
          </p>
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-10 py-4">
            Download IX7 APK
          </a>
        </div>
      </section>

      {/* What is an APK */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What Is the IX7 APK?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              APK stands for Android Package Kit — it is the file format Android uses to distribute and install applications. Since IX7 Game is not available on the Google Play Store, the APK is the official way to install the app on your device. Think of it like downloading a .exe file on Windows or a .dmg on Mac.
            </p>
            <p className="text-gray-700 mb-4">
              The IX7 APK is built and signed by the official IX7 development team. Each release undergoes automated virus scanning, manual code review, and penetration testing before it is published. When you download from our official link, you are guaranteed to receive the authentic, untampered package.
            </p>
            <p className="text-gray-700">
              The current IX7 APK weighs under 60 MB, making it one of the lightest full-featured gaming platforms available. It requires Android 5.0 or higher and 2 GB of RAM for optimal performance, though it will run on devices with as little as 1 GB RAM at reduced settings.
            </p>
          </div>
        </div>
      </section>

      {/* APK Details Table */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">IX7 APK Technical Details</h2>
          <div className="max-w-2xl mx-auto">
            <table className="info-table w-full">
              <tbody>
                <tr><td className="font-semibold">Package Name</td><td>com.ix7game.app</td></tr>
                <tr><td className="font-semibold">File Size</td><td>~55 MB</td></tr>
                <tr><td className="font-semibold">Current Version</td><td>4.2.1 (July 2026)</td></tr>
                <tr><td className="font-semibold">Min. Android Version</td><td>5.0 (Lollipop)</td></tr>
                <tr><td className="font-semibold">Architecture</td><td>ARM64, ARMv7, x86</td></tr>
                <tr><td className="font-semibold">Signature</td><td>SHA-256 verified</td></tr>
                <tr><td className="font-semibold">Price</td><td>Free</td></tr>
                <tr><td className="font-semibold">Last Updated</td><td>June 28, 2026</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Is the IX7 APK Safe?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Digitally Signed", desc: "Every IX7 APK release is signed with the official developer certificate. Android verifies this signature before installation, ensuring the file has not been modified." },
              { title: "Virus Scanned", desc: "Each build is scanned with multiple antivirus engines including VirusTotal, Avast, and Kaspersky before publication. Zero malware, zero adware, guaranteed." },
              { title: "No Root Required", desc: "The IX7 APK works on standard, unrooted Android devices. It does not request excessive permissions — only storage, internet, and optional notifications." },
            ].map((item, i) => (
              <div key={i} className="card-static p-4">
                <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3">
              Get IX7 APK Now
            </a>
          </div>
        </div>
      </section>

      {/* Links */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related Downloads</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ix7-apk-download" className="btn-outline">APK Download Guide</Link>
            <Link href="/ix7-game-apk" className="btn-outline">IX7 Game APK</Link>
            <Link href="/ix7-game-install" className="btn-outline">Install Guide</Link>
            <Link href="/ix7-game-latest-version" className="btn-outline">Latest Version</Link>
            <Link href="/ix7-game-android" className="btn-outline">Android Guide</Link>
            <Link href="/ix7" className="btn-outline">About IX7</Link>
          </div>
        </div>
      </section>
    </>
  );
}
