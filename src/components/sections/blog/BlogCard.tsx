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
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
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

  // Modern card styling: cleaner, subtle border, nice shadow on hover
  const container =
    "group flex flex-col h-full overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-slate-200";

  const mediaAspect = variant === "compact" ? "aspect-[16/10]" : "aspect-[16/10]";

  return (
    <motion.article
      custom={i}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={container}
    >
      {/* Image Section */}
      <Link href={href} className="block w-full overflow-hidden relative">
        <div className={`${mediaAspect} w-full relative overflow-hidden bg-slate-100`}>
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta & Tags */}
        <div className="mb-3 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {post.tags?.slice(0, 1).map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="text-xs text-slate-400 font-medium">
            {new Date(post.date).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <Link href={href} className="group/title block">
          <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover/title:text-emerald-700 line-clamp-2 leading-tight">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Footer / Read More */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            {post.readMins ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readMins} min read
              </>
            ) : null}
          </div>

          <Link
            href={href}
            className="group/btn inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
          >
            Read more
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default memo(BlogCard);

