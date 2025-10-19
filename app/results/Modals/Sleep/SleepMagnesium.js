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
          backgroundColor: 'rgba(255, 255, 255, 0.4)'
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
            SLEEP ESSENTIALS 
          </p>

          <p className="text-2xl md:text-3xl font-bold leading-snug text-center text-black max-w-2xl mx-auto mb-4">
            <span className="bg-gradient-to-r text-3xl md:text-4xl from-blue-900 via-blue-700 to-sky-500 bg-clip-text text-transparent"> 
              Helps your body and mind relax for sleep
            </span>
          </p>

          <p className="mt-3 text-lg md:text-xl text-gray-700 text-center leading-relaxed max-w-2xl mx-auto">
            Many people don't get enough magnesium for quality sleep. 
          </p>
          <p className="mt-3 text-lg md:text-xl text-gray-700 text-center leading-relaxed max-w-2xl mx-auto">
            This form works throughout your body and brain, helping you relax into deeper, better sleep.
          </p>
          <br />

          {/* Info grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-5">
              <p className="text-sm font-semibold text-gray-900 mb-2">Benefits</p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>• Relaxes body for deeper sleep</li>
                <li>• Promotes uninterrupted, restorative rest</li>
                <li>• Supports clearer mornings</li>
                <b><li>• Look for: Magnesium L-Threonate</li></b>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="text-sm font-semibold text-gray-900 mb-2">Timeline</p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>• First effects in 1–2 weeks</li>
                <li>• Strong results with daily use</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="text-sm font-semibold text-gray-900 mb-2">Safety</p>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>• Generally well-tolerated</li>
              </ul>
            </div>
          </div>

          {/* Trust Line */}
          <div className="mt-6 mb-6 px-6">
            <div className="bg-gray-100/50 rounded-2xl px-6 py-3 ring-1 ring-gray-200/40 shadow-sm">
              <div className="flex items-start gap-2 justify-center">
                <svg
                  className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-[15px] text-gray-700 font-medium leading-relaxed text-center max-w-md">
                  One of the most effective forms of magnesium for the mind — proven safe with excellent tolerability over decades.
                </p>
              </div>
            </div>
          </div>

          {/* Retail pills */}
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-sm font-semibold italic tracking-wide text-gray-500 text-center mb-4">
              Take me there.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://www.hollandandbarrett.com/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                <img src="/images/hbpill.png" alt="Holland & Barrett" width="80" height="50" />
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