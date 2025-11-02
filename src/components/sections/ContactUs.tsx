"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Building,
  Send,
  Upload,
  ArrowRight,
  Globe,
  LocateFixed,
  MessageSquareText,
  Clock,
  User2,
  Briefcase,
} from "lucide-react";

// Lazy load country-state-city to reduce initial bundle size
const loadCountryStateCity = () => import("country-state-city");

type Option = { label: string; value: string };

interface FormData {
  salutation: string;
  name: string;
  email: string;

  phoneLandline: string;
  phoneMobile: string;

  companyName: string;
  occupation: string;

  address: string;
  pincode: string;

  country: string;
  countryCode: string;
  state: string;
  stateCode: string;
  city: string;

  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    salutation: "Mr",
    name: "",
    email: "",
    phoneLandline: "",
    phoneMobile: "",
    companyName: "",
    occupation: "",
    address: "",
    pincode: "",

    country: "",
    countryCode: "",
    state: "",
    stateCode: "",
    city: "",

    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [attachmentName, setAttachmentName] = useState<string>("No file chosen");

  const [cscModule, setCscModule] = useState<{
    Country: typeof import("country-state-city").Country;
    State: typeof import("country-state-city").State;
    City: typeof import("country-state-city").City;
  } | null>(null);

  // Lazy load country-state-city when component mounts
  useEffect(() => {
    loadCountryStateCity().then((mod) =>
      setCscModule({ Country: mod.Country, State: mod.State, City: mod.City }),
    );
  }, []);

  const countryOptions: Option[] = useMemo(
    () =>
      cscModule?.Country.getAllCountries().map((c) => ({
        value: c.isoCode,
        label: c.name,
      })) ?? [],
    [cscModule],
  );

  const stateOptions: Option[] = useMemo(() => {
    if (!formData.countryCode || !cscModule) return [];
    return cscModule.State.getStatesOfCountry(formData.countryCode).map((s) => ({
      value: s.isoCode,
      label: s.name,
    }));
  }, [formData.countryCode, cscModule]);

  const cityOptions: Option[] = useMemo(() => {
    if (!formData.countryCode || !cscModule) return [];

    // If the country has states and one is selected → cities of that state
    if (stateOptions.length && formData.stateCode) {
      const list = cscModule.City.getCitiesOfState(formData.countryCode, formData.stateCode) ?? [];
      return list.map((ct) => ({ value: ct.name, label: ct.name }));
    }

    // Some countries don't have states → cities of the country
    const list = cscModule.City.getCitiesOfCountry(formData.countryCode) ?? [];
    return list.map((ct) => ({ value: ct.name, label: ct.name }));
  }, [formData.countryCode, formData.stateCode, stateOptions.length, cscModule]);

  /* ---------- dependent resets when user changes country/state ---------- */
  const handleCountryChange = (iso2: string) => {
    if (!cscModule) return;
    const c = cscModule.Country.getAllCountries().find((x) => x.isoCode === iso2);
    setFormData((prev) => ({
      ...prev,
      countryCode: iso2,
      country: c?.name || "",
      // reset children
      state: "",
      stateCode: "",
      city: "",
    }));
  };

  const handleStateChange = (stCode: string) => {
    if (!cscModule || !formData.countryCode) return;
    const st = cscModule.State.getStatesOfCountry(formData.countryCode).find(
      (x) => x.isoCode === stCode,
    );
    setFormData((prev) => ({
      ...prev,
      stateCode: stCode,
      state: st?.name || "",
      // reset city
      city: "",
    }));
  };

  const handleCityChange = (cityName: string) => {
    setFormData((prev) => ({ ...prev, city: cityName }));
  };

  /* ----------------------------- submit ----------------------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // submit to API here

      setSubmitStatus("success");
      setFormData({
        salutation: "Mr",
        name: "",
        email: "",
        phoneLandline: "",
        phoneMobile: "",
        companyName: "",
        occupation: "",
        address: "",
        pincode: "",
        country: "",
        countryCode: "",
        state: "",
        stateCode: "",
        city: "",
        message: "",
      });
      setAttachmentName("No file chosen");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ----------------------------- render ----------------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Top hero band */}
      {/* pulled up a bit to remove the white strip at the top */}
      <div className="relative overflow-hidden -mt-4 md:mt-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(244,63,94,.22),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
                Let&apos;s talk
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
                  <li aria-hidden="true" className="mx-1">
                    /
                  </li>
                  <li>CONTACT US</li>
                </ol>
              </motion.nav>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Tell us a bit about yourself and what you&apos;re looking for. Our team will get
                back to you shortly.
              </p>
            </div>

            {/* Quick actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+914442105060"
                className="inline-flex items-center gap-2 rounded-full bg-teal-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-teal-700 transition"
              >
                <Phone className="w-4 h-4" />
                Call us
              </a>
              <a
                href="mailto:info@indowud.com"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content grid */}
      {/* reduced mt so form sits closer to hero */}
      <div className="max-w-7xl mx-auto px-6 pb-20 mt-10 md:mt-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* FORM CARD */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl border border-gray-200/70 bg-white/70 backdrop-blur-xl shadow-xl ring-1 ring-gray-900/5">
              {/* Card header */}
              <div className="flex items-center gap-3 px-6 sm:px-8 py-5 border-b border-gray-100">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 grid place-items-center">
                  <MessageSquareText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-teal-600 font-semibold">
                    Contact form
                  </p>
                  <h2 className="text-lg font-bold text-gray-900">Send us a message</h2>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-8 space-y-7">
                {/* alerts */}
                {submitStatus === "success" && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                    <p className="font-semibold">Message sent!</p>
                    <p className="text-sm">Thanks for reaching out—we’ll get back to you soon.</p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-rose-800">
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm">Please try again.</p>
                  </div>
                )}

                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Salutation */}
                  <div>
                    <Label>Salutation*</Label>
                    <Select
                      value={formData.salutation}
                      onValueChange={(v) => setFormData((p) => ({ ...p, salutation: v }))}
                      required
                      icon={<User2 className="w-4 h-4" />}
                      options={[
                        { label: "Mr", value: "Mr" },
                        { label: "Mrs", value: "Mrs" },
                        { label: "Ms", value: "Ms" },
                        { label: "Dr", value: "Dr" },
                      ]}
                    />
                  </div>
                  {/* Name */}
                  <div>
                    <Label>Name*</Label>
                    <Input
                      name="name"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      icon={<User2 className="w-4 h-4" />}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label>Company</Label>
                    <Input
                      name="companyName"
                      placeholder="Your company"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      icon={<Building className="w-4 h-4" />}
                    />
                  </div>
                  <div>
                    <Label>Email*</Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      icon={<Mail className="w-4 h-4" />}
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div>
                  <Label>Occupation*</Label>
                  <Select
                    value={formData.occupation}
                    onValueChange={(v) => setFormData((p) => ({ ...p, occupation: v }))}
                    required
                    icon={<Briefcase className="w-4 h-4" />}
                    placeholder="Select an occupation"
                    options={[
                      { label: "Architect", value: "Architect" },
                      { label: "Interior Designer", value: "Interior Designer" },
                      { label: "Builder", value: "Builder" },
                      { label: "Contractor", value: "Contractor" },
                      { label: "Business Owner", value: "Business Owner" },
                      { label: "Engineer", value: "Engineer" },
                      { label: "Other", value: "Other" },
                    ]}
                  />
                </div>

                {/* Row 4 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label>Phone (Landline)</Label>
                    <Input
                      type="tel"
                      name="phoneLandline"
                      placeholder="Include STD code"
                      value={formData.phoneLandline}
                      onChange={(e) => setFormData({ ...formData, phoneLandline: e.target.value })}
                      icon={<Phone className="w-4 h-4" />}
                    />
                  </div>
                  <div>
                    <Label>Mobile Number*</Label>
                    <Input
                      type="tel"
                      name="phoneMobile"
                      placeholder="Your mobile number"
                      required
                      value={formData.phoneMobile}
                      onChange={(e) => setFormData({ ...formData, phoneMobile: e.target.value })}
                      icon={<Phone className="w-4 h-4" />}
                    />
                  </div>
                </div>

                {/* Row 5 */}
                <div>
                  <Label>Address Line 1</Label>
                  <Input
                    name="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    icon={<MapPin className="w-4 h-4" />}
                  />
                </div>

                {/* Row 6 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label>Pincode</Label>
                    <Input
                      name="pincode"
                      placeholder="600001"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      icon={<LocateFixed className="w-4 h-4" />}
                    />
                  </div>
                  <div>
                    <Label>Country*</Label>
                    <Select
                      value={formData.countryCode}
                      onValueChange={(iso2) => handleCountryChange(iso2)}
                      required
                      icon={<Globe className="w-4 h-4" />}
                      placeholder="Select Country"
                      options={countryOptions}
                    />
                  </div>
                </div>

                {/* Row 7 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label>State/Province{stateOptions.length ? "*" : ""}</Label>
                    <Select
                      value={formData.stateCode}
                      onValueChange={(v) => handleStateChange(v)}
                      placeholder={
                        formData.countryCode
                          ? stateOptions.length
                            ? "Select State/Province"
                            : "N/A for this country"
                          : "Select country first"
                      }
                      options={stateOptions}
                      disabled={!formData.countryCode || stateOptions.length === 0}
                    />
                  </div>
                  <div>
                    <Label>City{cityOptions.length ? "*" : ""}</Label>
                    <Select
                      value={formData.city}
                      onValueChange={(v) => handleCityChange(v)}
                      placeholder={
                        formData.countryCode
                          ? cityOptions.length
                            ? "Select City"
                            : "No cities in dataset"
                          : "Select country (and state) first"
                      }
                      options={cityOptions}
                      disabled={!formData.countryCode || cityOptions.length === 0}
                    />
                  </div>
                </div>

                {/* Attachments */}
                <div>
                  <Label>Attachments</Label>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition cursor-pointer">
                      <Upload className="w-4 h-4" />
                      <span className="text-sm font-medium">Choose file</span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          setAttachmentName(file ? file.name : "No file chosen");
                        }}
                      />
                    </label>
                    <span className="text-sm text-gray-500">{attachmentName}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Attaching your business card shortens supplier response time.
                  </p>
                </div>

                {/* Message */}
                <div>
                  <Label>Your Message* (min 50 chars)</Label>
                  <TextArea
                    name="message"
                    minLength={50}
                    required
                    placeholder="Tell us about your inquiry…"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base text-white font-semibold shadow-lg shadow-teal-600/20 hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="opacity-25"
                          />
                          <path
                            d="M4 12a8 8 0 018-8"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="opacity-75"
                          />
                        </svg>
                        Submitting…
                      </>
                    ) : (
                      <>
                        Send message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    Average response time: <span className="font-semibold">24–48 hrs</span>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

          {/* INFO SIDEBAR */}
          <motion.aside
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="space-y-6"
          >
            {/* Company card */}
            <div className="rounded-3xl border border-gray-200/70 bg-white/70 backdrop-blur-xl shadow-xl ring-1 ring-gray-900/5 p-6">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 grid place-items-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-rose-600 font-semibold">
                    Head office
                  </p>
                  <h3 className="font-bold text-gray-900">INDOWUD NFC Pvt. Ltd.</h3>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm text-gray-700">
                <p className="leading-relaxed">
                  Indowud NFC Private Limited
                  <br />
                  First Floor, New No. 36,
                  <br />
                  First Main Road (East), Shenoy Nagar,
                  <br />
                  Chennai – 600 030, India
                </p>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-600" />
                  <a className="hover:underline" href="tel:+914442105060">
                    +91 44 4210 5060
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-600" />
                  <a className="hover:underline" href="mailto:info@indowud.com">
                    info@indowud.com
                  </a>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href="mailto:sales@indowud.com"
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Sales & Marketing
                </a>
                <a
                  href="mailto:hr@indowud.com"
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Careers
                </a>
              </div>
            </div>

            {/* Small cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <InfoCard
                icon={<MapPin className="w-5 h-5 text-teal-600" />}
                title="Find us"
                text="We’re centrally located in Shenoy Nagar, Chennai."
                cta={{ label: "Open in Maps", href: "#map" }}
              />
              <InfoCard
                icon={<Clock className="w-5 h-5 text-rose-600" />}
                title="Working hours"
                text="Mon–Fri, 9:30am–6:00pm (IST)"
                subtle="Response times may vary on weekends and holidays."
              />
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Map section - lazy load when in viewport */}
      <div id="map" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
            <div className="h-[420px] relative">
              <LazyMapIframe />

              {/* Map top ribbon */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4 bg-white border-t border-gray-100">
              <div className="text-sm text-gray-600">
                Need directions? Tap below to open in your maps app.
              </div>
              <a
                href="https://maps.google.com/?q=Indowud+NFC+Private+Limited+Chennai"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-white text-sm font-semibold hover:bg-teal-700 transition"
              >
                Open Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- small UI helpers ---------- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
      {children}
    </label>
  );
}

function Input({
  icon,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }) {
  return (
    <div className={`relative ${className || ""}`}>
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
      )}
      <input
        {...props}
        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-3 pl-10 text-sm shadow-sm outline-none ring-0 transition placeholder:text-gray-400 focus:border-teal-500"
      />
    </div>
  );
}

function TextArea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm shadow-sm outline-none ring-0 transition placeholder:text-gray-400 focus:border-teal-500 ${
        className || ""
      }`}
      rows={props.rows || 5}
    />
  );
}

/** Enhanced Select that supports {label,value} options */
function Select({
  options,
  placeholder,
  icon,
  className,
  value,
  onValueChange,
  disabled,
  required,
  ...props
}: {
  options: Option[];
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
  value?: string;
  onValueChange?: (v: string) => void;
  disabled?: boolean;
  required?: boolean;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "value">) {
  return (
    <div className={`relative ${className || ""}`}>
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
      )}
      <select
        value={value ?? ""}
        onChange={(e) => onValueChange?.(e.target.value)}
        disabled={disabled}
        required={required}
        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-3 pl-10 text-sm shadow-sm outline-none focus:border-teal-500 disabled:bg-gray-50 disabled:text-gray-400"
        {...props}
      >
        <option value="">{placeholder || "Select an option"}</option>
        {options.map((opt) => (
          <option key={opt.value + opt.label} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
  subtle,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  subtle?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <div className="rounded-3xl border border-gray-200/70 bg-white/70 backdrop-blur-xl shadow-xl ring-1 ring-gray-900/5 p-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gray-100 grid place-items-center">{icon}</div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="mt-3 text-sm text-gray-700">{text}</p>
      {subtle && <p className="mt-1 text-xs text-gray-500">{subtle}</p>}
      {cta && (
        <a
          href={cta.href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
        >
          {cta.label} <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

// Lazy load map iframe - only load when in viewport
function LazyMapIframe() {
  const [isInView, setIsInView] = useState(false);
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" },
    );

    observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="h-full w-full relative">
      {isInView ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3928!2d80.2265!3d13.0389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267!2zMTPCsDAyJzIwLjAiTiA4MMKwMTMnMzUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Indowud NFC Location"
        />
      ) : (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
}
