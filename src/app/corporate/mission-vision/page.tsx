import PageHero from "@/components/common/PageHero";

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        title="Mission, Vision & Quality"
        trail={["Home", "Corporate", "Mission & Vision"]}
        subtitle="Clear principles that guide every board we make."
      />

      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50 to-teal-100" />
        <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-20">
          {/* 3 columns */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-8 text-center">
              <h3 className="text-2xl font-bold italic mb-3 underline decoration-2">
                Mission
              </h3>
              <p className="text-gray-700">
                Become the pioneers of agri-based NFC products globally — a
                superior alternative to wood for homeowners, builders,
                architects and designers.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-8 text-center">
              <h3 className="text-2xl font-bold italic mb-3 underline decoration-2">
                Vision
              </h3>
              <p className="text-gray-700">
                Make Indowud NFC synonymous with sustainability and innovation
                in building materials, strengthening the Make-in-India
                initiative.
              </p>
            </div>

            {/* Quality */}
            <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-8 text-center">
              <h3 className="text-2xl font-bold italic mb-3 underline decoration-2">
                Quality
              </h3>
              <p className="text-gray-700">
                A single principle drives us: passion for producing and
                delivering products that consistently surpass customer
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
