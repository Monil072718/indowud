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
        <div className={`relative overflow-hidden bg-gradient-to-br from-gray-50 to-white shadow-2xl ring-1 ring-gray-200/50 ${rounded}`}>
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
                    <div key={i} className="w-full shrink-0 relative group">
                        <img
                            src={src}
                            alt={`slide-${i}`}
                            className={`${aspect} w-full object-cover transition-transform duration-700 group-hover:scale-105`}
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                ))}
            </motion.div>

            {/* arrows */}
            <button
                onClick={() => go(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200/50"
                aria-label="Previous"
            >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
                onClick={() => go(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200/50"
                aria-label="Next"
            >
                <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === i 
                                ? "w-8 bg-gradient-to-r from-teal-500 to-teal-600 shadow-md" 
                                : "w-2 bg-gray-400 hover:bg-gray-500"
                        }`}
                    />
                ))}
            </div>

            {/* Slide counter */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-600 shadow-sm">
                {index + 1} / {len}
            </div>
        </div>
    );
}

export default function ApplicationsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-rose-50">
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
                                className="text-xs md:text-sm tracking-widest text-gray-500 uppercase mb-4"
                            >
                                Home / NFC / Applications
                            </motion.p>
                            <motion.h1
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
                                className="text-4xl md:text-6xl font-bold text-teal-600 leading-tight"
                            >
                                Transform Your Spaces with Premium Interior Panels & Exterior Panels
                            </motion.h1>
                            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
                                className="mt-8 flex gap-4"
            >
              <a
                href="/nfc/products"
                                    className="inline-flex items-center gap-2 rounded-lg bg-rose-500 px-6 py-3 text-white font-semibold hover:bg-rose-600 transition"
              >
                                    <Wand2 className="w-5 h-5" />
                Explore Products
              </a>
              <a
                href="/contact"
                                    className="inline-flex items-center gap-2 rounded-lg border-2 border-teal-600 bg-white px-6 py-3 font-semibold text-teal-600 hover:bg-teal-50 transition"
              >
                Contact Us
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div
                            variants={scaleIn}
                            initial="hidden"
                            animate="show"
                            className="relative"
                        >
                            <img
                                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
                                alt="Modern living room with wooden panels"
                                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WHY INDOWUD SECTION */}
            <section className="max-w-7xl mx-auto px-6 mt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg"
                    >
                        <img
                            src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1920"
                            alt="Indowud interior with wooden panels"
                            className="w-full h-[400px] object-cover"
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 leading-tight mb-8">
                            Why Indowud Panels Are the Perfect Choice
                        </h2>
                        <ul className="space-y-6 text-gray-800 text-lg">
                            <li className="flex items-start gap-4">
                                <span className="mt-2 h-2 w-2 rounded-full bg-gray-800 shrink-0" />
                                <p className="leading-relaxed">
                                    Durable <strong>interior panels</strong> that enhance aesthetics and longevity.
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="mt-2 h-2 w-2 rounded-full bg-gray-800 shrink-0" />
                                <p className="leading-relaxed">
                                    Stylish and sustainable <strong>exterior panels</strong> resistant to weather and wear.
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="mt-2 h-2 w-2 rounded-full bg-gray-800 shrink-0" />
                                <p className="leading-relaxed">
                                    Versatile <strong>furniture boards</strong> for custom cabinets, wardrobes, and desks.
                                </p>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="mt-2 h-2 w-2 rounded-full bg-gray-800 shrink-0" />
                                <p className="leading-relaxed">
                                    Smart <strong>partition boards</strong> for office and home spaces, maximising utility.
                                </p>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* BUILT FOR QUALITY SECTION */}
            <section className="max-w-7xl mx-auto px-6 mt-20">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center text-3xl md:text-4xl font-bold italic text-rose-600 mb-12"
                >
                    Built for Quality, Designed for You
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            variants={fadeUp}
                            custom={i}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
                            <div className="text-center">
                                <div className="h-16 w-16 rounded-2xl bg-teal-100 grid place-items-center mx-auto mb-4">
                                    <f.icon className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{f.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PRODUCT CATEGORIES */}
            <section className="max-w-7xl mx-auto px-6 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Interior Panels */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1920"
                                alt="Interior Panels"
                                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="mt-6">
                            <h3 className="text-2xl font-bold text-rose-600 mb-4">Interior Panels</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Transform your indoor spaces with our premium interior panels. <strong>Termite-proof, waterproof, flame-retardant, and free from formaldehyde emissions</strong>. Perfect for wall cladding, wardrobes, kitchen shutters, and decorative elements that enhance both aesthetics and functionality.
                            </p>
                        </div>
                    </motion.div>

                    {/* Exterior Panels */}
                    <motion.div
                        variants={fadeUp}
                        custom={1}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://images.pexels.com/photos/3945320/pexels-photo-3945320.jpeg?auto=compress&cs=tinysrgb&w=1920"
                                alt="Exterior Panels"
                                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="mt-6">
                            <h3 className="text-2xl font-bold text-rose-600 mb-4">Exterior Panels</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Brave the elements with our <strong>weather-resistant</strong> exterior panels. Designed to withstand harsh outdoor conditions while maintaining their structural integrity and aesthetic appeal. Ideal for facade screens, outdoor furniture, pergolas, and gate cladding.
                            </p>
                        </div>
                    </motion.div>

                    {/* Furniture Boards */}
                    <motion.div
                        variants={fadeUp}
                        custom={2}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://images.pexels.com/photos/3637738/pexels-photo-3637738.jpeg?auto=compress&cs=tinysrgb&w=1920"
                                alt="Furniture Boards"
                                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="mt-6">
                            <h3 className="text-2xl font-bold text-rose-600 mb-4">Furniture Boards</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Create stunning furniture pieces with our versatile furniture boards. <strong>Termite-proof, waterproof, flame-retardant, and free from formaldehyde emissions</strong>. Perfect for cabinets, wardrobes, desks, and custom furniture that combines durability with elegant design.
                            </p>
                        </div>
                    </motion.div>

                    {/* Partition Boards */}
                    <motion.div
                        variants={fadeUp}
                        custom={3}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://images.pexels.com/photos/1658386/pexels-photo-1658386.jpeg?auto=compress&cs=tinysrgb&w=1920"
                                alt="Partition Boards"
                                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="mt-6">
                            <h3 className="text-2xl font-bold text-rose-600 mb-4">Partition Boards</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Design flexible spaces with our smart partition boards. <strong>Termite-proof, waterproof, flame-retardant, and free from formaldehyde emissions</strong>. Ideal for office spaces, home divisions, and modular designs that adapt to your changing needs.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CALL TO ACTION BANNER */}
            <section className="max-w-7xl mx-auto px-6 mt-20">
                <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 md:p-12 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Explore Our Panel Range
                    </h3>
                    <p className="text-teal-100 text-lg md:text-xl">
                        Interior panels, exterior panels, furniture boards, and partition boards to suit every design need.
                    </p>
                </motion.div>
            </section>

            {/* NFC CREATE & NEO SECTION */}
            <section className="max-w-7xl mx-auto px-6 mt-20">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4">
                        NFC Create & Neo for Interior Panels
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
                </motion.div>
                
                <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <Slider images={sections[0].images} aspect="h-64 md:h-80" />
                </motion.div>
            </section>

            {/* NFC BUILD SECTION */}
            <section className="max-w-7xl mx-auto px-6 mt-20">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4">
                        NFC Build for Exterior Panels and Interior Panels
                            </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
                        </motion.div>

                        <motion.div
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                    <Slider images={sections[1].images} aspect="h-64 md:h-80" />
                        </motion.div>
                </section>

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
