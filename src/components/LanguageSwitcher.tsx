'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { useRouter, usePathname, routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  }

  return (
    <label className="relative text-gray-400">
      <span className="sr-only">{t('label')}</span>
      <select
        className="appearance-none bg-transparent py-2 pl-3 pr-8 w-max text-sm rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
        suppressHydrationWarning
      >
        {routing.locales.map((cur) => (
          <option key={cur} value={cur} className="text-black bg-white">
            {t(cur)}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </label>
  );
}
