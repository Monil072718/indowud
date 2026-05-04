/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogSidebar from "@/components/sections/blog/BlogSidebar";
import { getPostBySlug } from "@/lib/blog-data";



/* ------------------------------- TYPES ------------------------------- */
type Params = { slug: string; locale: string };
type PageProps = { params: Promise<Params> };

/* ----------------------- generateMetadata (Next 15) ----------------------- */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `Blog | ${post.title}`,
  };
}

/* --------------------------------- PAGE --------------------------------- */
export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;

    const post = getPostBySlug(slug);

    if (!post) {
      notFound();
    }



    return (
      <div className="min-h-screen bg-slate-50/30">
        {/* Header / Breadcrumb area could go here */}

        <div className="mx-auto max-w-[1200px] px-4 py-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">

            {/* Main Content */}
            <main>
              {/* Article Header */}
              <header className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                    BLOG
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    {new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h1 className="mb-6 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
                <div className="flex items-center gap-3 border-b border-slate-200 pb-8">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                    {/* Placeholder avatar */}
                    <div className="flex h-full w-full items-center justify-center bg-emerald-600 text-white font-bold">I</div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">By {post.author.name}</p>
                    <p className="text-xs text-slate-500">{post.readMins} min read</p>
                  </div>
                </div>
              </header>

              {/* Featured Image - HEIGHT ADJUSTMENT APPLIED HERE */}
              <div className="mb-10 overflow-hidden rounded-2xl shadow-sm h-64 md:h-80 lg:h-[400px]">
                <img
                  src={post.innerCover ?? post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Body */}
              <article className="prose prose-xl prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-emerald-600 hover:prose-a:text-emerald-700 prose-img:rounded-xl">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </article>

              {/* Share / Tags Footer */}
              <div className="mt-12 border-t border-slate-200 pt-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold text-slate-900">Tags:</span>
                  {post.tags?.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Social Share Buttons Placeholder */}
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-sm font-bold text-slate-900">Share:</span>
                  <div className="flex gap-2">
                    {/* Facebook */}
                    <button className="h-8 w-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                    </button>
                    {/* Twitter */}
                    <button className="h-8 w-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                    </button>
                    {/* LinkedIn */}
                    <button className="h-8 w-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
                <h3 className="mb-6 text-xl font-bold text-slate-900">Leave a Reply</h3>
                <p className="mb-6 text-sm text-slate-500">Your email address will not be published. Required fields are marked *</p>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="comment" className="mb-2 block text-sm font-semibold text-slate-700">Comment *</label>
                    <textarea
                      id="comment"
                      rows={5}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="Write your thoughts..."
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Name *</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email *</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="website" className="mb-2 block text-sm font-semibold text-slate-700">Website</label>
                    <input
                      type="text"
                      id="website"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="save-info" className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <label htmlFor="save-info" className="text-sm text-slate-600">Save my name, email, and website in this browser for the next time I comment.</label>
                  </div>
                  <button
                    type="submit"
                    className="rounded-lg bg-emerald-600 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
                  >
                    Post Comment
                  </button>
                </form>
              </div>

            </main>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <BlogSidebar />
              </div>
            </div>

          </div>


        </div>
      </div>
    );
  }