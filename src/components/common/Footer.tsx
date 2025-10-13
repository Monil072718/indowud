"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { title: "Home", href: "/" },
    { title: "Corporate", href: "#" },
    { title: "NFC", href: "#" },
    { title: "Media", href: "#" },
    { title: "Contact Us", href: "/contact" },
    { title: "Downloads", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Legal Note", href: "#" },
    { title: "Warranty", href: "#" }
  ];

  const socialIcons = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { icon: Youtube, href: "#", color: "hover:bg-red-600" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-100 to-gray-200 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path
            fill="#c17a5b"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white transform rotate-45"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rose-600 tracking-wide">INDOWUD</div>
                <div className="text-xs text-gray-600 tracking-wider">DESIGN TECHNOLOGY</div>
              </div>
            </motion.div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                  <p className="font-medium">+91 44 4215 6686</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                  <p className="font-medium">info@indowud.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 uppercase tracking-wide">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {footerLinks.map((link, index) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full group-hover:bg-teal-500 transition-colors" />
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all ${social.color} hover:text-white group`}
              >
                <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-sm">© 2023 INDOWUD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
