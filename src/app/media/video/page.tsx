"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type YT = { id: string; title: string; tag?: string };

const vids: YT[] = [
  { id: "oHg5SJYRHA0", title: "Indowud Corporate (Hindi)", tag: "Corporate" },
  { id: "dQw4w9WgXcQ", title: "What Designers Think", tag: "Testimonial" },
  { id: "9bZkp7q19f0", title: "One India Feature", tag: "Feature" },
  { id: "kXYiU_JCYtU", title: "NAS Daily Feature", tag: "Feature" },
  { id: "3JZ_D3ELwOQ", title: "Fire Safety Comparison", tag: "Comparison" },
  { id: "fJ9rUzIMcZQ", title: "Corporate Video (English)", tag: "Corporate" },
];

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.05 },
  }),
};

function Card({ v, i }: { v: YT; i: number }) {
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
      <div className="relative">
        <div className="pt-[56.25%]" />
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${v.id}`}
          title={v.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="flex items-center justify-between p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-slate-900">
          {v.title}
        </h3>
        {v.tag && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-600">
            {v.tag}
          </span>
        )}
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
}

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 md:py-14">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
        className="mb-8 md:mb-10"
      >
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Videos
        </h1>
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-3 text-xs md:text-sm tracking-widest text-gray-500 uppercase"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center">
            <li>
              <Link href="/" className="hover:text-gray-700 transition-colors">
                HOME
              </Link>
            </li>
            <li aria-hidden="true" className="mx-1">/</li>
            <li>
              <Link href="/media" className="hover:text-gray-700 transition-colors">
                MEDIA
              </Link>
            </li>
            <li aria-hidden="true" className="mx-1">/</li>
            <li>VIDEOS</li>
          </ol>
        </motion.nav>
        <p className="mt-2 max-w-2xl text-slate-600">
          Explore stories, comparisons, and features about Indowud NFC.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {vids.map((v, i) => (
          <Card key={v.id} v={v} i={i} />
        ))}
      </div>
    </div>
  );
}
