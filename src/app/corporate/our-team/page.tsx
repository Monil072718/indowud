import PageHero from "@/components/common/PageHero";

type ProfileProps = {
  name: string;
  role: string;
  img: string;
  paragraphs: string[];
  reverse?: boolean;
};

function Profile({ name, role, img, paragraphs, reverse }: ProfileProps) {
  return (
    <section
      className={[
        "relative grid items-start gap-8 md:gap-12",
        "md:grid-cols-[260px,1fr]",
        // card styling (simple & professional)
        "rounded-xl bg-white border border-gray-100 shadow-sm",
        "p-6 md:p-8 transition-shadow hover:shadow",
        reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : "",
      ].join(" ")}
    >
      {/* Photo + Name */}
      <div className="flex flex-col items-center md:items-start">
        <div className="size-56 md:size-64 shrink-0 rounded-full overflow-hidden ring-2 ring-teal-200 shadow-sm">
          <img
            src={img}
            alt={name}
            className="size-full object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>

        <div className="mt-5 text-center md:text-left">
          <p className="text-xl font-semibold text-slate-900">{name}</p>
          <span className="mt-2 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
            {role}
          </span>
        </div>
      </div>

      {/* Bio */}
      <div className="text-gray-800 leading-8 md:leading-8">
        {paragraphs.map((t, i) => (
          <p key={i} className={i === 0 ? "" : "mt-4"}>
            {t}
          </p>
        ))}
      </div>
    </section>
  );
}

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        trail={["Home", "Corporate", "Our Team"]}
        subtitle="Experience, craftsmanship and a shared love for sustainable materials."
      />

      <main className="relative">
        {/* page content */}
        <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-20 space-y-14">

          <Profile
            name="Mr. B L Bengani"
            role="Chairman"
            img="/bl.webp"
            paragraphs={[
              `Mr. B L Bengani, comes with a vast experience of marketing and manufacturing wood-based panel products such as Plywood, Laminates, Block Board, MDF, Decorative Veneers, etc through Architects, Interior Designers and an established dealers network of more than 300 in the country. Before promoting Uniply Industries Limited, Mr.Bengani was the Vice-President Marketing with Greenply Industries Limited. He commissioned the most modern plywood industry – Uniply Industries Limited in the state of Tamil Nadu, with a workforce of over 800 at different segments of operations.`,
              `During the year 2015-16, he divested his controlling stake in Uniply to another investor. During his twenty years tenure with Uniply, he travelled extensively throughout the world to understand innovative technology and futuristic products, and conceived an idea to start manufacturing of NFC Board.`,
            ]}
          />

          {/* subtle divider */}
          <div className="my-2 border-t border-gray-200" />

          <Profile
            reverse
            name="Mr. Varun Bengani"
            role="Co-Founder & Director"
            img="/varun.webp"
            paragraphs={[
              `Mr.Varun Bengani is a BE Mechanical Engineer from Anna University, Chennai. He has served at a senior position with Uniply Industries Limited during the year 2010 — 2016 and developed himself as a designer of various Decorative Veneers and Plywoods. He was leading a team of marketing as well as production-related matters of Decorative veneers by the brand Elementz.`,
              `In his capacity as co-founder and promoter of this company, he looks after the sales and marketing of NFC products — Natural Fibre Composite products being manufactured at the state of the art commissioned plant of the Company.`,
            ]}
          />

        </div>
      </main>
    </>
  );
}
