import PageHero from "@/components/common/PageHero";

const logosTop = [
  { src: "https://dummyimage.com/220x110/ffffff/2b6cb0&text=ISO+45001:2015", alt: "ISO 45001" },
  { src: "https://dummyimage.com/220x110/ffffff/2b6cb0&text=ISO+9001:2015", alt: "ISO 9001" },
  { src: "https://dummyimage.com/220x110/ffffff/2b6cb0&text=ISO+14001:2015", alt: "ISO 14001" },
  { src: "https://dummyimage.com/220x110/ffffff/16a34a&text=RoHS", alt: "RoHS" },
];

const logosBottom = [
  { src: "https://dummyimage.com/220x110/ffffff/000&text=MSME", alt: "MSME" },
  { src: "https://dummyimage.com/220x110/ffffff/f97316&text=startup+india", alt: "Startup India" },
  { src: "https://dummyimage.com/220x110/ffffff/0ea5e9&text=EPD+Verified", alt: "EPD" },
  { src: "https://dummyimage.com/220x110/ffffff/22c55e&text=GreenPro", alt: "GreenPro" },
];

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        title="Certifications"
        trail={["Home", "Corporate", "Certifications"]}
        subtitle="Our manufacturing and materials meet globally recognized benchmarks."
      />

      <section className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logosTop.map((l) => (
            <div key={l.alt} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm grid place-items-center">
              <img src={l.src} alt={l.alt} className="h-20 object-contain" />
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logosBottom.map((l) => (
            <div key={l.alt} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm grid place-items-center">
              <img src={l.src} alt={l.alt} className="h-20 object-contain" />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-teal-50 border border-teal-100 p-6 text-teal-900">
          <p className="font-semibold">
            CII has certified Indowud NFC as a Sustainable Green Product and awarded the{" "}
            <span className="text-teal-700">GreenPro ecolabel</span>.
          </p>
          <p className="mt-2 text-sm text-teal-800">
            Products bearing the GreenPro ecolabel have lower environmental impact and contribute to higher performance in green buildings and companies.
          </p>
        </div>
      </section>
    </>
  );
}
