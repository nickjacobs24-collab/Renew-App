"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function EnergyVitaminB({ onClose }) {
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before using portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Close modal with ESC key
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const modalContent = (
    // Full screen overlay with blur
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Blur background */}
      <div 
        className="fixed inset-0" 
        style={{ 
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255, 255, 255, 0.4)' // slight white tint for better blur visibility
        }}
        onClick={onClose}
      />
      
      {/* Center the modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Modal content */}
        <div
          className="relative bg-white rounded-2xl shadow-2xl ring-1 ring-gray-200
                     w-full max-w-4xl px-8 md:px-12 py-12 md:py-16 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center
                       rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <p className="text-xs font-semibold tracking-wider uppercase tracking-widest text-sm font-medium text-black text-center mb-2">
            ENERGY ESSENTIALS
          </p>

          <p className="text-2xl md:text-3xl font-bold leading-snug text-center text-black max-w-2xl mx-auto mb-4">
          <span className="bg-gradient-to-r text-3xl md:text-4xl  from-orange-700 to-orange-500 bg-clip-text text-transparent">
            Helps your body turn food into energy
            </span>
            <span className="bg-gradient-to-r  from-orange-700 to-orange-500 bg-clip-text text-transparent">
            </span>
          </p>

<p className="mt-3 text-lg md:text-xl text-gray-700 text-center leading-relaxed max-w-2xl mx-auto">
Your body can’t store B vitamins well. They get used up quickly, leaving you tired without realising why. 
</p>
<p className="mt-3 text-lg md:text-xl text-gray-700 text-center leading-relaxed max-w-2xl mx-auto">
Raising your levels increases your energy so you feel energised all day.
</p>
<br></br>


          {/* Info grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 rounded-lg p-5">
              <p className="text-sm font-semibold text-gray-900 mb-2">Benefits</p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>• Fewer energy dips</li>
                <li>• Higher daily energy</li>
                <li>• Stay mentally sharp</li>
              </ul>
            </div>



            <div className="bg-gray-50 rounded-lg p-5">
              <p className="text-sm font-semibold text-gray-900 mb-2">Timeline</p>
             <ul className="text-sm text-gray-700 space-y-1.5">
                <li>• Boost in about a week</li>
                <li>• Strong results with daily use</li>
              </ul>
            </div>


            <div className="bg-gray-50 rounded-lg p-5">
              <p className="text-sm font-semibold text-gray-900 mb-2">Safety</p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>• Safe and well studied</li>
              </ul>
            </div>
          </div>

          {/* Retail pills */}
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-sm font-semibold italic tracking-wide text-gray-500 text-center mb-4">
              Take me there.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://www.hollandandbarrett.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                <img src="/images/HBPILL.png" alt="Holland & Barrett" width="80" height="50" />
              </a>
              <a href="https://www.iherb.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                <img src="/images/iherbpill.png" alt="iHerb" width="80" height="50" />
              </a>
              <a href="https://healf.com/en-uk/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                <img src="/images/healfpill.png" alt="Healf" width="80" height="50" />
              </a>
              <a href="https://www.thorne.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                <img src="/images/thornepill.png" alt="Thorne" width="80" height="50" />
              </a>
              <a href="https://www.amazon.co.uk/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                <img src="/images/amazonpill.png" alt="Amazon UK" width="80" height="50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Use portal to render modal at document body level
  return mounted ? createPortal(modalContent, document.body) : null;
}