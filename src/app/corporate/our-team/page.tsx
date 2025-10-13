import PageHero from "@/components/common/PageHero";
import TeamCard from "@/components/common/TeamCard";

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        trail={["Home", "Corporate", "Our Team"]}
        subtitle="Experience, craftsmanship and a shared love for sustainable materials."
      />

      <section className="max-w-6xl mx-auto px-6 py-14 md:py-20 space-y-16">
        <TeamCard
          name="Mr. B L Bengani"
          role="Chairman"
          img="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
        >
          <p>
            Mr. B L Bengani comes with vast experience in marketing and
            manufacturing wood-based panels. Before promoting Uniply Industries
            Ltd., he was Vice President–Marketing at Greenply and later
            commissioned one of the most modern plywood plants in India.
          </p>
          <p>
            At Indowud, he leads the vision for natural fibre composite products
            that are safer for the planet and better for people.
          </p>
        </TeamCard>

        <div className="border-t border-gray-200" />

        <TeamCard
          reverse
          name="Mr. Varun Bengani"
          role="Co-Founder & Director"
          img="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=300"
        >
          <p>
            A Mechanical Engineer from Anna University, Varun has led design and
            production teams across decorative veneers and plywoods. As a
            promoter at Indowud, he drives sales, marketing and process
            excellence for NFC products manufactured at our state-of-the-art
            facility.
          </p>
        </TeamCard>
      </section>
    </>
  );
}
