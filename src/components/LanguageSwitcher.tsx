'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { useRouter, usePathname, routing } from '@/i18n/routing';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';

export default function LanguageSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!mounted) return (
    <div className="w-24 h-8 bg-white/10 rounded-lg animate-pulse" />
  );

  const handleLocaleChange = (nextLocale: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  };

  const currentLocaleName = t(locale);

  return (
    <div 
      className="relative w-full lg:w-auto" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center justify-between lg:justify-center gap-2.5 bg-white/10 lg:bg-white/10 hover:bg-white/20 border border-black/10 lg:border-white/20 text-gray-700 lg:text-white text-[11px] font-bold py-2 lg:py-1.5 px-4 lg:px-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 group disabled:opacity-50 uppercase tracking-widest w-full lg:w-max min-w-[120px]"
      >
        <span className="flex-1 lg:flex-none text-left lg:text-center">{currentLocaleName}</span>
        <Globe size={18} className="text-teal-500 lg:text-teal-400 group-hover:rotate-12 transition-transform duration-500" />
        <ChevronDown 
          size={16} 
          className={`text-gray-400 lg:text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute left-0 lg:left-auto lg:right-0 mt-3 lg:mt-3 w-full lg:w-48 bg-white border border-gray-100 rounded-2xl z-[1000] shadow-2xl overflow-hidden p-1.5"
          >
            <div className="space-y-0.5">
              {routing.locales.map((cur) => {
                const isSelected = locale === cur;
                return (
                  <button
                    key={cur}
                    onClick={() => handleLocaleChange(cur)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold rounded-xl transition-all ${
                      isSelected 
                        ? 'bg-teal-600 text-white shadow-sm' 
                        : 'text-gray-700 hover:bg-teal-50 hover:text-teal-900'
                    }`}
                  >
                    <span className="capitalize">{t(cur)}</span>
                    {isSelected && <Check size={14} className="text-white" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
