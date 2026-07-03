import Image from "next/image";
import Link from "next/link";
import TrackedCTALink from "./TrackedCTALink";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/download" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Blog", href: "/blog" },
  { name: "Complete Guide", href: "/blog/ix7-game-complete-guide" },
  { name: "APK Download Guide", href: "/blog/ix7-apk-download-android" },
  { name: "Register & Login", href: "/blog/ix7-game-register-login" },
];

const brandLinks = [
  { name: "IX7", href: "/ix7" },
  { name: "IX7 Game", href: "/ix7-game" },
  { name: "IX7 Gaming", href: "/ix7-gaming" },
  { name: "IX7 Gamers", href: "/ix7-gamers" },
  { name: "IX7 APK", href: "/ix7-apk" },
  { name: "IX7 Game APK", href: "/ix7-game-apk" },
  { name: "IX7 Game App", href: "/ix7-game-app" },
  { name: "IX7 Game Features", href: "/ix7-game-features" },
];

const apkLinks = [
  { name: "IX7 APK Download", href: "/ix7-apk-download" },
  { name: "IX7 Game Download", href: "/ix7-game-download" },
  { name: "IX7 App Download", href: "/ix7-app-download" },
  { name: "Download IX7", href: "/download-ix7" },
  { name: "IX7 Download", href: "/ix7-download" },
  { name: "IX7 Game APK Download", href: "/ix7-game-apk-download" },
  { name: "IX7 Game APK 2026", href: "/ix7-game-apk-2026" },
  { name: "IX7 Game Install", href: "/ix7-game-install" },
  { name: "IX7 Game Latest Version", href: "/ix7-game-latest-version" },
  { name: "IX7 Game Update", href: "/ix7-game-update" },
  { name: "IX7 Game Free", href: "/ix7-game-free" },
];

const moreLinks = [
  { name: "IX7 Game Login", href: "/ix7-game-login" },
  { name: "IX7 Login", href: "/ix7-login" },
  { name: "IX7 Game Register", href: "/ix7-game-register" },
  { name: "IX7 Register", href: "/ix7-register" },
  { name: "IX7 Game Signup", href: "/ix7-game-signup" },
  { name: "IX7 Game 2026", href: "/ix7-game-2026" },
  { name: "IX7 Game Android", href: "/ix7-game-android" },
  { name: "IX7 Game Online", href: "/ix7-game-online" },
  { name: "IX7 Game Play", href: "/ix7-game-play" },
  { name: "IX7 Game Bonus", href: "/ix7-game-bonus" },
  { name: "IX7 Game Rewards", href: "/ix7-game-rewards" },
  { name: "IX7 Game Guide", href: "/ix7-game-guide" },
  { name: "IX7 Game Review", href: "/ix7-game-review" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* CTA Banner */}
      <div className="hero-gradient footer">
        <div className="max-w-7xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-5  relative py-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Start Your IX7 Gaming Journey Today
          </h3>
          <p className="text-red-100 mb-6 mx-auto">
            Download the IX7 Game APK now and unlock 500+ premium games, daily rewards, and exclusive bonuses on your Android device.
          </p>
          <TrackedCTALink
            location="footer_cta_banner"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3.5 px-8 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download IX7 APK Free
          </TrackedCTALink>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-5  relative py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <TrackedCTALink location="footer_logo" className="flex items-center gap-2.5 mb-4 group">
              <Image src="/logo.webp" alt="IX7 Game Logo" width={36} height={36} className="w-9 h-9 rounded-lg shadow-md" />
              <span className="text-lg font-bold text-white tracking-tight">
                IX7<span className="text-red-400">Game</span>
              </span>
            </TrackedCTALink>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              IX7 Game is a next-generation mobile gaming platform built for Android. Enjoy a seamless experience with fast performance, secure accounts, and exciting daily rewards.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">IX7 Game</h4>
            <ul className="space-y-2.5">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">APK Download</h4>
            <ul className="space-y-2.5">
              {apkLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">More</h4>
            <ul className="space-y-2.5">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-xl border border-gray-700">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">Notice:</strong> This website provides informational content about IX7 Game and is not affiliated with or operated by the official IX7 Game platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5  relative py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            Copyright &copy; 2026 ix7gamming.com | All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="/disclaimer" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
