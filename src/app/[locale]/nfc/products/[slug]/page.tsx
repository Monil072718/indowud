/* Server Component (no "use client") */
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import GalleryClient from "./GalleryClient";

/** -------------------- PRODUCT → PATTERN IMAGES -------------------- */
/** Use root-relative paths for /public files, e.g. "/2.jpg" maps to <repo>/public/2.jpg */
const PRODUCT_PATTERNS: Record<
  string,
  {
    name: string;
    hero?: string;
    patterns: string[];
    parentHref?: string;
  }
> = {
  "nfc-decking": {
    name: "NFC Decking",
    parentHref: "/nfc/products/nfc-decking",
    patterns: ["/pattern-2.jpg", "/pattern-3.jpg", "/pattern-4.jpg", "/pattern-5.jpg", "/pattern-6.jpg"],
  },
  "zerowud-nfc": {
    name: "ZeroWud nfc",
    parentHref: "/nfc/products/zerowud-nfc",
    patterns: ["/pattern-2.jpg", "/pattern-3.jpg", "/pattern-4.jpg", "/pattern-5.jpg", "/pattern-6.jpg"],
  },
  "nfc-textured-panels-patterns": {
    name: "NFC Textured Panels Patterns",
    parentHref: "/nfc/products/nfc-textured-panels",
    patterns: [
      "/NFC textured panel-t1.png",
      "/NFC textured panel-t3.png",
      "/NFC textured pannel open grained deep.png",
      "/NFC textured panel-t2.png",
      "/NFC textured panel-t5.png",
      "/NFC textured panel-t4.png"
    ],
  },
  "nfc-flute-patterns": {
    name: "NFC Flute Patterns",
    parentHref: "/nfc/products/nfc-flute",
    patterns: [
      "/NFC flute-1.png",
      "/NFC flute-2.png",
      "/NFC flute-3.png",
      "/NFC flute-4.png",
      "/NFC flute-5.png",
      "/NFC flute-6.png",
      "/NFC flute-7.png",
      "/NFC flute-8.png",
      "/NFC flute-9.png"
    ],
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
    <>
      <PageHeader
        category="Patterns"
        title={product.name}
        highlight="Available Patterns"
        description={`Explore finishes, grains and colors available for ${product.name}. Click any tile to view larger.`}
      />
      <div className="mx-auto max-w-7xl px-4 py-8">
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
            href={product.parentHref || "/nfc/products"}
            className="inline-flex items-center rounded-lg border px-4 py-2 text-sm hover:bg-neutral-50"
          >
            ← Back to {product.parentHref ? product.name.replace(" Patterns", "") : "Products"}
          </Link>
        </div>
      </div>
    </>
  );
}

/** (Optional) If you want pre-render for known slugs */
export function generateStaticParams() {
  return Object.keys(PRODUCT_PATTERNS).map((slug) => ({ slug }));
}
