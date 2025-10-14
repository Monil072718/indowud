"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

/* ---------- Types (removes all `any`) ---------- */
type SubNavItem = { label: string; path: string };
type DropdownItem = SubNavItem & {
  hasSubmenu?: boolean;
  submenu?: SubNavItem[];
};
type NavItem = {
  label: string;
  path: string;
  dropdown?: DropdownItem[];
};

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

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
        { label: "Products", path: "#" },
        { label: "Manufacturing Process", path: "/nfc/manufacturing-process" },
        { label: "Applications", path: "/nfc/applications" },
        { label: "Features", path: "/nfc/features" },
        { label: "Sustainability & Green Rating", path: "/nfc/sustainability" },
        { label: "Important Suggestions", path: "/nfc/suggestions" },
        { label: "Thermoforming", path: "/nfc/thermoforming" },
        {
          label: "Why NFC?",
          path: "#",
          hasSubmenu: true,
          submenu: [
            { label: "Test Results", path: "#" },
            { label: "Comparative Study", path: "#" },
            { label: "Fire Test", path: "#" },
          ],
        },
        { label: "FAQs", path: "#" },
      ],
    },
    {
      label: "Media",
      path: "#",
      dropdown: [
        { label: "Videos", path: "/media/video" },
        { label: "Blog", path: "/media/blog" },
        { label: "News", path: "#" },
      ],
    },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-sm fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-rose-600 tracking-wide">INDOWUD</div>
                <div className="text-xs text-gray-600 tracking-wider">DESIGN TECHNOLOGY</div>
              </div>
            </Link>
          </motion.div>

          <nav
            className="hidden md:flex items-center space-x-8"
            onMouseLeave={() => {
              setActiveDropdown(null);
              setActiveSubDropdown(null);
            }}
          >
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-colors relative group py-2 ${
                      item.label === "Home" ? "text-rose-600" : "text-gray-700 hover:text-rose-600"
                    }`}
                  >
                    {item.label}
                    {item.label === "Home" && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-500"
                      />
                    )}
                  </Link>
                </motion.div>

                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-0 w-64 bg-white shadow-2xl rounded-b-lg overflow-hidden"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <div
                        key={dropdownItem.label}
                        className="relative"
                        onMouseEnter={() => {
                          if (dropdownItem.hasSubmenu) setActiveSubDropdown(dropdownItem.label);
                        }}
                        onMouseLeave={() => {
                          if (dropdownItem.hasSubmenu) setActiveSubDropdown(null);
                        }}
                      >
                        <Link
                          href={dropdownItem.path}
                          className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 hover:text-white transition-all duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          <span>{dropdownItem.label}</span>
                          {dropdownItem.hasSubmenu && <ChevronRight className="w-4 h-4" />}
                        </Link>

                        {dropdownItem.hasSubmenu &&
                          activeSubDropdown === dropdownItem.label &&
                          dropdownItem.submenu && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="absolute left-full top-0 w-64 bg-white shadow-2xl rounded-r-lg overflow-hidden"
                            >
                              {dropdownItem.submenu.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.path}
                                  className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:text-white transition-all duration-200 border-b border-gray-100 last:border-b-0"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 text-sm font-medium transition-colors"
            >
              Request E-Brochure
            </motion.button>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="hidden lg:flex items-center gap-3"
            >
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-rose-600 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
