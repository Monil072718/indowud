/* Server Component (no "use client") */
import Image from "next/image";
import Link from "next/link";

/** -------------------- PRODUCT → PATTERN IMAGES -------------------- */
/** Replace demo URLs with your real product pattern images */
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
    hero:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/park.jpg",
    patterns: [
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/bench.jpg",
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/mountain.jpg",
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/beach.jpg",
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/house.jpg",
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/city.jpg",
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/lake.jpg",
    ],
  },
  "zerowud-nfc": {
    name: "ZeroWud nfc",
    hero:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/sample.jpg",
    patterns: [
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/flowers.jpg",
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/city.jpg",
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/lake.jpg",
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/park.jpg",
    ],
  },
};

/** -------------------- SEO -------------------- */
export function generateMetadata({ params }: { params: { slug: string } }) {
  const data = PRODUCT_PATTERNS[params.slug];
  const title = data ? `${data.name} — Patterns | Indowud NFC` : "Patterns";
  const description =
    data
      ? `Browse available patterns and finishes for ${data.name}.`
      : "Browse available patterns.";
  return { title, description };
}

/** -------------------- Lightbox (client) -------------------- */
function cn(...x: (string | false | null | undefined)[]) {
  return x.filter(Boolean).join(" ");
}

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

/** Client-only gallery (imported inside server component) */
function GalleryClient({
  items,
  name,
}: {
  items: string[];
  name: string;
}) {
  "use client";
  import("react"); // type hint only

  const [open, setOpen] = (require("react") as typeof import("react")).useState(false);
  const [idx, setIdx] = (require("react") as typeof import("react")).useState(0);

  const onKey = (e: KeyboardEvent) => {
    if (!open) return;
    if (e.key === "Escape") setOpen(false);
    if (e.key === "ArrowRight") setIdx((i) => (i + 1) % items.length);
    if (e.key === "ArrowLeft")
      setIdx((i) => (i - 1 + items.length) % items.length);
  };

  (require("react") as typeof import("react")).useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, items.length]);

  return (
    <>
      {/* grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((src, i) => (
          <button
            key={i}
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
            className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md"
          >
            <Image
              src={src}
              alt={`${name} pattern ${i + 1}`}
              width={900}
              height={600}
              className="h-56 w-full object-cover transition group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <span className="absolute bottom-2 right-2 rounded-md bg-black/55 px-2 py-1 text-[11px] font-medium text-white">
              View
            </span>
          </button>
        ))}
      </div>

      {/* lightbox */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      >
        {/* image container */}
        <div
          className="absolute inset-0 mx-auto flex max-w-6xl items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {open && (
            <div className="relative w-full">
              <Image
                src={items[idx]}
                alt={`${name} large pattern ${idx + 1}`}
                width={1600}
                height={1066}
                className="max-h-[80vh] w-full rounded-2xl object-contain shadow-2xl"
                sizes="100vw"
                priority
              />
              {/* controls */}
              <div className="absolute inset-x-0 -top-12 flex items-center justify-between px-1">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-white/90 px-3 py-1 text-sm shadow hover:bg-white"
                >
                  Close
                </button>
                <span className="rounded-lg bg-white/90 px-3 py-1 text-xs font-medium shadow">
                  {idx + 1} / {items.length}
                </span>
              </div>
              <button
                aria-label="Prev"
                onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              >
                ‹
              </button>
              <button
                aria-label="Next"
                onClick={() => setIdx((i) => (i + 1) % items.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/** -------------------- PAGE -------------------- */
export default function ProductPatternsPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = PRODUCT_PATTERNS[params.slug];

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
          Explore finishes, grains and colors available for {product.name}. Click any
          tile to view larger.
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
