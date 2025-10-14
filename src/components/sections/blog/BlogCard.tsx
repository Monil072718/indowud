"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";

export type BlogCardPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;            // ISO
  readMins?: number;
  tags?: string[];
};

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, delay: i * 0.05 },
  }),
};

export default function BlogCard({ post, i = 0 }: { post: BlogCardPost; i?: number }) {
  return (
    <motion.article
      custom={i}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative">
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              src={post.cover}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>

      <div className="p-4">
        <div className="mb-2 flex flex-wrap gap-2">
          {post.tags?.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>

        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="line-clamp-2 text-lg font-bold text-slate-900">{post.title}</h3>
          <p className="mt-1 line-clamp-3 text-sm text-slate-600">{post.excerpt}</p>
        </Link>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          {post.readMins ? <span>{post.readMins} min</span> : <span />}
        </div>

        {/* READ MORE BUTTON */}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-3 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Read more
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}
