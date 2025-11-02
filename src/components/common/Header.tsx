"use client"

import type React from "react"
import { useRef, useState, useCallback, useEffect } from "react"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import {
  Country,
  State,
  City,
  type ICountry,
  type IState,
  type ICity,
} from "country-state-city"

type SubNavItem = { label: string; path: string }
type DropdownItem = {
  label: string
  path: string
  hasSubmenu?: boolean
  submenu?: SubNavItem[]
}
type NavItem = {
  label: string
  path: string
  dropdown?: DropdownItem[]
}

export default function Header() {
  const [openTop, setOpenTop] = useState<string | null>(null)
  const [openSub, setOpenSub] = useState<string | null>(null)

  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileOpenTop, setMobileOpenTop] = useState<string | null>(null)
  const [mobileOpenSub, setMobileOpenSub] = useState<string | null>(null)

  const [brochureOpen, setBrochureOpen] = useState(false)

  // detect touch/pen desktop (we keep it but we go with hover for desktop)
  const [isTouchDesktop, setIsTouchDesktop] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const noHover = window.matchMedia("(hover: none)").matches
      const coarse = window.matchMedia("(pointer: coarse)").matches
      setIsTouchDesktop(noHover || coarse)
    }
  }, [])

  const headerSocial = [
    { Icon: Facebook, href: "https://www.facebook.com/indowud" },
    { Icon: Twitter, href: "https://x.com/indowud" },
    { Icon: Youtube, href: "https://www.youtube.com/channel/UC7akg1w5159gl0i0fubvYWw/videos" },
    { Icon: Instagram, href: "https://www.instagram.com/indowud/" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/indowud/" },
  ]

  // timers (kept as in your code)
  const tOpen = useRef<NodeJS.Timeout | null>(null)
  const tClose = useRef<NodeJS.Timeout | null>(null)
  const tSubOpen = useRef<NodeJS.Timeout | null>(null)
  const tSubClose = useRef<NodeJS.Timeout | null>(null)

  const clearAll = useCallback(() => {
    if (tOpen.current) clearTimeout(tOpen.current)
    if (tClose.current) clearTimeout(tClose.current)
    if (tSubOpen.current) clearTimeout(tSubOpen.current)
    if (tSubClose.current) clearTimeout(tSubClose.current)
  }, [])

  const handleTopEnter = (label: string) => {
    clearAll()
    tOpen.current = setTimeout(() => {
      setOpenTop(label)
      setOpenSub(null)
    }, 70)
  }

  const handleTopLeave = () => {
    clearAll()
    tClose.current = setTimeout(() => {
      setOpenTop(null)
      setOpenSub(null)
    }, 160)
  }

  const handleSubEnter = (label: string) => {
    if (tSubClose.current) {
      clearTimeout(tSubClose.current)
      tSubClose.current = null
    }
    if (tSubOpen.current) {
      clearTimeout(tSubOpen.current)
      tSubOpen.current = null
    }
    setOpenSub(label)
  }

  const handleSubLeave = () => {
    if (tSubOpen.current) {
      clearTimeout(tSubOpen.current)
      tSubOpen.current = null
    }
    if (tSubClose.current) clearTimeout(tSubClose.current)
    tSubClose.current = setTimeout(() => {
      setOpenSub(null)
    }, 150)
  }

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    {
      label: "Corporate",
      path: "#",
      dropdown: [
        { label: "Chairman Message", path: "/corporate/chairman-message" },
        { label: "Mission & Vision", path: "/corporate/mission-vision" },
        { label: "Our Team", path: "/corporate/our-team" },
        { label: "Certifications", path: "/corporate/certifications" },
      ],
    },
    {
      label: "NFC",
      path: "#",
      dropdown: [
        { label: "Products", path: "/nfc/products" },
        { label: "Manufacturing Process", path: "/nfc/manufacturing-process" },
        { label: "Applications", path: "/nfc/applications" },
        { label: "Features", path: "/nfc/features" },
        { label: "Sustainability & Green Rating", path: "/nfc/sustainability" },
        { label: "Important Suggestions", path: "/nfc/suggestions" },
        { label: "Thermoforming", path: "/nfc/thermoforming" },
        {
          label: "Why NFC?",
          path: "/nfc/whynfc",
          hasSubmenu: true,
          submenu: [
            { label: "Test Results", path: "/nfc/test-results" },
            { label: "Comparative Study", path: "/nfc/comparative-study" },
            { label: "Fire Test", path: "/nfc/fire-test" },
          ],
        },
        { label: "FAQs", path: "/nfc/faqs" },
      ],
    },
    {
      label: "Media",
      path: "#",
      dropdown: [
        { label: "Videos", path: "/media/video" },
        { label: "Blog", path: "/media/blog" },
        { label: "News", path: "/media/news" },
      ],
    },
    { label: "Contact Us", path: "/contact" },
  ]

  const dropdownPanel: Variants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 360, damping: 28, mass: 0.4 },
    },
    exit: { opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.16 } },
  }

  const listItem: Variants = {
    hidden: { opacity: 0, x: -6 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.02, duration: 0.18 },
    }),
    exit: { opacity: 0, x: -4, transition: { duration: 0.1 } },
  }

  const submenuPanel: Variants = {
    hidden: { opacity: 0, x: -6, scale: 0.98 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 320, damping: 26, mass: 0.4 },
    },
    exit: { opacity: 0, x: -4, scale: 0.98, transition: { duration: 0.14 } },
  }

  const preventNav = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const closeAllMenus = () => {
    setOpenTop(null)
    setOpenSub(null)
    setMobileOpen(false)
    setMobileOpenTop(null)
    setMobileOpenSub(null)
  }

  // modal scroll lock
  useEffect(() => {
    if (brochureOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setBrochureOpen(false)
      }
      window.addEventListener("keydown", onKey)
      return () => {
        document.body.style.overflow = prev
        window.removeEventListener("keydown", onKey)
      }
    }
  }, [brochureOpen])

  const openBrochure = () => {
    setBrochureOpen(true)
    setMobileOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur shadow-sm fixed inset-x-0 top-0 z-50 w-full overflow-visible"
      >
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 w-full overflow-visible">
            {/* logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 flex-shrink-0"
              onClick={closeAllMenus}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center rounded">
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-2 border-white rotate-45 rounded-sm" />
              </div>
              <div className="leading-tight">
                <div className="text-base sm:text-lg md:text-xl font-bold text-rose-600 tracking-wide">
                  INDOWUD
                </div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 tracking-wider">
                  DESIGN TECHNOLOGY
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV - hover to open */}
            <nav className="hidden lg:flex items-center gap-4 lg:gap-7 xl:gap-8 flex-shrink-0 overflow-visible">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown?.length
                const isOpen = openTop === item.label

                return (
                  <div
                    key={item.label}
                    className="relative overflow-visible"
                    onMouseEnter={() => {
                      if (hasDropdown) {
                        handleTopEnter(item.label)
                      }
                    }}
                    onMouseLeave={handleTopLeave}
                  >
                    {hasDropdown ? (
                      <button
                        onClick={preventNav}
                        className={`text-[13px] lg:text-sm font-medium py-2 px-1 transition-colors whitespace-nowrap ${
                          isOpen ? "text-rose-600" : "text-gray-700 hover:text-rose-600"
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={closeAllMenus}
                        className={`text-[13px] lg:text-sm font-medium py-2 px-1 transition-colors whitespace-nowrap ${
                          item.label === "Home"
                            ? "text-rose-600"
                            : "text-gray-700 hover:text-rose-600"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}

                    <AnimatePresence>
                      {hasDropdown && isOpen && (
                        <motion.div
                          key={`${item.label}-dd`}
                          variants={dropdownPanel}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          className="absolute top-full left-0 mt-1 w-72 bg-white shadow-2xl rounded-xl z-50 ring-1 ring-black/5 overflow-visible"
                          style={{ transformOrigin: "top left" }}
                          onMouseEnter={() => handleTopEnter(item.label)}
                          onMouseLeave={handleTopLeave}
                        >
                          <div className="py-2">
                            {item.dropdown!.map((d, i) => {
                              const hasSub = !!(d.hasSubmenu && d.submenu?.length)
                              const subOpen = openSub === d.label

                              return (
                                <motion.div
                                  key={d.label}
                                  custom={i}
                                  variants={listItem}
                                  initial="hidden"
                                  animate="show"
                                  exit="exit"
                                  className="relative group overflow-visible"
                                  onMouseEnter={() => {
                                    if (hasSub) {
                                      handleSubEnter(d.label)
                                    }
                                  }}
                                  onMouseLeave={() => {
                                    if (hasSub) {
                                      handleSubLeave()
                                    }
                                  }}
                                >
                                  {hasSub ? (
                                    <button
                                      onClick={preventNav}
                                      className="w-full flex items-center justify-between px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 hover:text-white transition-all duration-200"
                                    >
                                      <span>{d.label}</span>
                                      <ChevronRight className="w-4 h-4 shrink-0" />
                                    </button>
                                  ) : (
                                    <Link
                                      href={d.path}
                                      className="flex items-center justify-between px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 hover:text-white transition-all duration-200"
                                      onClick={closeAllMenus}
                                    >
                                      <span>{d.label}</span>
                                    </Link>
                                  )}

                                  <AnimatePresence>
                                    {hasSub && subOpen && (
                                      <motion.div
                                        key={`${d.label}-submenu`}
                                        variants={submenuPanel}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className="absolute left-full top-0 ml-0.5 w-72 bg-white shadow-2xl rounded-xl z-[60] ring-1 ring-black/5 overflow-visible"
                                        style={{ transformOrigin: "top left" }}
                                        onMouseEnter={() => handleSubEnter(d.label)}
                                        onMouseLeave={handleSubLeave}
                                      >
                                        <div className="py-2">
                                          {d.submenu!.map((s, si) => (
                                            <motion.div
                                              key={s.label}
                                              custom={si}
                                              variants={listItem}
                                              initial="hidden"
                                              animate="show"
                                              exit="exit"
                                            >
                                              <Link
                                                href={s.path}
                                                className="block px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:text-white transition-all duration-200"
                                                onClick={closeAllMenus}
                                              >
                                                {s.label}
                                              </Link>
                                            </motion.div>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </nav>

            {/* right side buttons */}
            <div className="hidden lg:flex items-center gap-3 lg:gap-5 flex-shrink-0">
              <button
                className="hidden xl:block bg-teal-500 hover:bg-teal-600 text-white px-4 xl:px-6 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                onClick={openBrochure}
                aria-label="Request E-Brochure"
              >
                Request E-Brochure
              </button>
              <div className="hidden xl:flex items-center gap-3">
                {headerSocial.map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-rose-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 rounded"
                    onClick={closeAllMenus}
                  >
                    <Icon size={18} aria-hidden={true} />
                  </a>
                ))}
              </div>
            </div>

            {/* mobile / tablet toggle */}
            <button
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
              aria-label="Toggle menu"
              onClick={() => {
                const next = !mobileOpen
                setMobileOpen(next)
                if (!next) {
                  setMobileOpenTop(null)
                  setMobileOpenSub(null)
                }
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE / TABLET MENU (unchanged) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden w-full bg-white border-t border-gray-200 fixed top-14 sm:top-16 left-0 right-0 z-40 shadow-lg"
            >
              <div className="w-full px-3 xs:px-4 sm:px-6 py-3 max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navItems.map((item) => {
                  const hasDropdown = !!item.dropdown?.length
                  const open = mobileOpenTop === item.label

                  return (
                    <div
                      key={item.label}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <div className="w-full flex items-center justify-between py-3">
                        <Link
                          href={item.path}
                          onClick={(e) => {
                            if (hasDropdown) {
                              e.preventDefault()
                              setMobileOpenTop(open ? null : item.label)
                              setMobileOpenSub(null)
                            } else {
                              setMobileOpen(false)
                            }
                          }}
                          className={`text-base font-medium flex-1 ${
                            item.label === "Home"
                              ? "text-rose-600"
                              : "text-gray-800"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {hasDropdown && (
                          <button
                            aria-label="Toggle section"
                            onClick={() => {
                              setMobileOpenTop(open ? null : item.label)
                              setMobileOpenSub(null)
                            }}
                            className="p-1.5 rounded hover:bg-gray-100 transition-colors duration-200 ml-3 flex-shrink-0"
                          >
                            <ChevronRight
                              className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                                open ? "rotate-90" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      <AnimatePresence>
                        {hasDropdown && open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 border-l-2 border-teal-400 ml-2 bg-gray-50/50"
                          >
                            {item.dropdown!.map((d) => {
                              const hasSub = !!(d.hasSubmenu && d.submenu?.length)
                              const subOpen = mobileOpenSub === d.label

                              return (
                                <div
                                  key={d.label}
                                  className="border-b border-gray-100 last:border-b-0"
                                >
                                  <div className="w-full flex items-center justify-between py-2.5">
                                    <Link
                                      href={d.path}
                                      onClick={(e) => {
                                        if (hasSub) {
                                          e.preventDefault()
                                          setMobileOpenSub(subOpen ? null : d.label)
                                        } else {
                                          setMobileOpen(false)
                                        }
                                      }}
                                      className="text-sm text-gray-700 flex-1"
                                    >
                                      {d.label}
                                    </Link>
                                    {hasSub && (
                                      <button
                                        aria-label="Toggle submenu"
                                        onClick={() =>
                                          setMobileOpenSub(subOpen ? null : d.label)
                                        }
                                        className="p-1.5 rounded hover:bg-gray-200 transition-colors duration-200 ml-2 flex-shrink-0"
                                      >
                                        <ChevronRight
                                          className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                                            subOpen ? "rotate-90" : ""
                                          }`}
                                        />
                                      </button>
                                    )}
                                  </div>

                                  <AnimatePresence>
                                    {hasSub && subOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.18 }}
                                        className="pl-4 border-l-2 border-pink-300 ml-2 bg-gray-50/30"
                                      >
                                        {d.submenu!.map((s) => (
                                          <Link
                                            key={s.label}
                                            href={s.path}
                                            onClick={() => setMobileOpen(false)}
                                            className="block text-xs text-gray-600 py-2 px-2 hover:text-rose-600 hover:bg-white transition-colors duration-200 border-b border-gray-100 last:border-b-0 rounded"
                                          >
                                            {s.label}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}

                <div className="py-4 mt-2 border-t border-gray-200">
                  <button
                    onClick={openBrochure}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200 mb-4"
                  >
                    Request E-Brochure
                  </button>
                  <div className="flex items-center justify-center gap-5">
                    {[Facebook, Twitter, Youtube, Instagram, Linkedin].map(
                      (Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
                          aria-label="social-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          <Icon size={20} />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* BROCHURE MODAL */}
      <AnimatePresence>
        {brochureOpen && (
          <>
            <motion.div
              key="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px]"
              onClick={() => setBrochureOpen(false)}
            />

            <motion.div
              key="modal-dialog"
              role="dialog"
              aria-modal="true"
              aria-label="Request E-brochure"
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="fixed inset-0 z-[61] grid place-items-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <BrochureFormCard onClose={() => setBrochureOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function BrochureFormCard({ onClose }: { onClose: () => void }) {
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
                  className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                    errors.name ? "border-rose-400" : "border-gray-300"
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
                  className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                    errors.phone ? "border-rose-400" : "border-gray-300"
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
                  className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                    errors.email ? "border-rose-400" : "border-gray-300"
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
                  className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                    errors.occupation ? "border-rose-400" : "border-gray-300"
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
                  className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                    errors.pincode ? "border-rose-400" : "border-gray-300"
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
                    className={`w-full appearance-none rounded-md border px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      errors.country ? "border-rose-400" : "border-gray-300"
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
                    className={`w-full appearance-none rounded-md border px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 disabled:bg-gray-100 disabled:text-gray-400 ${
                      errors.state ? "border-rose-400" : "border-gray-300"
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
                    className={`w-full appearance-none rounded-md border px-3 py-2 text-sm outline-none bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 disabled:bg-gray-100 disabled:text-gray-400 ${
                      errors.city ? "border-rose-400" : "border-gray-300"
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
                className={`w-[300px] max-w-full h-[78px] border rounded-md bg-gray-50 flex items-center gap-3 px-3 ${
                  errors.captcha ? "border-rose-400" : "border-gray-300"
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
