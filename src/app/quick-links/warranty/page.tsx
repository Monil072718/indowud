"use client";

import { useEffect } from "react";

export default function WarrantyPage() {
  useEffect(() => {
    // Open the warranty PDF directly
    const pdfPath = '/Warranty-Card_Indowud.pdf';
    
    try {
      const newWindow = window.open(pdfPath, '_blank');
      if (!newWindow) {
        // If popup was blocked, try alternative method
        const link = document.createElement('a');
        link.href = pdfPath;
        link.target = '_blank';
        link.click();
      }
    } catch (error) {
      console.error('Failed to open PDF:', error);
      alert('Unable to open warranty document. Please check your browser settings.');
    }
    
    // Redirect back to home page after opening PDF
    setTimeout(() => {
      window.location.href = '/';
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Opening warranty document...</p>
        <p className="text-sm text-gray-500 mt-2">If the document doesn't open, please check your popup blocker settings.</p>
      </div>
    </div>
  );
}
