"use client";

import { useEffect } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import { useTranslations, useLocale } from "next-intl";

export default function WarrantyPage() {
  const t = useTranslations("WarrantyPage");
  const locale = useLocale();

  useEffect(() => {
    // Path to the PDF in the public folder
    const pdfPath = '/Warranty-Card_Indowud.pdf';

    try {
      // Attempt to open the PDF in a new tab
      const newWindow = window.open(pdfPath, '_blank');

      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // If popup is blocked or failed to open, try the fallback method
        const link = document.createElement('a');
        link.href = pdfPath;
        link.target = '_blank';
        link.click();
        // Popup blocked - using fallback method
      }
      // PDF opened successfully
    } catch {
      // Handle error silently with user feedback
      alert(t("error"));
    }

    // Redirect back to home page after opening PDF (with longer delay)
    setTimeout(() => {
      window.location.href = `/${locale}`;
    }, 3000);  // Increased timeout to ensure PDF opens first

  }, [t, locale]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl mb-8 self-start">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{t("title")}</h1>
        {/* Breadcrumb */}
        <div className="mt-3">
          <Breadcrumb
            items={[
              { label: "HOME", href: `/${locale}` },
              { label: t("breadcrumb") },
            ]}
          />
        </div>
      </div>

      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
        <p className="text-gray-600">{t("opening")}</p>
        <p className="text-sm text-gray-500 mt-2">{t("popupBlocked")}</p>
      </div>
    </div>
  );
}
