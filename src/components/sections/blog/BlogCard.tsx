"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export type BlogCardPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string; // ISO
  readMins?: number;
  tags?: string[];
  innerCover?: string;
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
  const t = useTranslations("Blog");
  const locale = useLocale();
  const href = `/media/blog/${post.slug}`;
  const isCompact = variant === "compact";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md ${
        isCompact ? "max-w-sm" : ""
      }`}
    >
      {/* Image Section */}
      <Link href={href} className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      {/* Content Section */}
      <div className={`flex flex-1 flex-col ${isCompact ? "p-4" : "p-6"}`}>
        {/* Meta Row: Tag & Date */}
        <div className="mb-4 flex items-center justify-between">
          {post.tags?.[0] && (
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              {post.tags[0]}
            </span>
          )}
          <span className="text-xs font-medium text-slate-400">
            {new Date(post.date).toLocaleDateString(locale, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <Link href={href} className="group/title block">
          <h3
            className={`mb-3 font-bold leading-tight text-slate-900 transition-colors group-hover/title:text-emerald-700 ${
              isCompact ? "text-lg" : "text-xl"
            }`}
          >
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        {!isCompact && (
          <div
            className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        )}

        {/* Footer: Read Time & Read More */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t("readTime", { mins: post.readMins || 4 })}
          </div>

          <Link
            href={href}
            className="group/btn inline-flex items-center gap-1 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700"
          >
            {t("readMore")}
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
