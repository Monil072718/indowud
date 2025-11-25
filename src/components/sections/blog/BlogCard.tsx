"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export type BlogCardPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string; // ISO
  readMins?: number;
  tags?: string[];
};

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.05 },
  }),
};

function BlogCard({
  post,
  i = 0,
  variant = "default",
}: {
  post: BlogCardPost;
  i?: number;
  variant?: "default" | "compact";
}) {
  const href = `/media/blog/${post.slug}`;

  // container + media sizing per variant
  const container =
    variant === "compact"
      ? "group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
      : "group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm";

  const mediaAspect = variant === "compact" ? "aspect-[16/11]" : "aspect-[16/10]";
  const padding = variant === "compact" ? "p-3" : "p-4";

  return (
    <motion.article
      custom={i}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`${container} cursor-pointer`}
    >
      {/* cover */}
      <Link href={href} className="block cursor-pointer">
        <div className="relative">
          <div className={`${mediaAspect} w-full overflow-hidden relative`}>
            <Image
              src={post.cover}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>

      {/* body */}
      <div className={padding}>
        {/* tags */}
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

        {/* title + excerpt */}
        <Link href={href} className="block cursor-pointer">
          <h3
            className={`text-slate-900 font-bold ${
              variant === "compact" ? "text-[15px] leading-snug line-clamp-2" : "text-lg line-clamp-2"
            }`}
          >
            {post.title}
          </h3>
          <p
            className={`mt-1 text-slate-600 ${
              variant === "compact" ? "text-[13px] line-clamp-2" : "text-sm line-clamp-3"
            }`}
          >
            {post.excerpt}
          </p>
        </Link>

        {/* meta */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          {post.readMins ? <span>{post.readMins} min</span> : <span />}
        </div>

        {/* Read more */}
        <Link
          href={href}
          className="group/button mt-3 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 cursor-pointer"
        >
          Read more
          <svg
            className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

export default memo(BlogCard);
