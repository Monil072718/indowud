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
}: {
  post: BlogCardPost;
  i?: number;
}) {
  const href = `/media/blog/${post.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group relative h-[500px] w-full overflow-hidden rounded-3xl bg-slate-900 cursor-pointer shadow-xl"
    >
      <Link href={href} className="block h-full w-full">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:blur-[2px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
        </div>

        {/* Floating Badge */}
        <div className="absolute top-6 right-6 z-10">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md transition-colors group-hover:bg-white/20">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              {post.tags?.[0] || "Blog"}
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          {/* Date */}
          <time className="mb-3 text-xs font-medium text-emerald-400">
            {new Date(post.date).toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-bold leading-tight text-white transition-transform duration-500 group-hover:-translate-y-2">
            {post.title}
          </h3>

          {/* Hidden Content Reveal on Hover */}
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mb-6 text-sm leading-relaxed text-slate-300 line-clamp-3 whitespace-pre-line">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                Read Full Story
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
export default memo(BlogCard);



