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
        className={`group flex items-center gap-2 px-3.5 py-2 rounded-full transition-all duration-300 border ${
          isOpen
            ? 'bg-white border-teal-200 shadow-sm'
            : 'bg-slate-50/80 hover:bg-white border-transparent hover:border-slate-200 hover:shadow-md backdrop-blur-sm'
        } focus:outline-none focus:ring-2 focus:ring-teal-500/30 disabled:opacity-50`}
      >
        <Globe size={16} className={`transition-colors duration-300 ${isOpen ? 'text-teal-600' : 'text-slate-500 group-hover:text-teal-600'}`} />
        <span className={`text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 mt-[1px] ${isOpen ? 'text-teal-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
          {t(locale)}
        </span>
        <ChevronDown size={14} className={`transition-all duration-300 ${isOpen ? 'rotate-180 text-teal-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="absolute right-0 mt-3 w-48 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl z-[1000] shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden p-2"
          >
            <div className="space-y-1">
              {routing.locales.map((cur) => {
                const isSelected = locale === cur;
                return (
                  <button
                    key={cur}
                    onClick={() => handleLocaleChange(cur)}
                    className={`group flex items-center justify-between w-full px-4 py-2.5 text-[13px] font-semibold rounded-xl transition-all duration-200 ${
                      isSelected
                        ? 'bg-teal-50 text-teal-900'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span className="capitalize">{t(cur)}</span>
                    {isSelected ? (
                      <Check size={16} className="text-teal-600" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border border-slate-200 group-hover:border-slate-300 transition-colors" />
                    )}
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
        className={`flex items-center justify-between w-full px-4 py-3 border rounded-xl text-sm font-bold uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/30 disabled:opacity-50 ${
          isOpen ? 'border-teal-200 bg-teal-50/30 text-teal-900' : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-white'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <Globe size={18} className={isOpen ? 'text-teal-600' : 'text-slate-500'} />
          <span>{t(locale)}</span>
        </div>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
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
            <div className="mt-2 border border-slate-100 bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="p-1.5 space-y-1">
                {routing.locales.map((cur) => {
                  const isSelected = locale === cur;
                  return (
                    <button
                      key={cur}
                      onClick={() => handleLocaleChange(cur)}
                      disabled={isPending}
                      className={`group flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 ${
                        isSelected
                          ? 'bg-teal-50 text-teal-900'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className="capitalize">{t(cur)}</span>
                      {isSelected ? (
                        <Check size={16} className="text-teal-600" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border border-slate-200 group-hover:border-slate-300 transition-colors" />
                      )}
                    </button>
                  );
                })}
              </div>
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
