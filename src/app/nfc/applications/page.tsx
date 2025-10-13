"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
    Wand2,
    Leaf,
    Hammer,
    Drill,
    PaintBucket,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export const dynamic = "force-static";

/* ---------- animations ---------- */
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] },
    }),
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ---------- data ---------- */
const features = [
    {
        icon: PaintBucket,
        title: "Custom Finishes",
        text:
            "Paint, stain, veneer or laminate — panels accept most finishes beautifully.",
    },
    { icon: Leaf, title: "Eco-Smart", text: "Agri-fibre based boards, low emissions." },
    { icon: Drill, title: "CNC Friendly", text: "Great machinability for patterns and routing." },
    { icon: Hammer, title: "Built Tough", text: "Impact resistant with excellent screw holding." },
];

const sections = [
    {
        key: "interiors",
        eyebrow: "INTERIORS",
        title: "Create warm, modern spaces",
        text:
            "Use Indowud panels for wardrobes, kitchens, wall cladding, false ceilings and acoustic elements. Thermoform curves or keep clean modern lines.",
        images: [
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
            "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920",
            "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1920",
        ],
    },
    {
        key: "exteriors",
        eyebrow: "EXTERIORS",
        title: "Panels that brave the outdoors",
        text:
            "Weather-resistant boards for facade screens, outdoor furniture, pergolas and gate cladding. Stable in humid and coastal conditions.",
        images: [
            "https://images.pexels.com/photos/3945320/pexels-photo-3945320.jpeg?auto=compress&cs=tinysrgb&w=1920",
            "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1920",
            "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=1920",
        ],
    },
];

const useCases = [
    {
        title: "Wardrobes",
        img:
            "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
        title: "Kitchen Shutters",
        img:
            "https://images.pexels.com/photos/3637738/pexels-photo-3637738.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
        title: "Wall Cladding",
        img:
            "https://images.pexels.com/photos/1658386/pexels-photo-1658386.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
        title: "Vanities",
        img:
            "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
        title: "Outdoor Seating",
        img:
            "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
    {
        title: "Pergolas",
        img:
            "https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&w=1920",
    },
];

/* ---------- simple slider component (no libs) ---------- */
function Slider({
    images,
    aspect = "h-48 md:h-56",
    auto = true,
    interval = 4000,
    rounded = "rounded-2xl",
}: {
    images: string[];
    aspect?: string;
    auto?: boolean;
    interval?: number;
    rounded?: string;
}) {
    const [index, setIndex] = useState(0);
    const len = images.length;
    const timer = useRef<NodeJS.Timeout | null>(null);

    const go = (dir: number) => setIndex((i) => (i + dir + len) % len);

    // autoplay
    useEffect(() => {
        if (!auto) return;
        timer.current && clearInterval(timer.current);
        timer.current = setInterval(() => go(1), interval);
        return () => {
            if (timer.current) clearInterval(timer.current);
        };
    }, [auto, interval, len]);

    const x = useMemo(() => -index * 100, [index]);

    return (
        <div className={`relative overflow-hidden border border-gray-200 bg-white shadow-sm ${rounded}`}>
            {/* track */}
            <motion.div
                className="flex w-full"
                drag="x"
                dragConstraints={{ left: -((len - 1) * 100), right: 0 }}
                dragElastic={0.04}
                onDragEnd={(_, info) => {
                    if (info.offset.x < -40) go(1);
                    else if (info.offset.x > 40) go(-1);
                }}
                animate={{ x: `${x}%` }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                style={{ width: `${len * 100}%` }}
            >
                {images.map((src, i) => (
                    <div key={i} className="w-full shrink-0">
                        <img
                            src={src}
                            alt={`slide-${i}`}
                            className={`${aspect} w-full object-cover`}
                        />
                    </div>
                ))}
            </motion.div>

            {/* arrows */}
            <button
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-white/90 shadow hover:bg-white transition"
                aria-label="Previous"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-white/90 shadow hover:bg-white transition"
                aria-label="Next"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${index === i ? "w-6 bg-teal-600" : "w-2 bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function ApplicationsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-44 md:h-56 w-full bg-gradient-to-r from-teal-100 via-white to-rose-100"
                />
                <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(13,148,136,.18),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 w-full">
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            className="text-xs md:text-sm tracking-widest text-gray-500 uppercase"
                        >
                            Home / NFC / Applications
                        </motion.p>
                        {/* <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Interior & Exterior Applications
            </motion.h1> */}
                        {/* <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
              className="mt-3 max-w-2xl text-gray-600"
            >
              Versatile boards for homes, hospitality and commercial projects—engineered to look great and last long.
            </motion.p> */}
                        {/* <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
              className="mt-5 flex gap-3"
            >
              <a
                href="/nfc/products"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-white font-semibold hover:bg-teal-700 transition"
              >
                <Wand2 className="w-4 h-4" />
                Explore Products
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div> */}
                    </div>
                </div>
            </section>

            {/* FEATURES (new UI) */}
            <section className="max-w-7xl mx-auto px-6 mt-12">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center text-2xl md:text-3xl font-bold italic text-gray-900"
                >
                    Why designers choose Indowud panels
                </motion.h2>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            variants={fadeUp}
                            custom={i}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                        >
                            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
                            <div className="flex items-start gap-4">
                                <div className="h-11 w-11 rounded-xl bg-gray-100 grid place-items-center shrink-0">
                                    <f.icon className="w-5 h-5 text-gray-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{f.title}</h3>
                                    <p className="mt-1.5 text-sm text-gray-600">{f.text}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* WHY INDOWUD (big image + bullets) */}
            <section className="max-w-7xl mx-auto px-6 mt-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm"
                    >
                        <img
                            src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1920"
                            alt="Indowud interior"
                            className="w-full h-[360px] object-cover"
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold italic text-rose-600 leading-tight">
                            Why Indowud Panels Are the <br className="hidden md:block" />
                            Perfect Choice
                        </h2>
                        <ul className="mt-6 space-y-5 text-gray-800 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-gray-800 shrink-0" />
                                <p className="leading-relaxed">
                                    Durable <span className="font-semibold">interior panels</span> that enhance aesthetics and longevity.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-gray-800 shrink-0" />
                                <p className="leading-relaxed">
                                    Stylish and sustainable <span className="font-semibold">exterior panels</span> resistant to weather and wear.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-gray-800 shrink-0" />
                                <p className="leading-relaxed">
                                    Versatile <span className="font-semibold">furniture boards</span> for cabinets, wardrobes and desks.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-gray-800 shrink-0" />
                                <p className="leading-relaxed">
                                    Smart <span className="font-semibold">partition boards</span> for office and home spaces.
                                </p>
                            </li>
                        </ul>

                    </motion.div>
                </div>
            </section>

            {/* INTERIOR / EXTERIOR SECTIONS (with SLIDER on the images) */}
            {sections.map((s, i) => (
                <section key={s.key} className="max-w-7xl mx-auto px-6 mt-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* text */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <p className="text-teal-600 font-semibold uppercase tracking-widest text-xs">
                                {s.eyebrow}
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold italic text-gray-900">
                                {s.title}
                            </h2>
                            <p className="mt-3 text-gray-700">{s.text}</p>
                        </motion.div>

                        {/* slider */}
                        <motion.div
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <Slider images={s.images} aspect="h-52 md:h-64" />
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* USE-CASE GALLERY */}
            <section className="max-w-7xl mx-auto px-6 mt-16">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center text-2xl md:text-3xl font-bold italic text-gray-900"
                >
                    Popular Applications
                </motion.h2>

                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((u, i) => (
                        <motion.article
                            key={u.title}
                            variants={fadeUp}
                            custom={i}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={u.img}
                                    alt={u.title}
                                    className="h-48 w-full object-cover transition duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-gray-900">{u.title}</h3>
                                <p className="mt-1.5 text-sm text-gray-600">
                                    Durable, easy-to-finish boards that elevate the look and extend the life of your project.
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">
                <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-3xl border border-gray-200 bg-gradient-to-r from-teal-50 via-white to-rose-50 p-8 md:p-10"
                >
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div>
                            <p className="text-teal-700 font-semibold uppercase tracking-widest text-xs">
                                Ready to build
                            </p>
                            <h3 className="text-2xl md:text-3xl font-bold italic text-gray-900">
                                Let’s plan your next application
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Share drawings and sizes — we’ll help you pick panel thickness, finishes and machining steps.
                            </p>
                        </div>
                        <div className="flex gap-3 md:justify-end">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-white font-semibold hover:bg-teal-700 transition"
                            >
                                Talk to us <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="/nfc/features"
                                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
                            >
                                See Features
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
