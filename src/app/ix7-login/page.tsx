import type { Metadata } from "next";
import Link from "next/link";

const CTA_LINK = "https://share.ix7game.org/share/agent/AA0R99AX?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0=";

export const metadata: Metadata = {
  title: "IX7 Login – Quick & Secure Account Access",
  description: "IX7 login guide covering all access methods, session management, and multi-device login. Learn how to log in to IX7 on any Android device quickly and securely.",
  keywords: ["IX7 login", "IX7 sign in", "IX7 account access", "IX7 login help", "IX7 login Android", "IX7 login 2026"],
  openGraph: {
    title: "IX7 Login – Quick & Secure Account Access",
    description: "Complete IX7 login guide with all access methods and security tips.",
    url: "https://ix7gamming.com/ix7-login",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IX7 Login" }],
  },
  twitter: { card: "summary_large_image", title: "IX7 Login Guide", description: "Log in to IX7 quickly and securely.", images: ["/og-image.png"] },
  alternates: { canonical: "https://ix7gamming.com/ix7-login" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ix7gamming.com" },
    { "@type": "ListItem", position: 2, name: "IX7 Login", item: "https://ix7gamming.com/ix7-login" },
  ],
};

export default function IX7LoginPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">IX7 Login</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">IX7 Login</span> – Get Back to Your Games
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Logging in to IX7 is quick and straightforward. Whether you use a password, biometrics, or OTP, your account is always just a few taps away. This guide covers every scenario you might encounter.
          </p>
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg px-10 py-4">
            Open IX7 & Login
          </a>
        </div>
      </section>

      {/* Quick Login Guide */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">IX7 Login in 3 Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Open IX7 App", desc: "Tap the IX7 icon on your home screen. The app loads in 1-2 seconds and shows the login screen if you are not already signed in." },
              { step: "2", title: "Enter Credentials", desc: "Type your registered phone number and password. Or tap the biometric icon for fingerprint login, or choose OTP login for password-free access." },
              { step: "3", title: "Start Playing", desc: "Once authenticated, you land on the IX7 home screen with full access to games, balance, promotions, and settings." },
            ].map((s, i) => (
              <div key={i} className="card-static text-center p-4">
                <div className="step-number mx-auto">{s.step}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Device Login */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Multi-Device Login</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">One Account, Multiple Devices</h3>
              <p className="text-gray-700 mb-4">
                Your IX7 account can be used on multiple Android devices. Install the IX7 app on your phone and tablet, log in with the same credentials, and your balance, game history, and preferences sync automatically across all devices.
              </p>
              <p className="text-gray-700">
                For security reasons, only one active session is allowed at a time. If you log in on a second device, the first session ends automatically. This prevents unauthorized access even if someone obtains your credentials.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Session Management</h3>
              <p className="text-gray-700 mb-4">
                IX7 sessions remain active for 30 days by default. After that, you will be prompted to re-authenticate. You can also manually end your session by tapping Profile → Settings → Log Out at any time.
              </p>
              <p className="text-gray-700">
                If you suspect unauthorized access, go to Profile → Security → Active Sessions to view all logged-in devices. You can remotely terminate any session from this screen and change your password for added protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Login Issues FAQ */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Common Login Issues</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "I am getting 'Invalid credentials' but my password is correct", a: "Double-check your phone number including the country code. If you registered with an email, make sure you are entering the email — not a phone number. Passwords are case-sensitive, so check your caps lock." },
              { q: "OTP is not arriving", a: "Wait 60 seconds and try again. Ensure your phone has signal and is not blocking messages from unknown numbers. If the issue persists, try the email OTP option or contact IX7 support." },
              { q: "Biometric login stopped working", a: "This usually happens after an OS update or if you re-enrolled your fingerprint. Go to IX7 Settings → Security → Biometric Login and re-enable it by scanning your fingerprint again." },
              { q: "Account locked after too many attempts", a: "For security, IX7 locks accounts after 5 failed login attempts. Wait 15 minutes for the lock to expire, or use the 'Forgot Password' flow to reset your credentials immediately." },
            ].map((item, i) => (
              <div key={i} className="card-static p-4">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3">
              Login to IX7
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Related</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ix7-game-login" className="btn-outline">IX7 Game Login</Link>
            <Link href="/ix7-register" className="btn-outline">Register</Link>
            <Link href="/ix7-game-register" className="btn-outline">IX7 Game Register</Link>
            <Link href="/download" className="btn-outline">Download</Link>
            <Link href="/ix7" className="btn-outline">About IX7</Link>
          </div>
        </div>
      </section>
    </>
  );
}
