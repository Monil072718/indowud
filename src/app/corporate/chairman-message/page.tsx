import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";

export default function ChairmanMessagePage() {
  return (
    <>
      <PageHero
        title="Chairman Message"
        trail={["Home", "Corporate", "Chairman Message"]}
      />

      <section className="max-w-5xl mx-auto px-3 sm:px-6 py-8 md:py-16">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,160px] gap-5 md:gap-8 items-center md:items-start">
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-base sm:text-lg font-medium text-gray-900">
              With over 30 years in the ply industry, Mr. Bengani is respected
              as the founder of Uniply. Today, as the Chairman of Indowud, he
              is pioneering natural fibre composite wood in India and the world.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Chairman"
            className="order-1 md:order-2 mx-auto md:mx-0 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover grayscale justify-self-end"
          />
        </div>

        {/* Motto */}
        <div className="mt-8 md:mt-10 rounded-xl bg-gradient-to-r from-rose-50 to-teal-50 border border-gray-200 p-4 md:p-6 text-center">
          <blockquote className="text-base sm:text-lg text-rose-700 italic font-semibold leading-relaxed">
            Quality of the product is determined with performance and customer
            satisfaction. Customer’s accessibility to promoters provides
            confidence in product and ease to decide. This is the mantra I
            follow at Indowud NFC.
          </blockquote>
        </div>

        {/* Body */}
        <div className="mt-8 md:mt-12 space-y-5 md:space-y-6 text-gray-700 leading-7 text-base sm:text-lg">
          <SectionHeading eyebrow="Message" title="Embracing A Sustainable Future, One NFC Board At A Time" />
          <p>
            In a world grappling with the escalating climate crisis, every
            responsible citizen and business leader must actively seek
            solutions. At Indowud NFC, we believe that innovation and
            sustainability are not mere buzzwords, but the cornerstones of
            building a better tomorrow.
          </p>
          <p>
            I’m proud to present to you our remarkable range of sustainable
            products. Crafted from a naturally abundant and renewable resource,
            our panels are eco-friendly and possess superior qualities that make
            them a compelling choice for homeowners, architects, designers,
            builders and contractors.
          </p>
          <p>
            Our meticulous manufacturing processes ensure our products are
            termite-proof, water-proof and even flame-retardant + smoke
            suppressant, making them suitable for a wide range of applications
            for interiors and exteriors.
          </p>
          <div className="flex flex-col items-end pr-0 sm:pr-1">
            <p className="font-semibold">Sincerely,</p>
            <p>B L BENGANI</p>
            <img
              src="/sign.png"
              alt="signature"
              className="mt-2 h-16 w-auto opacity-80"
            />
          </div>
        </div>
      </section>
    </>
  );
}
