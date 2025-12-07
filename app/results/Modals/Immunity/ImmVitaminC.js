"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SaveButton from "@/components/SaveButton";

export default function VitaminC({ onClose }) {
const [mounted, setMounted] = useState(false);
const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="fixed inset-0" 
        style={{ 
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
        onClick={onClose}
      />
      
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="relative rounded-2xl w-full px-6 md:px-24 py-8 md:py-10 z-10"
          style={{
            maxWidth: '1350px',
            boxShadow: '0 0 70px -10px rgba(15, 60, 160, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-4 right-4 flex items-center gap-1">
            <SaveButton id="imm-vitaminc" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="h-10 w-10 flex items-center justify-center
                         rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>


          <p className="text-xs font-semibold tracking-wider uppercase text-center pt-12" style={{ color: '#000000', marginBottom: '6px' }}>
            IMMUNITY ESSENTIALS
          </p>

          <p className="text-3xl md:text-4xl font-bold leading-snug text-center max-w-3xl mx-auto" style={{ marginBottom: '14px' }}>
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">
              Keeps your immune system ready
            </span>
          </p>

          <div className="mx-auto text-left md:text-center text-lg md:text-xl" style={{ lineHeight: '1.7', marginBottom: '36px' }}>
            <span style={{ fontWeight: 600, color: '#1F2937' }}>
              Vitamin C gets used up quickly, especially when you're stressed or tired.
            </span>
            <div className="h-2 md:h-0" />
            <span className="text-base md:text-lg" style={{ fontWeight: 400, color: '#4B5563' }}>
              Daily top-ups keep your defenses strong so you stay healthy and bounce back faster.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: '30px' }}>
            <div className="rounded-xl p-4" style={{ backgroundColor: '#FAFAFA' }}>
              <p className="text-sm font-semibold text-gray-900 mb-2">Benefits</p>
              <ul className="text-sm space-y-1.5" style={{ fontWeight: 400, color: '#4B5563' }}>
                <li>• Supports immune resilience</li>
                <li>• Reduces impact of everyday sickness</li>
                <li>• Aids recovery after illness or stress</li>
              </ul>
            </div>

            <div className="rounded-xl p-4" style={{ backgroundColor: '#FAFAFA' }}>
              <p className="text-sm font-semibold text-gray-900 mb-2">Timeline</p>
              <ul className="text-sm space-y-1.5" style={{ fontWeight: 400, color: '#4B5563' }}>
                <li>• Effects within days</li>
                <li>• Strong results with daily use</li>
              </ul>
            </div>

            <div className="rounded-xl p-4" style={{ backgroundColor: '#FAFAFA' }}>
              <p className="text-sm font-semibold text-gray-900 mb-2">Safety</p>
              <ul className="text-sm space-y-1.5" style={{ fontWeight: 400, color: '#4B5563' }}>
                <li>• Generally well-tolerated</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '26px' }}>
<div className="rounded-xl p-4 relative" style={{ backgroundColor: '#FAFAFA' }}>
  <p className="text-sm font-semibold text-gray-900 mb-2 text-left md:text-center">Trust</p>
  <p className="text-[15px] leading-relaxed text-left md:text-center" style={{ fontWeight: 400, color: '#4B5563' }}>
                <svg
                  className="inline-block w-4 h-4 mr-2 -mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: '#9CA3AF', opacity: 0.7 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                The most taken supplement on Earth — studied in thousands of trials and trusted for everyday health.
<span className="inline-block" style={{ marginLeft: '8px', top: '-6px', position: 'relative' }}>
  <span
    onClick={() => setShowTooltip(!showTooltip)}
    className="inline-flex items-center justify-center rounded-full text-white cursor-pointer transition-all duration-150 ease-out hover:scale-105"
    style={{ 
      width: '15px', 
      height: '15px',
      fontSize: '9px', 
      fontWeight: 600,
      fontStyle: 'italic',
      backgroundColor: '#111111',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
    }}
    aria-label="More information"
  >
    i
  </span>
  {showTooltip && (
    <span
      className="absolute text-white rounded-lg whitespace-normal"
      style={{
        width: '280px',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '8px 12px',
        backgroundColor: '#111111',
        fontSize: '13px',
        lineHeight: '1.35',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
      }}
    >
                    Vitamin C is one of the most widely used supplements globally and supports immune health (World Health Organization, 2023).
                  </span>
                    )}
                </span>
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-xl px-6 py-4" style={{ backgroundColor: '#FAFAFA' }}>
              <p className="text-sm text-center" style={{ fontWeight: 400, color: '#4B5563', marginBottom: '16px', paddingTop: '12px' }}>
                Take me there.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="https://www.hollandandbarrett.com/shop/vitamins-supplements/vitamins/vitamin-c/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                  <img src="/images/hbpill.png" alt="Holland & Barrett" width="80" height="50" />
                </a>
                <a href="https://uk.iherb.com/c/vitamin-c" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                  <img src="/images/iherbpill.png" alt="iHerb" width="80" height="50" />
                </a>
                <a href="https://healf.com/en-uk/collections/vitamin-c" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                  <img src="/images/healfpill.png" alt="Healf" width="80" height="50" />
                </a>
                <a href="https://www.amazon.co.uk/s?k=vitamin+c" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                  <img src="/images/amazonpill.png" alt="Amazon UK" width="80" height="50" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return mounted ? createPortal(modalContent, document.body) : null;
}