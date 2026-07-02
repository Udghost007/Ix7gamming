"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";

const CTA_LINK = "https://share.ix7game.org/share/agent/AA0R99AX?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0=";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/download" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Blog", href: "/blog" },
];

const allRoutes = [
  "/", "/download", "/about", "/features", "/blog",
  "/blog/ix7-game-complete-guide",
  "/blog/ix7-apk-download-android",
  "/blog/ix7-game-register-login",
  "/ix7", "/ix7-game", "/ix7-gaming", "/ix7-gamers",
  "/ix7-apk", "/ix7-game-apk", "/ix7-apk-download",
  "/ix7-game-download", "/ix7-game-login", "/ix7-game-register",
  "/ix7-game-app", "/ix7-game-2026", "/ix7-game-android",
  "/ix7-app-download", "/ix7-login", "/ix7-register",
  "/download-ix7", "/ix7-game-online", "/ix7-game-play",
  "/ix7-game-bonus", "/ix7-game-install", "/ix7-game-free",
  "/ix7-game-latest-version", "/ix7-game-update",
  "/ix7-download", "/ix7-game-apk-download", "/ix7-game-rewards",
  "/ix7-game-apk-2026", "/ix7-game-features", "/ix7-game-guide",
  "/ix7-game-review", "/ix7-game-signup",
  "/privacy-policy", "/disclaimer",
];

export default function Header() {
  const router = useRouter();

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const mainTimer = setTimeout(() => {
      allRoutes.forEach((route, index) => {
        const routeTimer = setTimeout(() => {
          router.prefetch(route);
        }, index * 100);
        timers.push(routeTimer);
      });
    }, 5000);

    return () => {
      clearTimeout(mainTimer);
      timers.forEach(clearTimeout);
    };
  }, [router]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light shadow-sm relative">
      <div className="max-w-7xl max-w-7xl mx-auto px-2 sm:px-6 py-2 relative">
        <div className="flex items-center justify-between h-10">
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
          >
            <Image
              src="/logo.webp"
              alt="IX7 Game Official Logo - Download IX7 APK"
              width={36}
              height={36}
              className="w-9 h-9 rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              priority
            />
            <span className="text-lg font-bold text-text-primary tracking-tight">
              IX7<span className="text-primary">Game</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary-50 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 btn-cta !py-2.5 !px-5 !text-sm !rounded-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
