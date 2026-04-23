import PageHeader from "@/components/common/PageHeader";

export default function MissionVisionPage() {
  return (
    <>
      <PageHeader
        category="Corporate"
        title="Mission, Vision & Quality"
        description="Clear principles that guide every board we make."
      />

      <section className="relative">
        {/* soft gradient like your screenshot-1 */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/50 to-teal-100/60" />
        <div className="relative max-w-4xl mx-auto px-6 py-14 md:py-20 text-center">
          {/* Mission */}
          <div className="mb-14">
            <h3 className="text-3xl font-bold italic underline decoration-2 underline-offset-4 mb-4">
              Mission
            </h3>
            <p className="text-base leading-relaxed text-gray-900">
              Our mission is to become the pioneers of agri-based nfc products in the
              world, as superior alternate of wood for home owners, builders,
              architects and designers
            </p>
          </div>

          {/* Vision */}
          <div className="mb-14">
            <h3 className="text-3xl font-bold italic underline decoration-2 underline-offset-4 mb-4">
              Vision
            </h3>
            <p className="text-base leading-relaxed text-gray-900">
              Our vision is to make Indowud nfc a brand synonymous with sustainability
              and innovation in the building materials with Make in India Initiative
            </p>
          </div>

          {/* Quality */}
          <div>
            <h3 className="text-3xl font-bold italic underline decoration-2 underline-offset-4 mb-4">
              Quality
            </h3>
            <p className="text-base leading-relaxed text-gray-900">
              We strategize around one principle goal – Passion for producing and
              delivering quality products that surpass customer expectations
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
