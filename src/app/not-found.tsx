import Link from "next/link";

const CTA_LINK = "https://share.ix7game.org/share/agent/AA0R99AX?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0=";

export default function NotFound() {
  return (
    <section className="section-padding min-h-[70vh] flex items-center justify-center">
      <div className="container text-center max-w-lg">
        <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Head back to the homepage or grab the latest IX7 Game APK below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta">
            Download IX7 APK
          </a>
        </div>
      </div>
    </section>
  );
}
