"use client";

import Link from "next/link";

export default function BlogSidebar() {
    return (
        <aside className="space-y-8">
            {/* Search */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-900">Search</h3>
                <form onSubmit={(e) => e.preventDefault()} className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                    <button
                        type="submit"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600"
                    >
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </form>
            </div>

            {/* Categories */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-900">Categories</h3>
                <ul className="space-y-3">
                    {[
                        "WPC Boards",
                        "Exterior Cladding",
                        "Decking",
                        "Interior Design",
                        "Sustainable Materials",
                    ].map((cat) => (
                        <li key={cat}>
                            <Link
                                href="#"
                                className="flex items-center justify-between text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600"
                            >
                                <span>{cat}</span>
                                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                                    {Math.floor(Math.random() * 10) + 1}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Posts */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-900">Recent Posts</h3>
                <div className="space-y-4">
                    {[
                        {
                            title: "Why Leading Architects Prefer WPC Board Manufacturers",
                            date: "Nov 18, 2025",
                        },
                        {
                            title: "5 Reasons to Choose WPC for Your Next Project",
                            date: "Oct 24, 2025",
                        },
                        {
                            title: "The Ultimate Guide to Exterior Cladding",
                            date: "Sep 12, 2025",
                        },
                    ].map((post, i) => (
                        <Link key={i} href="#" className="group block">
                            <h4 className="line-clamp-2 text-sm font-semibold text-slate-700 transition-colors group-hover:text-emerald-600">
                                {post.title}
                            </h4>
                            <span className="mt-1 block text-xs text-slate-400">
                                {post.date}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-slate-900">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {[
                        "WPC",
                        "Architecture",
                        "Design",
                        "Eco-Friendly",
                        "Construction",
                        "Interiors",
                    ].map((tag) => (
                        <Link
                            key={tag}
                            href="#"
                            className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
}
