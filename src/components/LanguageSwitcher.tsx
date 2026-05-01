'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { useRouter, usePathname, routing } from '@/i18n/routing';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';

/* ─── Desktop floating dropdown ─── */
function DesktopLanguageSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const handleLocaleChange = (nextLocale: string) => {
    setIsOpen(false);
    startTransition(() => { router.replace({ pathname }, { locale: nextLocale }); });
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[11px] font-bold py-1.5 px-3 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 disabled:opacity-50 uppercase tracking-widest"
      >
        <span>{t(locale)}</span>
        <Globe size={14} className="text-teal-400" />
        <ChevronDown size={13} className={`text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-2xl z-[1000] shadow-2xl overflow-hidden p-1.5"
          >
            <div className="space-y-0.5">
              {routing.locales.map((cur) => {
                const isSelected = locale === cur;
                return (
                  <button
                    key={cur}
                    onClick={() => handleLocaleChange(cur)}
                    className={`flex items-center justify-between w-full px-4 py-2.5 text-[13px] font-semibold rounded-xl transition-all ${
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

/* ─── Mobile inline accordion ─── */
function MobileLanguageSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (nextLocale: string) => {
    setIsOpen(false);
    startTransition(() => { router.replace({ pathname }, { locale: nextLocale }); });
  };

  return (
    <div className="w-full">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center justify-between w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 text-sm font-bold uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 disabled:opacity-50"
      >
        <div className="flex items-center gap-2.5">
          <Globe size={16} className="text-teal-500" />
          <span>{t(locale)}</span>
        </div>
        <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Inline list — no absolute positioning, stays inside scroll flow */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-2 border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-50">
              {routing.locales.map((cur) => {
                const isSelected = locale === cur;
                return (
                  <button
                    key={cur}
                    onClick={() => handleLocaleChange(cur)}
                    disabled={isPending}
                    className={`flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold transition-all disabled:opacity-50 ${
                      isSelected
                        ? 'bg-teal-600 text-white'
                        : 'text-gray-700 bg-white hover:bg-teal-50 hover:text-teal-900'
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

/* ─── Public export: renders the right variant ─── */
export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="w-24 h-8 bg-white/10 rounded-lg animate-pulse" />;

  return mobile ? <MobileLanguageSwitcher /> : <DesktopLanguageSwitcher />;
}
