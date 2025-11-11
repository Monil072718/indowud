import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";

const BRAND = {
  teal: "#0FA5A5",
  magenta: "#C13584",
};

// Pattern images - you can add more images here
const PATTERN_IMAGES = [
  {
    id: "pattern-1",
    src: "/nfc-decking.png",
    alt: "NFC Decking Pattern 1",
  },
  {
    id: "pattern-2",
    src: "/nfc-decking_1.png",
    alt: "NFC Decking Pattern 2",
  },
  {
    id: "pattern-3",
    src: "/download.jpeg",
    alt: "NFC Decking Pattern 3",
  },
  {
    id: "pattern-4",
    src: "/download-2.jpeg",
    alt: "NFC Decking Pattern 4",
  },
  {
    id: "pattern-5",
    src: "/download-3.jpeg",
    alt: "NFC Decking Pattern 5",
  },
  {
    id: "pattern-6",
    src: "/download-4.jpeg",
    alt: "NFC Decking Pattern 6",
  },
  {
    id: "pattern-7",
    src: "/download-5.jpeg",
    alt: "NFC Decking Pattern 7",
  },
  {
    id: "pattern-8",
    src: "/download6.jpeg",
    alt: "NFC Decking Pattern 8",
  },
];

export const metadata = {
  title: "NFC Decking Patterns | Indowud NFC",
  description: "Explore available patterns for NFC decking - premium outdoor composite decking solutions.",
};

export default function NfcDeckingPatternsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, ${BRAND.magenta}, ${BRAND.teal})`,
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white ring-1 ring-white/30">
              Product Patterns
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              NFC Decking — Available Patterns
            </h1>
            <p className="mt-2 max-w-2xl text-white/90">
              Explore our range of NFC decking patterns designed for patios, poolsides, and walkways.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[-1px] h-8 bg-white clip-wave" />
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "HOME", href: "/" },
              { label: "NFC", href: "/nfc" },
              { label: "PRODUCTS", href: "/nfc/products" },
              { label: "NFC DECKING PATTERNS" },
            ]}
          />
        </div>

        {/* Back to Products Link */}
        <div className="mb-8">
          <Link
            href="/nfc/products#nfc-decking"
            className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Products
          </Link>
        </div>

        {/* Product Info */}
        <div className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">NFC Decking</h2>
          <p className="mt-3 text-base text-slate-700">
            The natural beauty of wood comes without the maintenance hassle. Our solid NFC decking
            provides exceptional strength, durability, and weather resistance. It is easy to stain
            to match the desired colour.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Available size
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                8 feet x 6 inch (2440mm x 150mm)
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Thickness
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">25mm, 30mm</div>
            </div>
          </div>
        </div>

        {/* Patterns Gallery */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Available Patterns</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PATTERN_IMAGES.map((pattern) => (
              <div
                key={pattern.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={pattern.src}
                    alt={pattern.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-slate-900">{pattern.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 sm:p-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              Interested in NFC Decking?
            </h3>
            <p className="mt-2 text-slate-700">
              Contact us to learn more about our decking solutions and get a custom quote.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 cursor-pointer"
              >
                Contact Us
              </Link>
              <Link
                href="/nfc/products"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 cursor-pointer"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Helper wave style */}
      <style>{`
        .clip-wave {
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
        }
      `}</style>
    </main>
  );
}

