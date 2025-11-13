import Image from "next/image";
import Link from "next/link";

/* ───────────────────────────────── Brand ───────────────────────────────── */
const BRAND = {
  teal: "#0FA5A5",
  magenta: "#C13584",
};

/* ───────────────────────────────── Types & Data ───────────────────────────────── */
type CTA = { label: string; href: string; download?: boolean };
type Spec = { label: string; value: string };

type Product = {
  id: string;
  name: string;
  slug: string;
  tag?: string;
  image: string;
  blurb: string;
  bullets?: string[];
  specs?: Spec[];
  cta?: CTA[];
  websiteUrl?: string;
  showCustomSizeText?: boolean;
  hideExploreSpecs?: boolean;
};

const PRODUCTS: Product[] = [
  {
    id: "zerowud-nfc",
    name: "ZeroWud nfc",
    slug: "zerowud-nfc",
    tag: "Build green with zero-filler panels",
    image: "/zerOwud-nfc-board.png.webp",
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
      { label: "Download Brochure", href: "/Indowud-nfc-eBrochure.pdf", download: true },
      { label: "Talk to Sales", href: "/contact" },
    ],
  },
  {
    id: "indowud-board",
    name: "Indowud nfc board",
    slug: "indowud-nfc-board",
    tag: "Engineered, application-ready interior/exterior board",
    image: "/Indowud-nfc-board.png.webp",
    blurb:
      "High-strength NFC board for furniture, kitchens, vanities and façades. Stable in humidity, dimensionally true, and easy to edge-band, rout and finish.",
    bullets: ["Warp-free & termite-resistant", "Excellent screw pull-out strength", "CNC-friendly for routing"],
    specs: [
      { label: "Sizes", value: "8×4 ft" },
      { label: "Thickness", value: "8–30 mm" },
    ],
    cta: [{ label: "View Applications", href: "/nfc/applications" }],
    showCustomSizeText: true,
  },
  {
    id: "nfc-door",
    name: "nfc door",
    slug: "nfc-door",
    tag: "The eco-friendly, engineered door",
    image: "/nfc-door.png.webp",
    blurb:
      "Stable, ready-to-finish door shutters that stay aligned and withstand seasonal changes. Choose skins, paint, veneer or lamination.",
    bullets: ["Robust, rattle-free core", "Moisture & termite resistance", "Ready for paint or veneer"],
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
    image: "/nfc-frame.png.webp",
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
    image: "/jaal1.jpg.webp",
    blurb:
      "CNC-cut NFC jallis enable ornate façades, screens and partitions that handle the weather without swelling or splitting.",
    bullets: ["Custom patterns", "Prime & paint ready"],
    cta: [{ label: "Start a Custom Design", href: "/contact" }],
  },
  {
    id: "nfc-decking",
    name: "NFC decking",
    slug: "nfc-decking",
    tag: "Long-lasting outdoor composite decking",
    image: "/nfc-decking.png.webp",
    blurb:
      "Slip-resistant surface, excellent drainage design and fade-resistant finish for patios, poolsides and walkways.",
    bullets: ["Hidden fasteners", "Low maintenance"],
    specs: [{ label: "Section", value: "25×150 mm • 2.4 m" }],
    cta: [{ label: "See Available Patterns", href: "/nfc/products/nfc-decking" }],
    hideExploreSpecs: true,
  },
  {
    id: "nfc-fluted",
    name: "nfc fluted profiles",
    slug: "nfc-fluted-profiles",
    tag: "Modern wall/ceiling flutes & trims",
    image: "/nfc-flute.png.webp",
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
    image: "/nfc-textured-panel.png.webp",
    blurb: "Authentic wood-like textures on durable NFC base for feature walls, cabinetry and façades.",
    bullets: ["Uniform pattern repeat", "Prime/paint or veneer"],
  },
  {
    id: "nfc-fence",
    name: "nfc fence",
    slug: "nfc-fence",
    tag: "Beauty and sustainability combined",
    image: "/nfc-fence.png.webp",
    blurb:
      "Weather-resistant pickets and rails that retain looks with minimal upkeep. Safe, splinter-free, child-friendly.",
    bullets: ["Custom heights & caps", "Colour-coatable"],
  },
];

/* ───────────────────────────────── UI helpers (in-page) ───────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
      style={{ backgroundColor: BRAND.teal }}
    >
      {children}
    </span>
  );
}

type BtnVariant = "solid" | "outline";
function Button({
  href,
  children,
  variant = "solid",
  download,
}: {
  href: string;
  children: React.ReactNode;
  variant?: BtnVariant;
  download?: boolean;
}) {
  const common = { href, ...(download && { download: "Indowud-nfc-eBrochure.pdf" }) };
  return variant === "outline" ? (
    <a
      {...common}
      className="inline-flex h-10 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 cursor-pointer"
    >
      {children}
    </a>
  ) : (
    <a
      {...common}
      className="inline-flex h-10 items-center justify-center rounded-full bg-teal-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 cursor-pointer"
    >
      {children}
    </a>
  );
}

function SpecPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold leading-snug text-slate-900">{value}</div>
    </div>
  );
}

function IconBadge({ svg, label }: { svg: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white shadow-sm">
        {svg}
      </div>
      <span className="text-xs font-medium text-slate-700 text-center">{label}</span>
    </div>
  );
}

function ProductImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-visible rounded-t-3xl md:aspect-auto md:rounded-l-3xl md:rounded-tr-none p-4 sm:p-6 md:p-8">
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-slate-100">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-[1.05]"
          sizes="(min-width:1024px) 44rem, 100vw"
          priority={priority}
        />
      </div>
    </div>
  );
}

/* NFC-GLU feature section (once) */
function NfcGluSection() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
      <div className="grid gap-8 md:grid-cols-[380px_1fr] md:items-start">
        {/* Left: image */}
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
          <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-slate-50 to-slate-100">
            <Image
              src="/nfc-glu.png.webp"
              alt="NFC-GLU adhesive containers"
              fill
              className="object-contain p-6 sm:p-8"
              sizes="(min-width: 1024px) 380px, 100vw"
            />
          </div>
        </div>

        {/* Right: copy */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            NFC-GLU: <span className="text-teal-700">Bonding With The Best</span>
          </h2>

          <div className="mt-4 space-y-4 text-sm sm:text-base text-slate-700 leading-7">
            <p>
              Our research team observed that while bonding Indowud NFC with other surfaces, the
              drying/bonding time can vary with weather conditions and the type of glue used.
            </p>
            <p>
              With our expertise and technical backup, we developed an all-in-one professional grade
              adhesive — <strong>NFC-GLU</strong> — to overcome such challenges.
            </p>
            <p>
              NFC-GLU extends a strong, water-resistant bond with almost all surfaces — whether
              rough or smooth, porous or non-porous.
            </p>
            <p>
              We strongly recommend using NFC-GLU together with Indowud NFC for faster, consistent results.
            </p>
          </div>

          {/* Feature icons */}
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <IconBadge
              svg={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke={BRAND.teal} strokeWidth="2" />
                  <path d="M12 7v6l4 2" stroke={BRAND.teal} strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              label="Faster setting"
            />
            <IconBadge
              svg={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3c4 6 4 9 0 13-4-4-4-7 0-13Z" stroke={BRAND.teal} strokeWidth="2" />
                </svg>
              }
              label="Water-resistant"
            />
            <IconBadge
              svg={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M7 12a5 5 0 0 1 10 0" stroke={BRAND.teal} strokeWidth="2" />
                  <path d="M9 14h6" stroke={BRAND.teal} strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              label="High strength"
            />
            <IconBadge
              svg={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M7 12l5-5 5 5-5 5-5-5Z" stroke={BRAND.teal} strokeWidth="2" />
                </svg>
              }
              label="Multi-surface"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────── Page ───────────────────────────────── */
export default function ProductsPage() {
  return (
    <main className="relative">
      {/* Gradient Hero */}
      <header className="w-full">
        <div className="bg-gradient-to-b from-teal-700 via-teal-600/70 to-pink-700/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <h1 className="text-center text-4xl font-serif italic font-semibold text-white drop-shadow">
              Products
            </h1>
            <nav className="mt-3 text-center text-xs tracking-widest text-white/90 uppercase">
              <ol className="inline-flex items-center">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    HOME
                  </Link>
                </li>
                <li aria-hidden="true" className="mx-1">
                  /
                </li>
                <li>
                  <Link href="/nfc" className="hover:text-white transition-colors">
                    NFC
                  </Link>
                </li>
                <li aria-hidden="true" className="mx-1">
                  /
                </li>
                <li className="text-white">PRODUCTS</li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      {/* Main with sidebar */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          {/* Left sidebar */}
          <aside className="hidden lg:block">
            <nav className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-700">Products</h3>
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
              <a
                href="/contact"
                className="mt-5 block rounded-md border border-slate-200 px-3 py-2 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Contact Sales
              </a>
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-10">
            {PRODUCTS.map((p, i) => {
              const reverse = i % 2 === 1;
              return (
                <article
                  key={p.id}
                  id={p.id}
                  className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white shadow-sm ring-1 ring-black/5 group"
                >
                  <div
                    className={`grid items-stretch gap-0 md:grid-cols-2 ${
                      reverse ? "md:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    {/* image */}
                    <ProductImage src={p.image} alt={p.name} priority={i < 2} />

                    {/* copy */}
                    <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                      <div className="max-w-xl">
                        {p.tag && <Eyebrow>{p.tag}</Eyebrow>}
                        <h2 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900">{p.name}</h2>
                        <p className="mt-2 text-sm sm:text-base leading-7 text-slate-700">{p.blurb}</p>

                        {p.bullets?.length ? (
                          <ul className="mt-4 grid list-disc gap-x-6 gap-y-1 pl-5 text-sm text-slate-700 sm:grid-cols-2">
                            {p.bullets.map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        ) : null}

                        {p.specs?.length ? (
                          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {p.specs.map((s, idx) => (
                              <SpecPill key={idx} label={s.label} value={s.value} />
                            ))}
                          </div>
                        ) : null}

                        {p.websiteUrl && (
                          <p className="mt-4 text-base text-slate-700">
                            For more details, visit{" "}
                            <a
                              href={`https://${p.websiteUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block text-teal-700 font-semibold hover:text-teal-800 transition-colors underline decoration-2 decoration-teal-600 text-base"
                            >
                              {p.websiteUrl}
                            </a>
                          </p>
                        )}
                      </div>

                      {p.showCustomSizeText ? (
                        <div className="mt-6">
                          <a href="/contact" className="text-base text-slate-700 hover:text-teal-600 transition-colors">
                            <span className="font-medium">Contact Us for Custom size</span>
                          </a>
                        </div>
                      ) : (
                        <div className="mt-6 flex flex-wrap gap-3">
                          {!p.hideExploreSpecs && (
                            <Button href={`#${p.slug}`} variant="solid">
                              Explore Specs
                            </Button>
                          )}
                          {(p.cta ?? []).map((c, idx) => (
                            <Button key={idx} href={c.href} variant="outline" download={c.download}>
                              {c.label}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}

            {/* NFC-GLU feature section */}
            <NfcGluSection />

            {/* Bottom CTA */}
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 sm:p-10">
              <div className="grid gap-6 md:grid-cols-3 md:items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-slate-900">Need guidance choosing the right product?</h3>
                  <p className="mt-2 text-slate-700">
                    Share your project details and we&apos;ll recommend the optimal thickness, finish and profiles for
                    long-term performance.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Button href="/contact" variant="solid">
                    Talk to an Expert
                  </Button>
                  <Button href="/nfc/applications" variant="outline">
                    See Applications
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* helper wave (for hero bottom if you want) */}
      <style>{`
        .clip-wave {
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
        }
      `}</style>
    </main>
  );
}
