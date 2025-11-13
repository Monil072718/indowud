/* Server Component (no "use client") */
import Image from "next/image";
import Link from "next/link";
import GalleryClient from "./GalleryClient";

/** -------------------- PRODUCT → PATTERN IMAGES -------------------- */
/** Use root-relative paths for /public files, e.g. "/2.jpg" maps to <repo>/public/2.jpg */
const PRODUCT_PATTERNS: Record<
  string,
  {
    name: string;
    hero?: string;
    patterns: string[];
  }
> = {
  "nfc-decking": {
    name: "NFC Decking",
    hero: "/nfc-decking.png.webp",
    patterns: ["/pattern-2.jpg", "/pattern-3.jpg", "/pattern-4.jpg", "/pattern-5.jpg", "/pattern-6.jpg"],
  },
  "zerowud-nfc": {
    name: "ZeroWud nfc",
    hero: "/zerOwud-nfc-board.png.webp",
    patterns: ["/pattern-2.jpg", "/pattern-3.jpg", "/pattern-4.jpg", "/pattern-5.jpg", "/pattern-6.jpg"],
  },
};

/** -------------------- SEO -------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Next 15 requires awaiting params
  const data = PRODUCT_PATTERNS[slug];
  const title = data ? `${data.name} — Patterns | Indowud NFC` : "Patterns";
  const description = data
    ? `Browse available patterns and finishes for ${data.name}.`
    : "Browse available patterns.";
  return { title, description };
}

/** -------------------- Utils -------------------- */
function EmptyState() {
  return (
    <div className="text-center py-16">
      <p className="text-2xl font-semibold">No patterns found.</p>
      <p className="text-neutral-500 mt-2">
        Ask the Indowud team to add images for this product.
      </p>
      <div className="mt-6">
        <Link
          href="/nfc/products"
          className="inline-flex items-center rounded-lg border px-4 py-2 text-sm hover:bg-neutral-50"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}


/** -------------------- PAGE -------------------- */
export default async function ProductPatternsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCT_PATTERNS[slug];

  if (!product) {
    return <EmptyState />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* breadcrumb */}
      <nav className="mb-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-800">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/nfc/products" className="hover:text-neutral-800">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-800">{product.name}</span>
      </nav>

      {/* header */}
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {product.name} — Available Patterns
        </h1>
        <p className="mt-2 max-w-3xl text-neutral-600">
          Explore finishes, grains and colors available for {product.name}. Click any tile to view larger.
        </p>
      </header>

      {/* hero */}
      {product.hero && (
        <div className="mb-8 overflow-hidden rounded-2xl border">
          <Image
            src={product.hero}
            alt={`${product.name} hero`}
            width={1600}
            height={700}
            className="h-[260px] w-full object-cover md:h-[360px]"
            priority
          />
        </div>
      )}

      {/* gallery */}
      <GalleryClient name={product.name} items={product.patterns} />

      {/* back link */}
      <div className="mt-10">
        <Link
          href="/nfc/products"
          className="inline-flex items-center rounded-lg border px-4 py-2 text-sm hover:bg-neutral-50"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}

/** (Optional) If you want pre-render for known slugs */
export function generateStaticParams() {
  return Object.keys(PRODUCT_PATTERNS).map((slug) => ({ slug }));
}
