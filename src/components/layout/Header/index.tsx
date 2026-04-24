"use client"

import type React from "react"
import { useRef, useState, useCallback, useEffect } from "react"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
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
import LanguageSwitcher from "@/components/LanguageSwitcher";

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
  const t = useTranslations('Nav');
  const [mounted, setMounted] = useState(false);
  const [openTop, setOpenTop] = useState<string | null>(null)
  const [openSub, setOpenSub] = useState<string | null>(null)

  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileOpenTop, setMobileOpenTop] = useState<string | null>(null)
  const [mobileOpenSub, setMobileOpenSub] = useState<string | null>(null)

  const [brochureOpen, setBrochureOpen] = useState(false)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


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
    { label: t('home'), path: "/" },
    {
      label: t('corporate'),
      path: "#",
      dropdown: [
        { label: t('chairmanMessage'), path: "/corporate/chairman-message" },
        { label: t('missionVision'), path: "/corporate/mission-vision" },
        { label: t('aboutUs'), path: "/corporate/our-team" },
        { label: t('certifications'), path: "/corporate/certifications" },
      ],
    },
    {
      label: t('nfcProducts'),
      path: "/nfc/products",
      dropdown: [
        { label: t('zerOwudNFC'), path: "/nfc/products#zerowud-nfc" },
        { label: t('indowudNFC'), path: "/nfc/products#indowud-board" },
        { label: t('nfcTexturedPanels'), path: "/nfc/products#nfc-textured" },
        { label: t('nfcFlute'), path: "/nfc/products#nfc-fluted" },
        { label: t('nfcDoor'), path: "/nfc/products#nfc-door" },
        { label: t('nfcFrame'), path: "/nfc/products#nfc-frame" },
        { label: t('nfcSiding'), path: "/nfc/products#nfc-siding" },
        { label: t('nfcFence'), path: "/nfc/products#nfc-fence" },
        { label: t('nfcFlooring'), path: "/nfc/products#nfc-flooring" },
        { label: t('nfcRafters'), path: "/nfc/products#nfc-rafters" },
        { label: t('nfcJaali'), path: "/nfc/products#nfc-jalli" },
        { label: t('nfcGlu'), path: "/nfc/products#nfc-glu" },
      ],
    },
    {
      label: t('knowledgeCenter'),
      path: "#",
      dropdown: [
        { label: t('manufacturingProcess'), path: "/nfc/manufacturing-process" },
        { label: t('applications'), path: "/nfc/applications" },
        { label: t('features'), path: "/nfc/features" },
        { label: t('sustainabilityGreenRating'), path: "/nfc/sustainability" },
        { label: t('importantSuggestions'), path: "/nfc/suggestions" },
        { label: t('thermoforming'), path: "/nfc/thermoforming" },
        {
          label: t('whyNFC'),
          path: "/nfc/whynfc",
          hasSubmenu: true,
          submenu: [
            { label: t('testResults'), path: "/nfc/test-results" },
            { label: t('comparativeStudy'), path: "/nfc/comparative-study" },
            { label: t('fireTest'), path: "/nfc/fire-test" },
          ],
        },
        { label: t('faqs'), path: "/nfc/faqs" },
      ],
    },
    {
      label: t('media'),
      path: "#",
      dropdown: [
        { label: t('videos'), path: "/media/video" },
        { label: t('blog'), path: "/media/blog" },
        { label: t('news'), path: "/media/news" },
      ],
    },
    { label: t('contactUs'), path: "/contact" },
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
    // Wrap in setTimeout to escape React's startTransition batching
    // This allows the menu to close instantly even if Next.js is slow to load the next page
    setTimeout(() => {
      setOpenTop(null)
      setOpenSub(null)
      setMobileOpen(false)
      setMobileOpenTop(null)
      setMobileOpenSub(null)
    }, 0)
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
      {/* ── TOP BAR ── */}
      <div className="bg-teal-900 text-white py-1.5 z-[60] relative">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[11px] font-medium tracking-wider uppercase">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {headerSocial.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="glass-nav fixed inset-x-0 top-8 z-50 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" onClick={closeAllMenus}>
              <div className="relative overflow-hidden rounded-lg p-1 bg-white/10 group-hover:bg-white/20 transition-colors">
                <Image
                  src="/imgi_2_logo.png.webp"
                  alt="Indowud Logo"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-black text-rose-600 tracking-tighter leading-none group-hover:scale-105 transition-transform origin-left">INDOWUD</div>
                <div className="text-[9px] text-gray-500 font-bold tracking-[0.2em]">{t('designTechnology')}</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown?.length
                const isOpen = openTop === item.label

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasDropdown && handleTopEnter(item.label)}
                    onMouseLeave={handleTopLeave}
                  >
                    {hasDropdown ? (
                      <button
                        className={`nav-link-hover px-4 py-2 text-[13px] font-bold tracking-wide transition-all uppercase ${
                          isOpen ? "text-rose-600" : "text-gray-700 hover:text-rose-600"
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.path}
                        className="nav-link-hover px-4 py-2 text-[13px] font-bold tracking-wide transition-all uppercase text-gray-700 hover:text-rose-600"
                        onClick={closeAllMenus}
                      >
                        {item.label}
                      </Link>
                    )}

                    <AnimatePresence>
                      {hasDropdown && isOpen && (
                        <motion.div
                          variants={dropdownPanel}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          className="glass-dropdown absolute top-full left-0 mt-2 w-72 rounded-2xl z-50 overflow-hidden"
                        >
                          <div className="p-2 space-y-0.5">
                            {item.dropdown!.map((d, i) => {
                              const hasSub = !!(d.hasSubmenu && d.submenu?.length)
                              const subOpen = openSub === d.label

                              return (
                                <div
                                  key={d.label}
                                  className="relative"
                                  onMouseEnter={() => hasSub && handleSubEnter(d.label)}
                                  onMouseLeave={() => hasSub && handleSubLeave()}
                                >
                                  {hasSub ? (
                                    <button className="w-full flex items-center justify-between px-4 py-3 text-[13px] font-semibold text-gray-700 hover:bg-teal-500 hover:text-white rounded-xl transition-all">
                                      <span>{d.label}</span>
                                      <ChevronRight className={`w-4 h-4 transition-transform ${subOpen ? 'rotate-90' : ''}`} />
                                    </button>
                                  ) : (
                                    <Link
                                      href={d.path}
                                      className="block px-4 py-3 text-[13px] font-semibold text-gray-700 hover:bg-teal-500 hover:text-white rounded-xl transition-all"
                                      onClick={closeAllMenus}
                                    >
                                      {d.label}
                                    </Link>
                                  )}

                                  <AnimatePresence>
                                    {hasSub && subOpen && (
                                      <motion.div
                                        variants={submenuPanel}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className="glass-dropdown absolute left-full top-0 ml-2 w-72 rounded-2xl z-[60] overflow-hidden"
                                      >
                                        <div className="p-2 space-y-0.5">
                                          {d.submenu!.map((s) => (
                                            <Link
                                              key={s.label}
                                              href={s.path}
                                              className="block px-4 py-3 text-[13px] font-semibold text-gray-700 hover:bg-rose-500 hover:text-white rounded-xl transition-all"
                                              onClick={closeAllMenus}
                                            >
                                              {s.label}
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
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

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={openBrochure}
                className="btn-premium px-6 py-3 text-[11px] font-black text-white uppercase tracking-widest rounded-full transition-all"
              >
                {t('requestBrochure')}
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-xl bg-gray-100 text-gray-900"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white z-50 shadow-2xl flex flex-col"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Image
                    src="/imgi_2_logo.png.webp"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <div className="text-lg font-black text-rose-600 leading-none">INDOWUD</div>
                    <div className="text-[8px] text-gray-400 font-bold tracking-widest uppercase">Design Tech</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl bg-gray-50 text-gray-900"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex-1 overflow-y-auto px-6 py-8">
                <nav className="space-y-1">
                  {navItems.map((item, idx) => {
                    const hasDropdown = !!item.dropdown?.length
                    const open = mobileOpenTop === item.label

                    return (
                      <div key={item.label} className="py-1">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.path}
                            onClick={(e) => {
                              if (hasDropdown) {
                                e.preventDefault()
                                setMobileOpenTop(open ? null : item.label)
                              } else {
                                closeAllMenus()
                              }
                            }}
                            className={`text-base font-bold uppercase tracking-wide transition-colors ${
                              open ? "text-rose-600" : "text-gray-900"
                            }`}
                          >
                            {item.label}
                          </Link>
                          {hasDropdown && (
                            <button
                              onClick={() => setMobileOpenTop(open ? null : item.label)}
                              className={`p-2 transition-transform duration-300 ${open ? 'rotate-90 text-rose-600' : 'text-gray-400'}`}
                            >
                              <ChevronRight size={18} />
                            </button>
                          )}
                        </div>

                        <AnimatePresence>
                          {hasDropdown && open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 mt-2 space-y-1 border-l-2 border-teal-500"
                            >
                              {item.dropdown!.map((d) => {
                                const hasSub = !!(d.hasSubmenu && d.submenu?.length)
                                const subOpen = mobileOpenSub === d.label

                                return (
                                  <div key={d.label}>
                                    <div className="flex items-center justify-between py-2">
                                      <Link
                                        href={d.path}
                                        onClick={(e) => {
                                          if (hasSub) {
                                            e.preventDefault()
                                            setMobileOpenSub(subOpen ? null : d.label)
                                          } else {
                                            closeAllMenus()
                                          }
                                        }}
                                        className="text-[13px] font-semibold text-gray-600 hover:text-teal-600"
                                      >
                                        {d.label}
                                      </Link>
                                      {hasSub && (
                                        <button
                                          onClick={() => setMobileOpenSub(subOpen ? null : d.label)}
                                          className={`p-1 transition-transform ${subOpen ? 'rotate-90 text-teal-600' : 'text-gray-300'}`}
                                        >
                                          <ChevronRight size={14} />
                                        </button>
                                      )}
                                    </div>

                                    <AnimatePresence>
                                      {hasSub && subOpen && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="overflow-hidden pl-4 space-y-1 border-l border-rose-200"
                                        >
                                          {d.submenu!.map((s) => (
                                            <Link
                                              key={s.label}
                                              href={s.path}
                                              className="block py-2 text-[12px] font-medium text-gray-500 hover:text-rose-500"
                                              onClick={closeAllMenus}
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
                </nav>
              </div>

              {/* Mobile Footer */}
              <div className="p-6 border-t border-gray-100 space-y-6">
                <button
                  onClick={openBrochure}
                  className="w-full btn-premium py-4 text-xs font-black text-white uppercase tracking-widest rounded-xl"
                >
                  {t('requestBrochure')}
                </button>
                <div className="flex justify-center gap-6">
                  {headerSocial.map(({ Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" className="text-gray-400 hover:text-rose-600 transition-colors">
                      <Icon size={20} />
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

