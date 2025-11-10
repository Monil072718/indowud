import Image from "next/image";
const BRAND = {
  teal: "#0FA5A5",
  magenta: "#C13584",
};

type Product = {
  id: string;
  name: string;
  slug: string;
  tag?: string;
  image: string;
  blurb: string;
  bullets?: string[];
  cta?: { label: string; href: string }[];
  specs?: { label: string; value: string }[];
};

const PRODUCTS: Product[] = [
  {
    id: "zerowud-nfc",
    name: "ZeroWud nfc",
    slug: "zerowud-nfc",
    tag: "Build green with zero-filler panels",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_900/sample.jpg",
    blurb:
      "Dense, robust panels engineered for durability and finishing that can withstand moisture, termites and harsh weather—yet friendly to fabrication.",
    bullets: [
      "100% wood-free natural fibre composite",
      "Zero filler — consistent density",
      "Precision machining & screw holding",
      "Low maintenance, paint/veneer ready",
    ],
    specs: [
      { label: "Sizes", value: "8×4 ft, 9×6 ft" },
      { label: "Thickness", value: "6, 12, 18, 25 mm" },
      { label: "Finish", value: "Sanded, primer ready" },
    ],
    cta: [
      { label: "Download Brochure", href: "#" },
      { label: "Talk to Sales", href: "/contact" },
    ],
  },
  {
    id: "indowud-board",
    name: "Indowud nfc board",
    slug: "indowud-nfc-board",
    tag: "Engineered, application-ready interior/exterior board",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_900/sofa-2.jpg",
    blurb:
      "High-strength NFC board for furniture, kitchens, vanities and façades. Stable in humidity, dimensionally true, and easy to edge-band, rout and finish.",
    bullets: [
      "Warp-free & termite-resistant",
      "Excellent screw pull-out strength",
      "CNC-friendly for intricate routing",
    ],
    specs: [
      { label: "Sizes", value: "8×4 ft" },
      { label: "Thickness", value: "8–30 mm" },
    ],
    cta: [{ label: "View Applications", href: "/nfc/applications" }],
  },
  {
    id: "nfc-door",
    name: "nfc door",
    slug: "nfc-door",
    tag: "The eco-friendly, engineered door",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_900/chair.jpg",
    blurb:
      "Stable, ready-to-finish door shutters that stay aligned and withstand seasonal changes. Choose skins, paint, veneer or lamination.",
    bullets: [
      "Robust, rattle-free core",
      "Moisture & termite resistance",
      "Ready for paint or veneer",
    ],
    specs: [
      { label: "Standard", value: "32, 35, 38 mm thick" },
      { label: "Custom", value: "Sizes on request" },
    ],
    cta: [{ label: "Get a Quote", href: "/contact" }],
  },
  {
    id: "nfc-frame",
    name: "nfc frames",
    slug: "nfc-frames",
    tag: "Non-warping door/window frames",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_900/wood.jpg",
    blurb:
      "Dimensionally stable frames and mouldings that look premium and last. Accepts paint, stain or veneers with crisp edges and profiles.",
    bullets: ["Factory-profiled sections", "Uniform grain-like texture"],
    cta: [{ label: "Ask for Sections List", href: "#" }],
  },
  {
    id: "nfc-jalli",
    name: "nfc jalli",
    slug: "nfc-jalli",
    tag: "Dress your walls with intricate patterns",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_900/architecture.jpg",
    blurb:
      "CNC-cut NFC jallis enable ornate façades, screens and partitions that handle the weather without swelling or splitting.",
    bullets: ["Custom patterns", "Prime & paint ready"],
    cta: [{ label: "Start a Custom Design", href: "/contact" }],
  },
  {
    id: "nfc-decking",
    name: "nfc decking",
    slug: "nfc-decking",
    tag: "Long-lasting outdoor composite decking",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_900/deck.jpg",
    blurb:
      "Slip-resistant surface, excellent drainage design and fade-resistant finish for patios, poolsides and walkways.",
    bullets: ["Hidden fasteners", "Low maintenance"],
    specs: [{ label: "Section", value: "25×150 mm • 2.4 m" }],
    cta: [{ label: "See Colour Options", href: "#" }],
  },
  {
    id: "nfc-fluted",
    name: "nfc fluted profiles",
    slug: "nfc-fluted-profiles",
    tag: "Modern wall/ceiling flutes & trims",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_900/wall.jpg",
    blurb:
      "Accent walls that pop — fast to install, easy to repaint, and consistent groove depth for perfect rhythm.",
    bullets: ["Multiple groove widths", "Impact-resistant"],
    cta: [{ label: "Explore Profiles", href: "#" }],
  },
  {
    id: "nfc-textured",
    name: "nfc textured panels",
    slug: "nfc-textured-panels",
    tag: "Natural textures with craftsman-like detail",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_900/floor.jpg",
    blurb:
      "Authentic wood-like textures on durable NFC base for feature walls, cabinetry and façades.",
    bullets: ["Uniform pattern repeat", "Prime/paint or veneer"],
  },
  {
    id: "nfc-fence",
    name: "nfc fence",
    slug: "nfc-fence",
    tag: "Beauty and sustainability combined",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_900/fence.jpg",
    blurb:
      "Weather-resistant pickets and rails that retain looks with minimal upkeep. Safe, splinter-free, child-friendly.",
    bullets: ["Custom heights & caps", "Colour-coatable"],
  },
  {
    id: "nfg-glu",
    name: "NFG-GLU",
    slug: "nfg-glu",
    tag: "Bonding, when it matters most",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_900/bottle.jpg",
    blurb:
      "High-performance adhesive formulated for NFC surfaces and trims, ensuring strong bonds on complex profiles.",
    bullets: ["Fast set", "High final strength"],
    cta: [{ label: "Safety Data Sheet", href: "#" }],
  },
];

export const metadata = {
  title: "Products | Indowud NFC",
};

export default function ProductsPage() {
  return (
    <main className="relative">
      {/* Gradient banner */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, ${BRAND.magenta}, ${BRAND.teal})`,
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/30">
              Natural Fibre Composite
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Indowud NFC — Product Range
            </h1>
            <p className="mt-3 text-white/90">
              Doors, frames, panels, trims and specialty profiles designed for
              performance, finish and the planet.
            </p>
          </div>
        </div>

        {/* soft wave */}
        <div className="absolute inset-x-0 bottom-[-1px] h-8 bg-white clip-wave" />
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          {/* Left sticky nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
                Categories
              </h3>
              <ul className="space-y-1 text-sm">
                {PRODUCTS.map((p) => (
                  <li key={p.id}>
                    <a
                      href={`#${p.id}`}
                      className="block rounded-md px-2 py-1.5 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 h-px bg-slate-100" />
              <div className="mt-5 space-y-2 text-sm">
                <a
                  href="/nfc/applications"
                  className="inline-flex items-center rounded-full px-3 py-1 font-medium text-white"
                  style={{ backgroundColor: BRAND.teal }}
                >
                  View Applications
                </a>
                <a
                  href="/contact"
                  className="block rounded-md border border-slate-200 px-3 py-2 text-center font-medium text-slate-700 hover:bg-slate-50"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-12">
            {/* mini search/filter (static visual, no JS) */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-600">
                Showing <b>{PRODUCTS.length}</b> products
              </div>
              <div className="flex w-full max-w-lg items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
                <input
                  aria-label="Search products"
                  className="w-full rounded-lg bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400"
                  placeholder="Search (visual only)…"
                />
                <span
                  className="inline-flex shrink-0 items-center rounded-lg px-3 py-2 text-xs font-semibold text-white"
                  style={{ backgroundColor: BRAND.magenta }}
                >
                  Go
                </span>
              </div>
            </div>

            {PRODUCTS.map((p, i) => (
              <article
                key={p.id}
                id={p.id}
                className="group rounded-3xl border border-slate-200 bg-white shadow-sm ring-1 ring-black/5"
              >
                {/* responsive split */}
                <div className="grid items-stretch gap-0 md:grid-cols-2">
                  {/* image */}
                  <div className="relative overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/5" />
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width:1024px) 44rem, 100vw"
                      priority={i < 2}
                    />
                  </div>

                  {/* content */}
                  <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                    <div>
                      {p.tag && (
                        <span
                          className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white"
                          style={{ backgroundColor: BRAND.teal }}
                        >
                          {p.tag}
                        </span>
                      )}
                      <h2 className="mt-3 text-2xl font-bold text-slate-900">
                        {p.name}
                      </h2>
                      <p className="mt-2 text-slate-700">{p.blurb}</p>

                      {p.bullets && p.bullets.length > 0 && (
                        <ul className="mt-4 grid list-disc gap-x-6 gap-y-1 pl-5 text-sm text-slate-700 sm:grid-cols-2">
                          {p.bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                      )}

                      {p.specs && p.specs.length > 0 && (
                        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {p.specs.map((s, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm"
                            >
                              <span className="text-slate-500">{s.label}</span>
                              <span className="font-medium text-slate-800">
                                {s.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`#${p.slug}`}
                        className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm"
                        style={{ backgroundColor: BRAND.magenta }}
                      >
                        Explore Specs
                      </a>
                      {(p.cta ?? []).map((c, idx) => (
                        <a
                          key={idx}
                          href={c.href}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Bottom CTA */}
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 sm:p-10">
              <div className="grid gap-6 md:grid-cols-3 md:items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Need guidance choosing the right product?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Share your project details and we’ll recommend the optimal
                    thickness, finish and profiles for long-term performance.
                  </p>
                </div>
                <div className="flex gap-3 md:justify-end">
                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md"
                    style={{ backgroundColor: BRAND.teal }}
                  >
                    Talk to an Expert
                  </a>
                  <a
                    href="/nfc/applications"
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    See Applications
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* style helper: small wave cut under banner */}
      <style>{`
        .clip-wave {
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
        }
      `}</style>
    </main>
  );
}
