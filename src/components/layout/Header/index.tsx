"use client"

import type React from "react"
import { useRef, useState, useCallback, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
import dynamic from "next/dynamic";

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

  // mobile menu scroll lock
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileOpen(false)
      }
      window.addEventListener("keydown", onKey)
      return () => {
        document.body.style.overflow = prev
        window.removeEventListener("keydown", onKey)
      }
    }
  }, [mobileOpen])

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
              <Image
                src="/imgi_2_logo.png.webp"
                alt="Indowud Logo"
                width={120}
                height={120}
                className="w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] object-contain"
                priority
              />
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
                        className={`text-sm font-medium py-2 px-1 transition-colors whitespace-nowrap ${isOpen ? "text-rose-600" : "text-gray-700 hover:text-rose-600"
                          }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={closeAllMenus}
                        className={`text-sm font-medium py-2 px-1 transition-colors whitespace-nowrap ${item.label === "Home"
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

      {/* MOBILE / TABLET MENU - Slide from right */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              key="mobile-menu"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="lg:hidden fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-teal-50 to-white">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/imgi_2_logo.png.webp"
                    alt="Indowud Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                    priority
                  />
                  <div className="leading-tight">
                    <div className="text-base font-bold text-rose-600 tracking-wide">
                      INDOWUD
                    </div>
                    <div className="text-[10px] text-gray-600 tracking-wider">
                      DESIGN TECHNOLOGY
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X size={22} className="text-gray-700" />
                </button>
              </div>

              {/* Menu content */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
                {navItems.map((item, idx) => {
                  const hasDropdown = !!item.dropdown?.length
                  const open = mobileOpenTop === item.label

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <div className="w-full flex items-center justify-between py-3.5">
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
                          className={`text-base font-semibold flex-1 transition-colors duration-200 ${item.label === "Home"
                            ? "text-rose-600"
                            : "text-gray-800 hover:text-rose-600"
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
                            className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 ml-3 flex-shrink-0"
                          >
                            <ChevronRight
                              className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${open ? "rotate-90" : ""
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
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut"
                            }}
                            className="pl-4 border-l-2 border-teal-400 ml-2 bg-gradient-to-r from-teal-50/50 to-transparent rounded-r-lg my-1"
                          >
                            {item.dropdown!.map((d, dIdx) => {
                              const hasSub = !!(d.hasSubmenu && d.submenu?.length)
                              const subOpen = mobileOpenSub === d.label

                              return (
                                <motion.div
                                  key={d.label}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: dIdx * 0.03 + 0.15, duration: 0.25 }}
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
                                      className="text-sm text-gray-700 hover:text-teal-600 flex-1 transition-colors duration-200 font-medium"
                                    >
                                      {d.label}
                                    </Link>
                                    {hasSub && (
                                      <button
                                        aria-label="Toggle submenu"
                                        onClick={() =>
                                          setMobileOpenSub(subOpen ? null : d.label)
                                        }
                                        className="p-1.5 rounded-lg hover:bg-gray-200 transition-all duration-200 ml-2 flex-shrink-0"
                                      >
                                        <ChevronRight
                                          className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${subOpen ? "rotate-90" : ""
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
                                        transition={{
                                          duration: 0.25,
                                          ease: "easeInOut"
                                        }}
                                        className="pl-4 border-l-2 border-pink-300 ml-2 bg-gradient-to-r from-pink-50/50 to-transparent rounded-r-lg my-1"
                                      >
                                        {d.submenu!.map((s, idx) => (
                                          <motion.div
                                            key={s.label}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                          >
                                            <Link
                                              href={s.path}
                                              onClick={() => setMobileOpen(false)}
                                              className="block text-xs text-gray-600 py-2.5 px-3 hover:text-rose-600 hover:bg-white/80 transition-all duration-200 border-b border-gray-100 last:border-b-0 rounded-lg font-medium"
                                            >
                                              {s.label}
                                            </Link>
                                          </motion.div>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              )
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>

              {/* Footer section - fixed at bottom */}
              <div className="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50/50 flex-shrink-0">
                <button
                  onClick={openBrochure}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 mb-4 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                >
                  Request E-Brochure
                </button>
                <div className="flex items-center justify-center gap-4">
                  {headerSocial.map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition-all duration-200 shadow-sm hover:shadow-md"
                      aria-label="social-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
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

// Lazy load the form to avoid bundling country-state-city on initial load
const BrochureFormCard = dynamic(() => import("./BrochureFormCard"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-3xl h-96 bg-white rounded-xl shadow-2xl flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
    </div>
  ),
})
