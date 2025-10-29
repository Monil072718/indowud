// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

// Optional SEO
export const metadata: Metadata = {
  title: "Privacy Policy | Indowud",
  description:
    "Learn how Indowud collects, uses, and protects your personal information. Read our Privacy Policy for details on data handling, rights, and contacts.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Breadcrumb */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-cyan-500 opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Privacy Policy</h1>
          <nav className="mt-3 text-xs md:text-sm tracking-widest text-white/90 uppercase">
            <ol className="flex flex-wrap items-center">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li aria-hidden="true" className="mx-1">/</li>
              <li>PRIVACY POLICY</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <p className="text-slate-600 leading-relaxed">
          At Indowud, we are committed to protecting the privacy and security of our website visitors, customers, and users.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
          website (<Link href="https://www.indowud.com" className="text-emerald-700 underline underline-offset-2" target="_blank">www.indowud.com</Link>)
          and interact with our services. Please read this policy carefully. If you do not agree with the terms of this policy,
          please do not access the website.
        </p>

        {/* 1. Information We Collect */}
        <Section>
          <H2>1. Information We Collect</H2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <b>Personal Data:</b> We collect personal information that you provide directly to us, such as when you sign up for newsletters,
              make inquiries, request samples, or contact us through the website. This may include your name, email address, phone number,
              company name, and other contact information.
            </li>
            <li>
              <b>Automatically Collected Data:</b> We automatically collect certain information about your device and your visit when you browse
              our site. This may include IP address, browser type, operating system, browsing actions, and patterns.
            </li>
            <li>
              <b>Cookies:</b> We may use cookies and similar tracking technologies to collect data to improve user experience and analyze
              website performance. You can manage or disable cookies through your browser settings.
            </li>
          </ul>
        </Section>

        {/* 2. How We Use Your Information */}
        <Section>
          <H2>2. How We Use Your Information</H2>
          <p className="text-slate-700">We use your information for the following purposes:</p>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-slate-700">
            <li>To provide and maintain our services and website</li>
            <li>To respond to your inquiries and fulfill your requests (e.g., sending you brochures, samples)</li>
            <li>To personalize your experience on the website</li>
            <li>To send you marketing communications, newsletters, or promotional materials related to our products (you can opt out at any time)</li>
            <li>To improve our website functionality and services</li>
            <li>To comply with legal obligations and protect our rights</li>
          </ul>
        </Section>

        {/* 3. How We Share Your Information */}
        <Section>
          <H2>3. How We Share Your Information</H2>
          <p className="text-slate-700">
            We do not sell, rent, or trade your personal information to third parties. However, we may share your information:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-slate-700">
            <li>With third-party service providers who assist in website operation, marketing, and other business functions (e.g., email service providers, hosting services)</li>
            <li>As required by law, such as to comply with a subpoena, or similar legal process</li>
            <li>If we believe disclosure is necessary to protect our rights, enforce our policies, investigate fraud, or ensure the safety of users</li>
          </ul>
        </Section>

        {/* 4. Data Retention */}
        <Section>
          <H2>4. Data Retention</H2>
          <p className="text-slate-700">
            We will retain your personal information only as long as necessary to fulfill the purposes for which it was collected.
          </p>
        </Section>

        {/* 5. Security */}
        <Section>
          <H2>5. Security of Your Information</H2>
          <p className="text-slate-700">
            We take reasonable steps to protect your personal information from unauthorized access, use, alteration, or destruction.
            However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        {/* 6. Your Rights */}
        <Section>
          <H2>6. Your Rights</H2>
          <p className="text-slate-700">
            Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal
            information. You may also object to the processing of your data and request data portability. To exercise these rights,
            please contact us using the details below.
          </p>
        </Section>

        {/* 7. Third-Party Links */}
        <Section>
          <H2>7. Third-Party Links</H2>
          <p className="text-slate-700">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these
            websites. We encourage you to read their privacy policies before providing any personal information.
          </p>
        </Section>

        {/* 8. Changes */}
        <Section>
          <H2>8. Changes to This Privacy Policy</H2>
          <p className="text-slate-700">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or
            regulatory reasons. We will notify you of any changes by posting the new policy on our website.
          </p>
        </Section>

        {/* 9. Contact Us */}
        <Section>
          <H2>9. Contact Us</H2>
          <p className="text-slate-700">
            If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:
          </p>
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-800">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <Link href="mailto:info@indowud.com" className="text-emerald-700 underline underline-offset-2">
                info@indowud.com
              </Link>
            </p>
            <p className="mt-1">
              <span className="font-semibold">Phone:</span>{" "}
              <Link href="tel:+914442158586" className="text-emerald-700 underline underline-offset-2">
                +91-44-4215 8586
              </Link>
            </p>
          </div>
        </Section>

        <p className="mt-8 text-sm text-slate-500">
          This privacy policy is effective as of <b>1 October 2024</b>.
        </p>
      </section>
    </main>
  );
}

/* ---------------- small helpers ---------------- */
function Section({ children }: { children: React.ReactNode }) {
  return <section className="mt-8">{children}</section>;
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">{children}</h2>;
}
