"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight } from "lucide-react"
import {
    Country,
    State,
    City,
    type ICountry,
    type IState,
    type ICity,
} from "country-state-city"

export default function BrochureFormCard({ onClose }: { onClose: () => void }) {
    const [confirmOpen, setConfirmOpen] = useState(false)

    const BROCHURE_PATH = "/Indowud-nfc-eBrochure.pdf"

    const [countries] = useState<ICountry[]>(Country.getAllCountries())
    const [states, setStates] = useState<IState[]>([])
    const [cities, setCities] = useState<ICity[]>([])

    const [form, setForm] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        occupation: "",
        pincode: "",
        country: "",
        state: "",
        city: "",
        captcha: false,
    })
    const [errors, setErrors] = useState<Record<string, string>>({})

    useEffect(() => {
        if (!form.country) {
            setStates([])
            setCities([])
            setForm((f) => ({ ...f, state: "", city: "" }))
            return
        }
        const ss = State.getStatesOfCountry(form.country)
        setStates(ss)
        setForm((f) => ({ ...f, state: "", city: "" }))
        setCities([])
    }, [form.country])

    useEffect(() => {
        if (!form.country || !form.state) {
            setCities([])
            setForm((f) => ({ ...f, city: "" }))
            return
        }
        const cc = City.getCitiesOfState(form.country, form.state)
        setCities(cc)
        setForm((f) => ({ ...f, city: "" }))
    }, [form.country, form.state])

    const setField = (key: keyof typeof form, val: string | boolean) => {
        setForm((f) => ({ ...f, [key]: val }))
        if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }))
    }

    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRx = /^[0-9+\-()\s]{7,15}$/
    const indiaPincodeRx = /^\d{6}$/

    const validate = () => {
        const e: Record<string, string> = {}
        if (!form.name.trim()) e.name = "Name is required"
        if (!form.occupation.trim()) e.occupation = "Occupation is required"
        if (!emailRx.test(form.email)) e.email = "Enter a valid email"
        if (form.phone && !phoneRx.test(form.phone)) e.phone = "Enter a valid phone"
        if (!form.country) e.country = "Country is required"
        if (!form.state) e.state = "State is required"
        if (!form.city) e.city = "City is required"
        if (form.country === "IN" && form.pincode && !indiaPincodeRx.test(form.pincode)) {
            e.pincode = "Pincode must be 6 digits"
        }
        if (!form.captcha) e.captcha = "Please verify the captcha"
        setErrors(e)
        return Object.keys(e).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return
        setConfirmOpen(true)
    }

    const FieldError = ({ name }: { name: string }) =>
        errors[name] ? (
            <p className="mt-1 text-[11px] text-rose-600">{errors[name]}</p>
        ) : null

    return (
        <>
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl ring-1 ring-black/10 overflow-hidden">
                <div className="px-6 py-4 border-b">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Request E-brochure
                        </h3>
                        <button
                            aria-label="Close"
                            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
                            onClick={onClose}
                        >
                            <X className="h-5 w-5 text-gray-700" />
                        </button>
                    </div>
                </div>

                <div className="px-6 pt-5 pb-2">
                    <p className="text-xs text-gray-500 mb-4">
                        Please fill the details to download the e-brochure
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name<span className="text-rose-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setField("name", e.target.value)}
                                    className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${errors.name ? "border-rose-400" : "border-gray-300"
                                        }`}
                                    placeholder="Your name"
                                />
                                <FieldError name="name" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    value={form.company}
                                    onChange={(e) => setField("company", e.target.value)}
                                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    placeholder="Company"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => setField("phone", e.target.value)}
                                    className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${errors.phone ? "border-rose-400" : "border-gray-300"
                                        }`}
                                    placeholder="Include STD for landline"
                                />
                                <p className="mt-1 text-[11px] text-gray-500">
                                    NOTE: Please put the STD code for landline
                                </p>
                                <FieldError name="phone" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email<span className="text-rose-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setField("email", e.target.value)}
                                    className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${errors.email ? "border-rose-400" : "border-gray-300"
                                        }`}
                                    placeholder="you@example.com"
                                />
                                <FieldError name="email" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Occupation<span className="text-rose-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={form.occupation}
                                    onChange={(e) => setField("occupation", e.target.value)}
                                    className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${errors.occupation ? "border-rose-400" : "border-gray-300"
                                        }`}
                                    placeholder="e.g., Architect / Interior Designer"
                                />
                                <FieldError name="occupation" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Pincode
                                </label>
                                <input
                                    type="text"
                                    value={form.pincode}
                                    onChange={(e) => setField("pincode", e.target.value)}
                                    className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${errors.pincode ? "border-rose-400" : "border-gray-300"
                                        }`}
                                    placeholder="e.g. 400001"
                                />
                                <FieldError name="pincode" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Country<span className="text-rose-600">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        value={form.country}
                                        onChange={(e) => setField("country", e.target.value)}
                                        className={`w-full appearance-none rounded-md border px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${errors.country ? "border-rose-400" : "border-gray-300"
                                            }`}
                                    >
                                        <option value="" disabled>
                                            Select Country
                                        </option>
                                        {countries.map((c) => (
                                            <option key={c.isoCode} value={c.isoCode}>
                                                {c.name}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronRight className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 h-4 w-4 text-gray-400" />
                                </div>
                                <FieldError name="country" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    State<span className="text-rose-600">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        value={form.state}
                                        onChange={(e) => setField("state", e.target.value)}
                                        disabled={!states.length}
                                        className={`w-full appearance-none rounded-md border px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 disabled:bg-gray-100 disabled:text-gray-400 ${errors.state ? "border-rose-400" : "border-gray-300"
                                            }`}
                                    >
                                        <option value="">
                                            {states.length ? "Select State" : "Select Country first"}
                                        </option>
                                        {states.map((s) => (
                                            <option key={s.isoCode} value={s.isoCode}>
                                                {s.name}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronRight className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 h-4 w-4 text-gray-400" />
                                </div>
                                <FieldError name="state" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    City<span className="text-rose-600">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        value={form.city}
                                        onChange={(e) => setField("city", e.target.value)}
                                        disabled={!cities.length}
                                        className={`w-full appearance-none rounded-md border px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 disabled:bg-gray-100 disabled:text-gray-400 ${errors.city ? "border-rose-400" : "border-gray-300"
                                            }`}
                                    >
                                        <option value="">
                                            {cities.length ? "Select City" : "Select State first"}
                                        </option>
                                        {cities.map((ci) => (
                                            <option
                                                key={`${ci.name}-${ci.latitude}-${ci.longitude}`}
                                                value={ci.name}
                                            >
                                                {ci.name}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronRight className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 h-4 w-4 text-gray-400" />
                                </div>
                                <FieldError name="city" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <div
                                className={`w-[300px] max-w-full h-[78px] border rounded-md bg-gray-50 flex items-center gap-3 px-3 ${errors.captcha ? "border-rose-400" : "border-gray-300"
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={form.captcha}
                                    onChange={(e) => setField("captcha", e.target.checked)}
                                    className="h-5 w-5 border-gray-300"
                                />
                                <span className="text-sm text-gray-700">I&apos;m not a robot</span>
                                <div className="ml-auto text-[10px] text-gray-500 leading-tight text-right">
                                    reCAPTCHA
                                    <div className="text-[9px]">Privacy • Terms</div>
                                </div>
                            </div>
                            <FieldError name="captcha" />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between mt-6">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md bg-teal-500 hover:bg-teal-600 text-white px-4 py-2.5 text-sm font-medium"
                            >
                                Request E-brochure (English)
                            </button>

                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex items-center justify-center rounded-md bg-rose-600 hover:bg-rose-700 text-white px-4 py-2.5 text-sm font-medium"
                            >
                                Close
                            </button>
                        </div>
                    </form>

                    <div className="mt-3 mb-1">
                        <p className="text-[11px] text-gray-500">
                            Please fill the details to download the e-brochure
                        </p>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {confirmOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[62] bg-black/30"
                            onClick={() => setConfirmOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 8 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 26 }}
                            className="fixed inset-0 z-[63] grid place-items-center p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-full max-w-md bg-white rounded-xl shadow-xl ring-1 ring-black/10 overflow-hidden">
                                <div className="px-5 py-4 border-b">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-base font-semibold text-gray-900">
                                            Thank you!
                                        </h4>
                                        <button
                                            className="rounded-md p-2 hover:bg-gray-100"
                                            onClick={() => setConfirmOpen(false)}
                                            aria-label="Close"
                                        >
                                            <X className="h-4 w-4 text-gray-700" />
                                        </button>
                                    </div>
                                </div>
                                <div className="px-5 py-4">
                                    <p className="text-sm text-gray-700">
                                        Your details were submitted successfully. Click below to
                                        download the e-brochure.
                                    </p>
                                    <div className="mt-4 flex gap-3">
                                        <button
                                            className="flex-1 rounded-md bg-teal-500 hover:bg-teal-600 text-white text-sm py-2.5"
                                            onClick={() => {
                                                const origin =
                                                    typeof window !== "undefined" ? window.location.origin : ""
                                                const pdfUrl = `${origin}${BROCHURE_PATH}`

                                                const win = window.open(pdfUrl, "_blank")
                                                if (!win) {
                                                    const a = document.createElement("a")
                                                    a.href = pdfUrl
                                                    a.download = "Indowud-nfc-eBrochure.pdf"
                                                    a.target = "_blank"
                                                    a.rel = "noopener"
                                                    document.body.appendChild(a)
                                                    a.click()
                                                    document.body.removeChild(a)
                                                }

                                                setConfirmOpen(false)
                                                onClose()
                                            }}
                                        >
                                            Download E-brochure
                                        </button>
                                        <button
                                            className="rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-4"
                                            onClick={() => setConfirmOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
