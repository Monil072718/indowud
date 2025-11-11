import type React from "react"
import Image from "next/image"

/* Simple icon badge (inline SVG, no extra deps) */
function IconBadge({ svg, label }: { svg: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white shadow-sm">
        {svg}
      </div>
      <span className="text-xs font-medium text-slate-700 text-center">{label}</span>
    </div>
  )
}

/* NFC-GLU section */
function NfcGluSection() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
      <div className="grid gap-8 md:grid-cols-[380px_1fr] md:items-start">
        {/* Left: product image */}
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1200/sample.jpg"
              alt="NFC-GLU adhesive containers"
              fill
              className="object-contain p-6"
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
              With our expertise and technical backup, we developed an all-in-one professional
              grade adhesive — <strong>NFC-GLU</strong> — to overcome such challenges.
            </p>
            <p>
              NFC-GLU extends a strong, water-resistant bond with almost all surfaces — whether
              rough or smooth, porous or non-porous.
            </p>
            <p>
              We strongly recommend using NFC-GLU together with Indowud NFC for bonding different
              surfaces together and faster, consistent results.
            </p>
          </div>

          {/* Feature icons */}
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <IconBadge
              svg={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#0FA5A5" strokeWidth="2" />
                  <path d="M12 7v6l4 2" stroke="#0FA5A5" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              label="Faster setting time"
            />
            <IconBadge
              svg={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3c4 6 4 9 0 13-4-4-4-7 0-13Z" stroke="#0FA5A5" strokeWidth="2" />
                </svg>
              }
              label="Water-resistant"
            />
            <IconBadge
              svg={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M7 12a5 5 0 0 1 10 0" stroke="#0FA5A5" strokeWidth="2" />
                  <path d="M9 14h6" stroke="#0FA5A5" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              label="Strong bonding"
            />
            <IconBadge
              svg={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M7 12l5-5 5 5-5 5-5-5Z" stroke="#0FA5A5" strokeWidth="2" />
                </svg>
              }
              label="Bonds on most surfaces"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const BRAND = {
  teal: "#0FA5A5",
  magenta: "#C13584",
}

type CTA = { label: string; href: string; download?: boolean }
type Spec = { label: string; value: string }

type Product = {
  id: string
  name: string
  slug: string
  tag?: string
  image: string
  blurb: string
  bullets?: string[]
  specs?: Spec[]
  cta?: CTA[]
  websiteUrl?: string
  showCustomSizeText?: boolean
}

/* ----------------------- DATA (unchanged) ----------------------- */

const PRODUCTS: Product[] = [
  {
    id: "zerowud-nfc",
    name: "ZeroWud nfc",
    slug: "zerowud-nfc",
    tag: "Build green with zerowud panels",
    image: "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/sample.jpg",
    blurb:
      "ZerOwud boasts good strength & durability, making it ideal for various applications, from furniture and cabinetry to wall panels.",
    specs: [
      { label: "Standard size", value: "8 feet x 4 feet (2440mm x 1220mm)" },
      { label: "Thickness (mm)", value: "6mm, 8mm, 12mm, 16mm, 18mm, 25mm" },
      { label: "Finish", value: "Available in both side surface smooth" },
    ],
    cta: [
      { label: "Download Brochure", href: "/Indowud-nfc-eBrochure.pdf", download: true },
      { label: "Talk to Sales", href: "/contact" },
    ],
    websiteUrl: "www.zerOwud.com",
  },
  {
    id: "indowud-nfc-board",
    name: "Indowud nfc Board",
    slug: "indowud-nfc-board",
    tag: "Transforming agricultural waste into sustainable panel",
    image: "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/sofa-2.jpg",
    blurb:
      "Offering a sustainable and high-performing alternative to traditional wood products. Durable and versatile, Indowud nfc is ideal for various applications in interiors and exteriors.",
    specs: [
      { label: "Available size", value: "8 feet x 4 feet (2440mm x 1220mm)" },
      { label: "Thickness (mm)", value: "6mm, 8mm, 12mm, 15/16mm, 18mm, 25mm" },
      { label: "Finish", value: "Available in both side rough surface" },
    ],
    cta: [{ label: "View Applications", href: "/nfc/applications" }],
    showCustomSizeText: true,
  },
  {
    id: "nfc-door",
    name: "nfc door",
    slug: "nfc-door",
    tag: "The eco-friendly door",
    image: "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/chair.jpg",
    blurb:
      "Seeking an eco-friendly alternative for your entryway? Look no further than Indowud nfc door. These doors combine the timeless beauty of natural wood panel. One can easily paint, polish, varnish or overlay veneer / laminate easily.",
    specs: [
      {
        label: "Size",
        value: "7 feet x 3 feet (2140mm x 920mm) & 8 feet x 3 feet (2440mm x 920mm)",
      },
      { label: "Thickness", value: "30mm" },
    ],
    cta: [{ label: "Get a Quote", href: "/contact" }],
  },
  {
    id: "nfc-frame",
    name: "nfc frame",
    slug: "nfc-frame",
    tag: "Reimagine doorways with nfc-frames",
    image: "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/wood.jpg",
    blurb:
      "Indowud nfc Door Frames boast pen grains akin to natural wood. Customize with ease, as these frames adapt to your desired aesthetic, effortlessly merging beauty and Sustainability.",
    bullets: ["Easy to paint, varnish, stain"],
    specs: [
      { label: "Available size", value: '3"×2", 4"×2.5", 5"×2.5"' },
      { label: "Standard length", value: "7' (2140mm), 8' (2440mm), 10' (3050mm)" },
    ],
    cta: [{ label: "Ask for Sections List", href: "#" }],
  },
  {
    id: "nfc-jaali",
    name: "nfc Jaali",
    slug: "nfc-jaali",
    tag: "Elevate your space with intricate patterns",
    image: "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/architecture.jpg",
    blurb:
      "Introducing Indowud NFC Jaali: A fusion of art, sustainability and strength. Our CNC routed nfc boards, including stunning mashrabia screens, enhance interiors and lighten the weight of building exteriors. Contact us for custom sizes.",
    cta: [{ label: "Start a Custom Design", href: "/contact" }],
  },
  {
    id: "nfc-decking",
    name: "nfc decking",
    slug: "nfc-decking",
    tag: "Elevate your out door living with solid composite decking",
    image: "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/deck.jpg",
    blurb:
      "The natural beauty of wood comes without the maintenance hassle. Our solid nfc decking provides exceptional strength, durability, and weather resistance. It is easy to stain to match the desired colour.",
    specs: [
      { label: "Available size", value: "8 feet x 6 inch (2440mm x 150mm)" },
      { label: "Thickness", value: "25mm, 30mm" },
    ],
    cta: [{ label: "See Available Patterns", href: "#" }],
  },
  {
    id: "nfc-flute",
    name: "nfc flute",
    slug: "nfc-flute",
    tag: "The perfect blend of nature's elegance and modern design",
    image: "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/wall.jpg",
    blurb:
      "nfc flutes offer fluting and louver solutions to cater to green architecture, fostering a harmonious relationship between human habitation and nature, paving the way for a more sustainable panelling in the louver and flute designs.",
    specs: [
      { label: "Available size", value: "8 feet x 1 feet (2440mm x 300mm)" },
      { label: "Thickness", value: "18mm & 25mm" },
    ],
    cta: [{ label: "See Available Patterns", href: "#" }],
  },
  {
    id: "nfc-textured-panels",
    name: "nfc textured panels",
    slug: "nfc-textured-panels",
    tag: "The magic of nature with intricate and captivating wooden grains",
    image: "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/floor.jpg",
    blurb:
      "Indowud introduces a revolutionary line of natural fibre composites featuring stunning wooden textured designs. Crafted from sustainable materials, these composites offer the warmth and elegance of wood with the durability and versatility of modern composites. Indowud: The perfect choice for eco-conscious designers and homeowners seeking a touch of nature's beauty in their projects.",
    specs: [
      { label: "Available size", value: "8 feet x 1 feet (2440mm x 300mm)" },
      { label: "Thickness", value: "8mm, 12mm, 15mm, 18mm, 25mm" },
      {
        label: "Open grain, Deep texture",
        value: "8 feet x 2 feet (2440mm x 600mm) — Thickness : 13mm, 15mm, 23mm",
      },
    ],
    cta: [{ label: "See Available Patterns", href: "#" }],
  },
  {
    id: "nfc-trim",
    name: "nfc trim",
    slug: "nfc-trim",
    tag: "Natural choice for eco-friendly trims",
    image: "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/bottle.jpg",
    blurb:
      "Indowud nfc trims offer a sustainable and versatile solution for your cut to size needs. The trims are perfect for adding a touch of elegance to any project. Available in a variety of sizes, Indowud cut trims can be easily customized to fit your specific requirements.",
    specs: [
      { label: "Standard Length", value: "8 feet (2440mm)" },
      { label: "Thickness", value: "8mm, 12mm, 15mm, 18mm, 25mm, 30mm" },
      { label: "Standard width", value: "100mm, 150mm, 200mm, 250mm" },
    ],
  },
  {
    id: "nfc-fence",
    name: "nfc fence",
    slug: "nfc-fence",
    tag: "Beauty and sustainability combined",
    image: "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_1600/fence.jpg",
    blurb:
      "Indowud fences offer a beautiful and eco-friendly alternative to traditional wood fencing. Strong, durable, and weather-resistant, Indowud fences are perfect for any outdoor space. Choose Indowud and experience the difference nature can make.",
    specs: [
      { label: "Length", value: "4 feet (1220mm)" },
      { label: "Width", value: "50mm, 75mm, 100mm" },
      { label: "Thickness", value: "15mm, 18mm, 25mm" },
      { label: "Style", value: "Standard, single twist, double twist" },
    ],
    cta: [{ label: "See Available Patterns", href: "#" }],
  },
]

/* ----------------------- UI helpers ----------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
      style={{ backgroundColor: BRAND.teal }}
    >
      {children}
    </span>
  )
}

type BtnVariant = "solid" | "outline"
function Button({
  href,
  children,
  variant = "solid",
  download,
}: {
  href: string
  children: React.ReactNode
  variant?: BtnVariant
  download?: boolean
}) {
  const commonProps = {
    href,
    ...(download && { download: "Indowud-nfc-eBrochure.pdf" }),
  }
  
  if (variant === "outline") {
    return (
      <a
        {...commonProps}
        className="inline-flex h-10 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 cursor-pointer"
      >
        {children}
      </a>
    )
  }
  return (
    <a
      {...commonProps}
      className="inline-flex h-10 items-center justify-center rounded-full bg-teal-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 cursor-pointer"
    >
      {children}
    </a>
  )
}

function SpecPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold leading-snug text-slate-900">{value}</div>
    </div>
  )
}

/* ----------------------- Page ----------------------- */

export const metadata = { title: "Products | Indowud NFC" }

export default function ProductsPage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, ${BRAND.magenta}, ${BRAND.teal})`,
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white ring-1 ring-white/30">
              Natural Fibre Composite
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Indowud NFC — Product Range
            </h1>
            <p className="mt-2 max-w-2xl text-white/90">
              Doors, frames, panels, trims and specialty profiles designed for performance, finish and the planet.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[-1px] h-8 bg-white clip-wave" />
      </section>

      {/* Main content with sidebar */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          {/* Left sidebar (not sticky) */}
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
              const reverse = i % 2 === 1
              return (
                <article
                  key={p.id}
                  id={p.id}
                  className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white shadow-sm ring-1 ring-black/5 group cursor-pointer"
                >
                  <div
                    className={`grid items-stretch gap-0 md:grid-cols-2 ${
                      reverse ? "md:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    {/* image */}
                    <div className="relative aspect-[4/3] overflow-visible rounded-t-3xl md:aspect-auto md:rounded-l-3xl md:rounded-tr-none p-4 sm:p-6 md:p-8">
                      <div className="relative h-full w-full overflow-hidden rounded-lg">
                        <Image
                          src={p.image || "/placeholder.svg"}
                          alt={p.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(min-width:1024px) 44rem, 100vw"
                          priority={i < 2}
                        />
                      </div>
                    </div>

                    {/* content */}
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
                          <div className="mt-4">
                            <p className="text-base text-slate-700 mb-2">
                              For more details, visit{" "}
                              <a
                                href={`https://${p.websiteUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-teal-100 text-teal-700 px-3 py-1.5 rounded-md font-semibold hover:bg-teal-200 transition-colors underline decoration-2 decoration-teal-600 text-base"
                              >
                                {p.websiteUrl}
                              </a>
                            </p>
                          </div>
                        )}
                      </div>

                      {p.showCustomSizeText ? (
                        <div className="mt-6">
                          <a
                            href="/contact"
                            className="text-base text-slate-700 hover:text-teal-600 transition-colors"
                          >
                            <span className="font-medium">Contact Us for Custom size</span>
                          </a>
                        </div>
                      ) : (
                        <div className="mt-6 flex flex-wrap gap-3">
                          <Button href={`#${p.slug}`} variant="solid">
                            Explore Specs
                          </Button>
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
              )
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

      {/* helper wave */}
      <style>{`
        .clip-wave {
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 65%, 0 100%);
        }
      `}</style>
    </main>
  )
}
