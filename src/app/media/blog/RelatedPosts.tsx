"use client";
import BlogCard, { BlogCardPost } from "../../../components/sections/blog/BlogCard";
import { motion } from "framer-motion";

export default function RelatedPosts({ items }: { items: BlogCardPost[] }) {
  if (!items?.length) return null;

  return (
    <section className="mt-12">
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
        viewport={{ once: true }}
        className="mb-4 text-xl font-extrabold tracking-tight text-slate-900"
      >
        Related posts
      </motion.h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, 3).map((p, i) => (
          <BlogCard key={p.id} post={p} i={i} variant="compact" />
        ))}
      </div>
    </section>
  );
}
