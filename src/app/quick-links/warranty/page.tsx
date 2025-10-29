"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function WarrantyPage() {
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
    } catch (error) {
      // Handle error silently with user feedback
      alert('Unable to open warranty document. Please check your browser settings.');
    }

    // Redirect back to home page after opening PDF (with longer delay)
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);  // Increased timeout to ensure PDF opens first

  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl mb-8 self-start">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Warranty</h1>
        {/* Breadcrumb */}
        <nav className="mt-3 text-xs md:text-sm tracking-widest text-gray-500 uppercase" aria-label="Breadcrumb">
          <ol className="flex items-center">
            <li>
              <Link href="/" className="hover:text-gray-700 transition-colors">
                HOME
              </Link>
            </li>
            <li aria-hidden="true" className="mx-1">/</li>
            <li>WARRANTY</li>
          </ol>
        </nav>
      </div>

      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Opening warranty document...</p>
        <p className="text-sm text-gray-500 mt-2">If the document doesn&apos;t open, please check your popup blocker settings.</p>
      </div>
    </div>
  );
}
