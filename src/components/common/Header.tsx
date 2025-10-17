"use client"

import type React from "react"

import { useRef, useState, useCallback } from "react"
import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram, Linkedin, ChevronRight, Menu, X } from "lucide-react"
import { motion, AnimatePresence, type Variants } from "framer-motion"

/* ---------- Types ---------- */
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
  /* Desktop state */
  const [openTop, setOpenTop] = useState<string | null>(null)
  const [openSub, setOpenSub] = useState<string | null>(null)

  /* Mobile state */
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileOpenTop, setMobileOpenTop] = useState<string | null>(null)
  const [mobileOpenSub, setMobileOpenSub] = useState<string | null>(null)

  /* Hover intent timers */
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
    clearAll()
    tSubOpen.current = setTimeout(() => setOpenSub(label), 60)
  }

  const handleSubLeave = () => {
    clearAll()
    tSubClose.current = setTimeout(() => setOpenSub(null), 140)
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

  /* Motion variants */
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

  /* Prevent navigation for togglers */
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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur shadow-sm fixed inset-x-0 top-0 z-50 w-full"
      >
        {/* Main Header Container */}
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 w-full">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" onClick={closeAllMenus}>
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center rounded">
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-2 border-white rotate-45 rounded-sm" />
              </div>
              <div className="leading-tight">
                <div className="text-base sm:text-lg md:text-xl font-bold text-rose-600 tracking-wide">INDOWUD</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 tracking-wider">
                  DESIGN TECHNOLOGY
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-7 xl:gap-8 flex-shrink-0">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown?.length

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasDropdown && handleTopEnter(item.label)}
                    onMouseLeave={handleTopLeave}
                  >
                    {/* Label / Toggler */}
                    {hasDropdown ? (
                      <button
                        onClick={preventNav}
                        className={`text-[13px] lg:text-sm font-medium py-2 px-1 transition-colors whitespace-nowrap ${
                          openTop === item.label ? "text-rose-600" : "text-gray-700 hover:text-rose-600"
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.path}
                        className={`text-[13px] lg:text-sm font-medium py-2 px-1 transition-colors whitespace-nowrap ${
                          item.label === "Home" ? "text-rose-600" : "text-gray-700 hover:text-rose-600"
                        }`}
                        onClick={closeAllMenus}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Dropdown */}
                    <AnimatePresence>
                      {hasDropdown && openTop === item.label && (
                        <motion.div
                          key={`${item.label}-dd`}
                          variants={dropdownPanel}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          className="absolute top-full left-0 mt-1 w-72 bg-white shadow-2xl rounded-xl z-50 ring-1 ring-black/5 overflow-hidden"
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
                                  className="relative"
                                  onMouseEnter={() => (hasSub ? handleSubEnter(d.label) : undefined)}
                                  onMouseLeave={() => (hasSub ? handleSubLeave() : undefined)}
                                >
                                  {/* Row (button if submenu, link otherwise) */}
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

                                  {/* Submenu */}
                                  <AnimatePresence>
                                    {hasSub && subOpen && (
                                      <motion.div
                                        key={`${d.label}-submenu`}
                                        variants={submenuPanel}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className="absolute left-full top-0 w-72 bg-white shadow-2xl rounded-r-xl z-50 ring-1 ring-black/5 overflow-hidden"
                                        style={{ transformOrigin: "top left" }}
                                      >
                                        {/* Hover bridge to prevent accidental closure */}
                                        <div className="absolute -left-3 top-0 h-full w-6" />
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

            {/* Right (desktop) */}
            <div className="hidden md:flex items-center gap-3 lg:gap-5 flex-shrink-0">
              <button
                className="hidden lg:block bg-teal-500 hover:bg-teal-600 text-white px-4 lg:px-6 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
                onClick={closeAllMenus}
              >
                Request E-Brochure
              </button>
              <div className="hidden lg:flex items-center gap-3">
                {[Facebook, Twitter, Youtube, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
                    aria-label="social-link"
                    onClick={closeAllMenus}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
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

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop - positioned fixed to cover entire viewport */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Menu - positioned absolutely below header */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden w-full bg-white border-t border-gray-200 fixed top-14 sm:top-16 left-0 right-0 z-40 shadow-lg"
            >
              <div className="w-full px-3 xs:px-4 sm:px-6 py-3 max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navItems.map((item) => {
                  const hasDropdown = !!item.dropdown?.length
                  const open = mobileOpenTop === item.label

                  return (
                    <div key={item.label} className="border-b border-gray-100 last:border-b-0">
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
                            item.label === "Home" ? "text-rose-600" : "text-gray-800"
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

                      {/* Level 1 accordion */}
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
                                <div key={d.label} className="border-b border-gray-100 last:border-b-0">
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
                                        onClick={() => setMobileOpenSub(subOpen ? null : d.label)}
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

                                  {/* Level 2 accordion */}
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

                {/* CTA + Socials (mobile) */}
                <div className="py-4 mt-2 border-t border-gray-200">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200 mb-4"
                  >
                    Request E-Brochure
                  </button>
                  <div className="flex items-center justify-center gap-5">
                    {[Facebook, Twitter, Youtube, Instagram, Linkedin].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-gray-600 hover:text-rose-600 transition-colors duration-200"
                        aria-label="social-link"
                        onClick={() => setMobileOpen(false)}
                      >
                        <Icon size={20} />
                      </a>
                    ))}
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
