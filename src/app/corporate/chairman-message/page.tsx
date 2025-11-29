import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";

export default function ChairmanMessagePage() {
  return (
    <>
      <PageHeader
        category="Corporate"
        title="Chairman Message"
        description="A message from our Chairman, Mr. B L Bengani."
      />

      <section className="max-w-5xl mx-auto px-3 sm:px-6 py-8 md:py-16">
        {/* Intro */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">
          <div className="flex-1 text-center md:text-left">
            <p className="text-base font-medium text-gray-900">
              With over 30 years in the ply industry, Mr. Bengani is respected
              as the founder of Uniply. Today, as the Chairman of Indowud, he
              is pioneering natural fibre composite wood in India and the world.
            </p>
          </div>
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden grayscale relative">
            <Image
              src="/bl.webp"
              alt="Chairman"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Motto */}
        <div className="mt-8 md:mt-10 rounded-xl bg-gradient-to-r from-rose-50 to-teal-50 border border-gray-200 p-4 md:p-6 text-center">
          <blockquote className="text-base text-rose-700 italic font-semibold leading-relaxed">
            Quality of the product is determined with performance and customer
            satisfaction. Customer&apos;s accessibility to promoters provides
            confidence in product and ease to decide. This is the mantra I
            follow at Indowud NFC.
          </blockquote>
        </div>

        {/* Body */}
        <div className="mt-8 md:mt-12 space-y-5 md:space-y-6 text-gray-700 leading-7 text-base">
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
            <div className="mt-2 h-16 w-auto relative opacity-80">
              <Image
                src="/sign.png"
                alt="signature"
                width={200}
                height={64}
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
