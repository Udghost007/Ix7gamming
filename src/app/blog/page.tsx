import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IX7 Game Blog – Guides, Tips & Latest News for IX7 Gaming",
  description: "Stay up to date with IX7 Game guides, APK download tutorials, registration walkthroughs, and platform news. Expert tips to get the most out of IX7 Gaming in 2026.",
  keywords: ["IX7 Game blog", "IX7 guides", "IX7 tips", "IX7 Game news", "IX7 APK guide", "IX7 Game tutorials", "IX7 Gaming blog"],
  openGraph: {
    title: "IX7 Game Blog – Guides, Tips & News",
    description: "Expert guides, download tutorials, and the latest news from IX7 Gaming.",
    url: "https://ix7gaming.com/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IX7 Game Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IX7 Game Blog – Guides, Tips & News",
    description: "Expert guides, download tutorials, and the latest news from IX7 Gaming.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://ix7gaming.com/blog" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ix7gaming.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://ix7gaming.com/blog" },
  ],
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "IX7 Game Blog",
  description: "Guides, tutorials, tips, and news about IX7 Game and IX7 Gaming.",
  url: "https://ix7gaming.com/blog",
  publisher: {
    "@type": "Organization",
    name: "IX7 Gaming",
    url: "https://ix7gaming.com",
  },
  blogPost: [
    {
      "@type": "BlogPosting",
      headline: "IX7 Game Complete Guide: Everything You Need to Know in 2026",
      url: "https://ix7gaming.com/blog/ix7-game-complete-guide",
      datePublished: "2026-07-01",
      author: { "@type": "Organization", name: "IX7 Gaming" },
    },
    {
      "@type": "BlogPosting",
      headline: "How to Download IX7 APK on Android: Step-by-Step Tutorial",
      url: "https://ix7gaming.com/blog/ix7-apk-download-android",
      datePublished: "2026-06-28",
      author: { "@type": "Organization", name: "IX7 Gaming" },
    },
    {
      "@type": "BlogPosting",
      headline: "IX7 Game Register & Login: Create Your Account in 60 Seconds",
      url: "https://ix7gaming.com/blog/ix7-game-register-login",
      datePublished: "2026-06-25",
      author: { "@type": "Organization", name: "IX7 Gaming" },
    },
  ],
};

const posts = [
  {
    slug: "ix7-game-complete-guide",
    category: "Guide",
    date: "July 1, 2026",
    readTime: "8 min read",
    title: "IX7 Game Complete Guide: Everything You Need to Know in 2026",
    excerpt: "From downloading the APK to mastering the VIP program, this comprehensive guide covers every aspect of the IX7 Game platform. Perfect for new and returning players alike.",
  },
  {
    slug: "ix7-apk-download-android",
    category: "Tutorial",
    date: "June 28, 2026",
    readTime: "5 min read",
    title: "How to Download IX7 APK on Android: Step-by-Step Tutorial",
    excerpt: "A beginner-friendly walkthrough for downloading and installing the latest IX7 Game APK on any Android device. Includes troubleshooting tips for common installation issues.",
  },
  {
    slug: "ix7-game-register-login",
    category: "Tutorial",
    date: "June 25, 2026",
    readTime: "6 min read",
    title: "IX7 Game Register & Login: Create Your Account in 60 Seconds",
    excerpt: "Learn how to register a new IX7 Game account, verify your identity, and log in securely. We also cover password recovery and enabling two-factor authentication.",
  },
];

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">IX7 Game</span> Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guides, step-by-step tutorials, and the latest updates from the IX7 Gaming platform. Level up your knowledge.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" /></svg>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container max-w-4xl px-2 mx-auto">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <article className="card p-6 md:p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                    <span className="bg-primary-50 text-primary px-3 py-1 rounded-full font-medium">{post.category}</span>
                    <span className="text-gray-400">{post.date}</span>
                    <span className="text-gray-400">&#8226;</span>
                    <span className="text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-primary font-medium text-sm">Read Article &rarr;</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
