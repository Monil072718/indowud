export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Indowud NFC Private Limited",
          url: "https://indowud.com",
          logo: "https://indowud.com/logo.png",
          description:
            "Premium eco-friendly board solutions made from rice husk. Termite-proof, waterproof, fire-retardant panels.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            areaServed: "IN",
            availableLanguage: "en",
          },
          sameAs: [
            // Add social media links if available
          ],
        }),
      }}
    />
  );
}

export function ProductSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Indowud NFC Boards",
          description:
            "Eco-friendly boards made from rice husk. Termite-proof, waterproof, fire-retardant, and GreenPro certified.",
          brand: {
            "@type": "Brand",
            name: "Indowud NFC",
          },
          category: "Building Materials",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "INR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "50",
          },
        }),
      }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Indowud NFC",
          url: "https://indowud.com",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://indowud.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
  );
}
