"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState, type ReactNode } from "react"
import { X } from "lucide-react"

/* ────────────────── Types ────────────────── */
type GridRow = {
  label: string
  values: (number | "-")[]
}

type Guide = {
  id: string
  title: string
  body: ReactNode
}

type Row = {
  id: string
  title: string
  body: ReactNode
}

/* ────────────────── Default Page ────────────────── */
export default function Page() {
  return (
    <>
      <SuggestionsSection />
      <SustainabilitySection />
    </>
  )
}

/* ────────────────── Suggestions Section ────────────────── */
function SuggestionsSection({
  heading = "Important Suggestions",
  videoId = "dQw4w9WgXcQ",
  brochureHref = "/brochures/technical-suggestions.pdf",
  grids,
  guides,
}: {
  heading?: string
  videoId?: string
  brochureHref?: string
  grids?: { columns: string[]; rows: GridRow[]; note?: string }
  guides?: Guide[]
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const grid = grids ?? {
    columns: ["6", "8", "12", "15", "16", "18", "20", "25"],
    rows: [
      { label: "Neo (6 mm) • 625–650 kg/m³", values: [150, 200, 250, 300, 320, 350, 380, 420] },
      { label: "Crota (8 mm) • 725+ kg/m³", values: [200, 250, 300, 350, 370, 400, 430, 550] },
      { label: "Build (10 mm) • 825+ kg/m³", values: [250, 350, 420, 550, 580, 600, 650, 750] },
    ],
    note: "For ceiling: 12 mm or higher thickness board with suggested grid: 300 mm for crota or build, 200 mm for neo.",
  }

  const sections: Guide[] = guides ?? [
    {
      id: "paint",
      title: "PU paint & polish",
      body: "Use only NC putty. Ensure the micro pores are sealed. Avoid water-based filler on raw board before the micro pores are sealed.",
    },
    {
      id: "shutters",
      title: "Wardrobe / Cabinet shutters",
      body: "Reinforce laminates on both sides before fixing shutter. Use suitable lipping. Provide proper balancing & uniform support.",
    },
    {
      id: "adhesive",
      title: "Suggested adhesive",
      body: "INDOBLUE PVA, PFE, WP1; ProBond; Merstik; Helen. Drying time may vary—follow manufacturer's guidance.",
    },
    {
      id: "paneling",
      title: "Paneling",
      body: "Leave 1–2 mm gap between wall & board for breathing. Allow 3 mm gap per 1 m span between two boards.",
    },
    {
      id: "screwing",
      title: "Screwing",
      body: "Use mild steel fully threaded. For better strength, drilling or joinery is suggested. Avoid hammering.",
    },
    {
      id: "ceiling",
      title: "Ceiling",
      body: "Follow advanced installation guidelines: adequate structural support, correct fasteners, and movement joints.",
    },
    {
      id: "thermal",
      title: "Thermal management for outdoor applications",
      body: "Use heat-resistant paint/coating; create thermal breaks; add airflow gaps to minimize heat conduction.",
    },
    {
      id: "substrate",
      title: "Normal supports",
      body: "Use adequate support frames sized to board thickness & weight. Keep spans as per suggested grid.",
    },
  ]

  return (
    <section id="suggestions" className="relative overflow-hidden">
      {/* Hero band */}
      <div className="bg-gradient-to-r from-[#00d5be] via-[#00b9a7] to-[#008e81]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-14 text-white">
          <motion.h1
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight"
          >
            {heading}
          </motion.h1>
          <p className="mt-2 text-sm sm:text-base text-white/90">
            Zero-defect furniture starts with the right workflow & installation.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-20">
        {/* Video */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 py-8 sm:py-10">
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 240, damping: 18 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-lg sm:rounded-2xl shadow-xl ring-1 ring-black/5"
          >
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/MwGAWcENTGI?si=-txgTwmr472t8Q5E"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

            </div>
          </motion.div>

          {/* Brochure CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-[#00d5be] px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:bg-[#00c7b1]"
          >
            Request Technical Guidelines (English)
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
            </svg>
          </button>
        </div>

        {/* Blurb */}
        <p className="mx-auto mb-6 sm:mb-8 max-w-4xl text-center text-xs sm:text-sm text-slate-600">
          Indowud NFC is a homogeneous product and hence requires proper constructive grid support (frames, channels,
          sub-frame) to avoid deformations. Follow the grid & fastening guidance below.
        </p>

        {/* Grid table */}
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 bg-gradient-to-r from-[#00d5be]/15 to-[#00d5be]/5 px-4 sm:px-6 py-4 sm:py-5 gap-2">
              <div className="flex items-center gap-3">
                <div className="h-1 w-1 rounded-full bg-[#00d5be]" />
                <h3 className="text-sm sm:text-base font-bold text-[#003a36]">
                  Suggested grid spacing for panelling (mm)
                </h3>
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-500">Maximum support distance</span>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="sticky top-0 bg-slate-50/95 backdrop-blur">
                  <tr className="[&>th]:px-3 sm:[&>th]:px-5 [&>th]:py-4 [&>th]:font-bold [&>th]:text-slate-700 [&>th]:border-b [&>th]:border-slate-200">
                    <th className="whitespace-nowrap text-left">Thickness / Variant</th>
                    {grid.columns.map((c) => (
                      <th key={c} className="text-center whitespace-nowrap">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {grid.rows.map((r, idx) => (
                    <tr
                      key={r.label}
                      className={`transition-all duration-200 hover:bg-[#00d5be]/8 hover:shadow-sm ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                        } [&>td]:px-3 sm:[&>td]:px-5 [&>td]:py-4`}
                    >
                      <td className="font-semibold text-slate-800 whitespace-nowrap">{r.label}</td>
                      {r.values.map((v, i) => (
                        <td key={i} className="text-center text-slate-700 whitespace-nowrap font-medium">
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {grid.note && (
              <div className="border-t border-slate-200 bg-slate-50/80 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-600 font-medium">
                <div className="flex gap-2">
                  <span className="text-[#00d5be] font-bold">•</span>
                  <span>{grid.note}</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Guidelines */}
        <div className="mx-auto mt-8 sm:mt-12 max-w-5xl">
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
            {sections.map((g) => (
              <Accordion key={g.id} title={g.title}>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{g.body}</p>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 rounded-lg sm:rounded-2xl
                     bg-[#00d5be]/10 px-3 sm:px-5 py-3 sm:py-4 ring-1 ring-[#00d5be]/20"
        >
          <p className="text-xs sm:text-sm text-slate-700">
            For deeper details on installation, spacing, fasteners and finishes, refer to our "technical suggestions
            brochure".
          </p>
          <a
            href={brochureHref}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-[#00d5be] px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white
                       shadow-sm transition hover:-translate-y-0.5 hover:bg-[#00c7b1] whitespace-nowrap"
            rel="noreferrer"
          >
            Open brochure
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  )
}

/* ────────────────── Sustainability Section ────────────────── */
function SustainabilitySection({
  heading = "Sustainability at Indowud",
  intro = "Engineered from agri-residue with long service life, Indowud NFC reduces timber dependence and supports circular design.",
  rows,
}: {
  heading?: string
  intro?: string
  rows?: Row[]
}) {
  const items: Row[] = rows ?? [
    {
      id: "material",
      title: "Material circularity",
      body: "Uses agricultural by-products and is designed for extended life cycles, minimizing virgin resource use.",
    },
    {
      id: "emissions",
      title: "Low maintenance & emissions",
      body: "Durable surfaces reduce repainting/refinishing frequency, lowering embodied emissions over the product lifespan.",
    },
    {
      id: "water",
      title: "Moisture resilience",
      body: "Dimensional stability helps reduce replacements in humid zones, cutting waste generation at end-of-life.",
    },
    {
      id: "reuse",
      title: "Repair, reuse, retrofit",
      body: "Panels can be refitted or repurposed in interior upgrades, improving utilization and reducing disposal.",
    },
  ]

  return (
    <section id="sustainability" className="relative overflow-hidden">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#00d5be] via-[#00b9a7] to-[#008e81]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-14 text-white">
          <motion.h1
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight"
          >
            {heading}
          </motion.h1>
          <p className="mt-2 sm:mt-3 max-w-3xl text-sm sm:text-base text-white/90">{intro}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
          {items.map((r) => (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="rounded-lg sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm"
            >
              <h3 className="text-base sm:text-lg font-semibold text-[#003a36]">{r.title}</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{r.body}</p>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 sm:mt-10 rounded-lg sm:rounded-2xl bg-[#00d5be]/10 px-3 sm:px-5 py-3 sm:py-4 ring-1 ring-[#00d5be]/20"
        >
          <p className="text-xs sm:text-sm text-slate-700">
            Want the full sustainability brief (material data, durability metrics, care & maintenance)? Contact our
            technical team for the latest dossier.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ────────────────── Atom ────────────────── */
function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden rounded-lg sm:rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-3 sm:px-4 py-2 sm:py-3 text-left"
      >
        <span className="text-sm sm:text-base font-semibold text-[#003a36]">{title}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 text-[#008e81] transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
          fill="currentColor"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ────────────────── Brochure Modal ────────────────── */
function BrochureModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    occupation: "",
    pincode: "",
    country: "",
    state: "",
    city: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email with brochure
      const response = await fetch('/api/send-brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Brochure sent successfully to your email!');
        onClose();
        setFormData({
          name: "",
          companyName: "",
          phoneNumber: "",
          email: "",
          occupation: "",
          pincode: "",
          country: "",
          state: "",
          city: ""
        });
      } else {
        alert('Failed to send brochure. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send brochure. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Request Technical Guidelines (English)
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      NOTE: Please put the STD code for landline
                    </p>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Occupation */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Occupation *
                    </label>
                    <select
                      required
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select Occupation</option>
                      <option value="architect">Architect / Interior Designer</option>
                      <option value="contractor">Contractor</option>
                      <option value="dealer">Dealer</option>
                      <option value="end-user">End User</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Pincode */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <select
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select State</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Gujarat">Gujarat</option>
                    </select>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <select
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select City</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                    </select>
                  </div>
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="mt-6 mb-4">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">I'm not a robot</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    reCAPTCHA - Privacy - Terms
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-3"
                >
                  {isSubmitting ? 'Sending...' : 'Request Technical Guidelines (English)'}
                </button>

                {/* Info Text */}
                <p className="text-xs text-gray-600 text-center">
                  Please fill the details to receive the brochure on your mailbox
                </p>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  Close
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
