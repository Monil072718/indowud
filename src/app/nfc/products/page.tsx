import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";

type ProductSpec = {
  label: string;
  value: string;
};

type ProductResource = {
  label: string;
  href: string;
};

type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: string;
  chips: string[];
  specs: ProductSpec[];
  features: string[];
  resources?: ProductResource[];
};

const products: Product[] = [
  {
    id: "zerowud",
    name: "ZerOwud® NFC Panel",
    category: "Flagship boards",
    tagline: "Pure natural fibre composite. Zero fillers. All performance.",
    description:
      "Our flagship board is engineered from carefully processed natural fibres bound with high performance resins. The result is a panel that is dimensionally stable, moisture resistant and capable of taking premium finishes without sanding fatigue.",
    image:
      "https://images.pexels.com/photos/5691609/pexels-photo-5691609.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Stack of natural fibre composite boards",
    accent: "#0F766E",
    chips: ["Exterior & interior", "Fire retardant", "Termite proof"],
    specs: [
      { label: "Standard thickness", value: "6 mm – 25 mm" },
      { label: "Panel sizes", value: "2440 × 1220 mm | 3050 × 1220 mm" },
      { label: "Density", value: "650 ± 10 kg/m³" },
    ],
    features: [
      "Works with conventional woodworking tools and CNC routers.",
      "Accepts paint, veneer, laminate and textured coatings with minimal prep.",
      "Stable in humid climates; zero warping and swelling.",
    ],
    resources: [
      {
        label: "Download ZerOwud® technical sheet",
        href: "/brochures/technical-suggestions.pdf",
      },
    ],
  },
  {
    id: "nfc-board",
    name: "Indowud NFC Board",
    category: "Performance panels",
    tagline: "High density boards for millwork, retail and transport interiors.",
    description:
      "A versatile panel trusted by architects and joinery teams for partitions, retail fixtures and transport interiors. The consistent core delivers crisp routed edges and superior screw holding strength.",
    image:
      "https://images.pexels.com/photos/6120216/pexels-photo-6120216.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Composite board leaning on wall",
    accent: "#2563EB",
    chips: ["High impact", "Low VOC", "Precision machining"],
    specs: [
      { label: "Standard thickness", value: "8 mm – 30 mm" },
      { label: "Fire performance", value: "Meets IS 5509 Class 1" },
      { label: "Screw withdrawal", value: "1400 N (face) | 1250 N (edge)" },
    ],
    features: [
      "Uniform core ensures chip-free CNC routing and engraving.",
      "Excellent dimensional stability in air-conditioned spaces.",
      "Compatible with PU, melamine and water-based coatings.",
    ],
    resources: [
      {
        label: "Request commercial pricing",
        href: "/contact",
      },
    ],
  },
  {
    id: "nfc-door",
    name: "NFC Door",
    category: "Ready-to-install joinery",
    tagline: "Pre-balanced door shutters for high traffic spaces.",
    description:
      "Designed for hospitality, healthcare and contemporary homes, Indowud NFC doors combine a rigid core with factory balanced skins. They resist swelling, warping and termite attack even in coastal humidity.",
    image:
      "https://images.pexels.com/photos/7598019/pexels-photo-7598019.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Modern engineered door",
    accent: "#DB2777",
    chips: ["Ready for hardware", "Water resistant", "Sound dampening"],
    specs: [
      { label: "Shutter thickness", value: "32 mm | 35 mm | 40 mm" },
      { label: "Max height", value: "2400 mm" },
      { label: "Core composition", value: "NFC stile & rail with solid infill" },
    ],
    features: [
      "Factory routed for locks and vision panels on request.",
      "Skin options include HPL, veneer, paint-ready and textured wraps.",
      "Delivers up to 28 dB acoustic performance with gasket kit.",
    ],
    resources: [
      {
        label: "Download door catalogue",
        href: "/brochures/technical-suggestions.pdf",
      },
    ],
  },
  {
    id: "nfc-frame",
    name: "NFC Frame & Architrave",
    category: "Joinery systems",
    tagline: "Moisture proof frames that stay straight and true.",
    description:
      "Forget swelling, termite damage and patchy paint on frames. Our NFC frames arrive factory primed with tight tolerances, making on-site installation faster and cleaner.",
    image:
      "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Finished door frame sections",
    accent: "#059669",
    chips: ["Factory primed", "Custom profiles", "Quick install"],
    specs: [
      { label: "Section sizes", value: "70 × 100 mm | 90 × 120 mm" },
      { label: "Finish", value: "Primed | Veneer | PVC wrap" },
      { label: "Installation", value: "Knock-down kit with hardware slots" },
    ],
    features: [
      "Mitred corners with concealed fasteners for a seamless look.",
      "Accepts screws and concealed hinges without splitting.",
      "Ideal for wet cores, pools, spas and coastal homes.",
    ],
    resources: [
      {
        label: "Talk to a specification expert",
        href: "/contact",
      },
    ],
  },
  {
    id: "nfc-jali",
    name: "NFC Jali & Screens",
    category: "Architectural accents",
    tagline: "Intricate laser-cut patterns with the strength of solid boards.",
    description:
      "Create statement partitions, ceiling baffles or façade accents with custom cut NFC jalis. The dense composite core delivers clean edges and resists outdoor exposure when coated correctly.",
    image:
      "https://images.pexels.com/photos/5847435/pexels-photo-5847435.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Decorative screen panels",
    accent: "#7C3AED",
    chips: ["CNC + laser ready", "Outdoor friendly", "UV stable coatings"],
    specs: [
      { label: "Thickness", value: "12 mm | 16 mm | 18 mm" },
      { label: "Panel size", value: "Up to 3050 × 1220 mm" },
      { label: "Finish", value: "Paint | Metallic | Wood grain" },
    ],
    features: [
      "Supports fine perforations without chipping.",
      "Lightweight compared to metal screens for easier installation.",
      "Optional backing panels and mounting kits available.",
    ],
    resources: [
      {
        label: "Explore design library",
        href: "/nfc/applications",
      },
    ],
  },
  {
    id: "nfc-decking",
    name: "NFC Decking Planks",
    category: "Outdoor surfaces",
    tagline: "Warm underfoot, tough against weather.",
    description:
      "A reversible profile decking plank for terraces, balconies and pool decks. The natural fibre composite resists UV ageing and can be refreshed with a light sanding and sealer coat.",
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Decking boards installed outdoors",
    accent: "#D97706",
    chips: ["Slip resistant", "Barefoot friendly", "Low maintenance"],
    specs: [
      { label: "Profile", value: "145 × 25 mm (hollow) | 138 × 22 mm (solid)" },
      { label: "Span recommendation", value: "300 mm (center-to-center)" },
      { label: "Finish palette", value: "Teak | Walnut | Ash | Charcoal" },
    ],
    features: [
      "Hidden fastener system keeps the surface clean.",
      "Resists fungal growth and splintering.",
      "Colour stabilised for harsh tropical sunlight.",
    ],
    resources: [
      {
        label: "Download decking installation guide",
        href: "/brochures/technical-suggestions.pdf",
      },
    ],
  },
  {
    id: "nfc-trim",
    name: "NFC Trim & Skirting",
    category: "Finish profiles",
    tagline: "Seamless transitions for walls, floors and ceilings.",
    description:
      "Complete your project with trims that match your primary panels. We machine custom coves, battens and skirting profiles with a pristine paint-ready surface.",
    image:
      "https://images.pexels.com/photos/1573828/pexels-photo-1573828.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Trim profiles displayed on table",
    accent: "#DC2626",
    chips: ["Custom lengths", "Paint ready", "Flexible MOQ"],
    specs: [
      { label: "Profiles", value: "20+ standard | fully bespoke on request" },
      { label: "Finish options", value: "Primer | Veneer wrap | PU topcoat" },
      { label: "Lead time", value: "10 – 14 working days" },
    ],
    features: [
      "Consistent density avoids nail pops during installation.",
      "Delivered labelled and shrink wrapped by zone for faster fit-out.",
      "Ideal for curved surfaces when thermoformed.",
    ],
  },
  {
    id: "nfc-ancillary",
    name: "NFC Ancillary Systems",
    category: "Accessories",
    tagline: "Bonding systems and finishes engineered for NFC.",
    description:
      "From NFC-Glu® adhesives to UV resistant sealers, we bundle consumables that preserve the performance and warranty of every installation.",
    image:
      "https://images.pexels.com/photos/5711907/pexels-photo-5711907.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Adhesive and coating containers",
    accent: "#0EA5E9",
    chips: ["Warranty compliant", "Quick curing", "Low smell"],
    specs: [
      { label: "Adhesive kit", value: "NFC-Glu® (Part A + Part B)" },
      { label: "Top coat", value: "NFC Shield™ UV sealer" },
      { label: "Support", value: "On-site training & application guides" },
    ],
    features: [
      "Optimised open time for tropical weather.",
      "Non-yellowing topcoat system to protect exterior installations.",
      "Technical support hotline for applicators.",
    ],
    resources: [
      {
        label: "Book an applicator workshop",
        href: "/contact",
      },
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Product Portfolio"
        subtitle="Engineered components and systems crafted with natural fibre composites."
        trail={["Home", "NFC", "Products"]}
      />

      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,240px),1fr] xl:grid-cols-[minmax(0,260px),1fr]">
            <aside className="order-2 space-y-6 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur lg:order-1 lg:sticky lg:top-28">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Explore by range
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  Product Navigator
                </h2>
              </div>

              <div className="space-y-3 text-sm font-medium text-slate-600">
                {products.map((product) => (
                  <a
                    key={product.id}
                    href={`#${product.id}`}
                    className="flex items-center gap-3 rounded-xl border border-transparent bg-slate-100/40 px-3 py-2 transition hover:border-slate-200 hover:bg-white hover:shadow-sm"
                  >
                    <span
                      aria-hidden
                      className="inline-flex size-2 rounded-full"
                      style={{ backgroundColor: product.accent }}
                    />
                    <span className="flex-1">{product.name}</span>
                  </a>
                ))}
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-4 text-sm text-emerald-900 shadow-sm">
                <p className="font-semibold">Need a custom profile?</p>
                <p className="mt-1 text-emerald-800/90">
                  Our design lab prototypes bespoke sections, acoustic panels
                  and façade systems for architects and OEMs.
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow hover:bg-emerald-700"
                >
                  Book a discovery call
                </Link>
              </div>
            </aside>

            <div className="order-1 space-y-16 lg:order-2">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
                <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] md:items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Built for performance. Designed for planet-positive
                      projects.
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                      Every Indowud NFC product begins with sustainably sourced
                      agricultural fibres. Our vertically integrated facility
                      presses panels, machines profiles and finishes components,
                      giving project teams a complete kit that installs faster
                      and lasts longer.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      ["30+", "Applications certified"],
                      ["12", "Standard surface finishes"],
                      ["100%", "Recycleable offcuts"],
                    ].map(([stat, label]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                      >
                        <p className="text-2xl font-semibold text-slate-900">
                          {stat}
                        </p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {products.map((product, index) => (
                <motion.article
                  key={product.id}
                  id={product.id}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={index}
                  variants={fadeIn}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex flex-col gap-8 p-6 sm:p-8 lg:p-10">
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-center">
                      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-inner">
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{ backgroundColor: product.accent }}
                          aria-hidden
                        />
                        <div className="relative h-72">
                          <Image
                            src={product.image}
                            alt={product.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 320px"
                            priority={index === 0}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white"
                            style={{ backgroundColor: product.accent }}
                          >
                            {product.category}
                          </span>
                          {product.chips.map((chip) => (
                            <span
                              key={chip}
                              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                            {product.name}
                          </h3>
                          <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
                            {product.tagline}
                          </p>
                        </div>
                        <p className="text-sm leading-6 text-slate-600 sm:text-base">
                          {product.description}
                        </p>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <dl className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm text-slate-700">
                            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Technical snapshot
                            </dt>
                            {product.specs.map((spec) => (
                              <div
                                key={`${product.id}-${spec.label}`}
                                className="space-y-1 rounded-lg border border-transparent px-3 py-2 transition hover:border-slate-200 hover:bg-white"
                              >
                                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  {spec.label}
                                </dt>
                                <dd className="text-sm font-medium text-slate-800">
                                  {spec.value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                          <ul className="space-y-3 text-sm text-slate-700">
                            <li className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Why teams choose it
                            </li>
                            {product.features.map((feature) => (
                              <li
                                key={`${product.id}-${feature}`}
                                className="flex items-start gap-2 rounded-xl border border-transparent px-3 py-2 leading-6 transition hover:border-slate-200 hover:bg-slate-50"
                              >
                                <span
                                  className="mt-1 inline-flex size-1.5 rounded-full"
                                  style={{ backgroundColor: product.accent }}
                                  aria-hidden
                                />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {product.resources?.length ? (
                          <div className="flex flex-wrap gap-3 pt-2">
                            {product.resources.map((resource) => (
                              <Link
                                key={`${product.id}-${resource.label}`}
                                href={resource.href}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                              >
                                <span>⟶</span>
                                {resource.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


