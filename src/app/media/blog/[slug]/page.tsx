/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

// Replace with your WP fetcher (by slug)
async function getPostBySlug(slug: string) {
  return {
    title: "Rice Husk Boards: The Future of Eco-Friendly Furniture",
    cover:
      "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1600",
    date: "2025-09-28",
    readMins: 6,
    author: { name: "Indowud" },
    tags: ["Sustainability", "NFC"],
    html: `
      <p>Rice husk boards are exactly what they sound like—boards made from the outer shell of rice grains. Here's why they matter.</p>
      <h2 id="why-architects-are-switching">Why architects are switching</h2>
      <ul>
        <li><strong>Weather-proof</strong> across seasons.</li>
        <li><strong>Termite-proof</strong> without costly treatments.</li>
        <li><strong>Water-resistant</strong> for kitchens and baths.</li>
        <li><strong>UV-stable</strong> outdoors.</li>
      </ul>
      <h2 id="looks-good-performs-better">Looks good, performs better</h2>
      <p>Rich finishes, consistent panels, and less maintenance—a rare combo.</p>
      <blockquote>“Design should hold your memories, not your guilt.”</blockquote>
      <h2 id="conclusion">Conclusion</h2>
      <p>For durable, sustainable interiors, rice husk boards are a smart default.</p>
    `,
    related: [
      { slug: "termite-proof-boards", title: "Termite-Proof Boards vs Plywood" },
      { slug: "waterproof-kitchen-bath", title: "Boards for Kitchens & Bathrooms" },
    ],
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-16 pt-8 md:pt-12">
      {/* title + meta */}
      <header className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          Blog • Indowud
        </div>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>• {post.readMins} min read</span>
          <span>• By {post.author?.name}</span>
        </div>
      </header>

      {/* cover */}
      <figure className="relative mx-auto mt-6 max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600" />
        <img src={post.cover} alt={post.title} className="w-full object-cover" />
      </figure>

      {/* content + sidebar */}
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
        {/* main content */}
        <article className="prose prose-slate max-w-none prose-h2:mt-10 prose-h2:scroll-mt-24 prose-img:rounded-xl">
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        {/* sidebar */}
        <aside className="space-y-6">
          {/* tags */}
          {post.tags?.length ? (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="mb-3 text-sm font-semibold text-slate-700">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-2 py-1 text-xs font-bold uppercase tracking-wide text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* related */}
          {post.related?.length ? (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="mb-3 text-sm font-semibold text-slate-700">Related</h3>
              <ul className="space-y-2">
                {post.related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/media/blog/${r.slug}`}
                      className="text-sm font-medium text-slate-800 hover:underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>

      {/* back / next */}
      
    </div>
  );
}
