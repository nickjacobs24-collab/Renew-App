"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SaveButton from "@/components/SaveButton";

export default function Omega3({ onClose }) {
const [mounted, setMounted] = useState(false);
const [showTooltip, setShowTooltip] = useState(false);
const [showWhatToLook, setShowWhatToLook] = useState(false);

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
            <SaveButton id="energy-omega3" />
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
            ENERGY & FOCUS ESSENTIALS
          </p>

          <p className="text-3xl md:text-4xl font-bold leading-snug text-center max-w-3xl mx-auto" style={{ marginBottom: '14px' }}>
            <span className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
              Keeps your mind clear and focused
            </span>
          </p>

          <div className="mx-auto text-left md:text-center text-lg md:text-xl" style={{ lineHeight: '1.7', marginBottom: '36px' }}>
            <span style={{ fontWeight: 600, color: '#1F2937' }}>
              Your brain needs omega-3 to stay healthy, focused, and clear.
            </span>
            <div className="h-2 md:h-0" />
            <span className="text-base md:text-lg" style={{ fontWeight: 400, color: '#4B5563' }}>
              But your body can't make it, and most diets don't provide enough. Daily omega-3 gives your mind what it needs to think clearly and remember better.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: '30px' }}>
            <div className="rounded-xl p-4" style={{ backgroundColor: '#FAFAFA' }}>
              <p className="text-sm font-semibold text-gray-900 mb-2">Benefits</p>
              <ul className="text-sm space-y-1.5" style={{ fontWeight: 400, color: '#4B5563' }}>
                <li>• Improves focus</li>
                <li>• Supports memory</li>
                <li>• Promotes long-term brain health</li>
              </ul>
            </div>

            <div className="rounded-xl p-4" style={{ backgroundColor: '#FAFAFA' }}>
              <p className="text-sm font-semibold text-gray-900 mb-2">Timeline</p>
              <ul className="text-sm space-y-1.5" style={{ fontWeight: 400, color: '#4B5563' }}>
                <li>• Builds gradually over weeks</li>
                <li>• Strong results with steady use</li>
              </ul>
            </div>

            <div className="rounded-xl p-4" style={{ backgroundColor: '#FAFAFA' }}>
              <p className="text-sm font-semibold text-gray-900 mb-2">Safety</p>
              <ul className="text-sm space-y-1.5" style={{ fontWeight: 400, color: '#4B5563' }}>
                <li>• Safe and well studied</li>
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
                One of the most widely taken supplements worldwide — trusted by millions for over 60 years.
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
      left: '0%',
      padding: '8px 12px',
      backgroundColor: '#111111',
      fontSize: '13px',
      lineHeight: '1.35',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
    }}
  >
                    Omega-3 is among the top five most commonly used supplements globally and supports brain health (World Health Organisation, 2022–23).
                  </span>
                    )}
                </span>
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-xl px-6 py-4" style={{ backgroundColor: '#FAFAFA' }}>
              <div className="flex items-center justify-center" style={{ marginBottom: '16px' }}>
                <p style={{ color: '#4B5563', fontSize: '15px', fontWeight: 400 }}>Take me there.</p>
<div className="relative" style={{ marginLeft: '4px' }}>
  <p 
    className="flex items-center cursor-pointer"
    onClick={() => setShowWhatToLook(!showWhatToLook)}
    style={{ color: '#0284C7', fontSize: '15px', fontWeight: 400, gap: '2px', opacity: 0.9, transition: 'opacity 0.15s ease' }}
  >
    What to look for
    <svg className="transition-transform" style={{ width: '13px', height: '13px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
    </svg>
  </p>
  {showWhatToLook && (
    <span 
      className="absolute left-1/2 bottom-full bg-white rounded-xl px-4 py-2 shadow-md text-center"
      style={{ 
        transform: 'translateX(-50%)',
        marginBottom: '8px',
        border: '1px solid #E5E7EB',
        fontSize: '13px',
        color: '#4B5563',
        fontWeight: 400,
        zIndex: 50,
        width: '300px',
        whiteSpace: 'normal'
      }}
    >
                    Omega-3 (EPA & DHA) — your body absorbs these forms easily so you get real results.
                  </span>
                    )}
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="https://www.hollandandbarrett.com/shop/vitamins-supplements/supplements/omega-fish-oils/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                  <img src="/images/hbpill.png" alt="Holland & Barrett" width="80" height="50" />
                </a>
                <a href="https://uk.iherb.com/c/omega-3-fish-oil" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                  <img src="/images/iherbpill.png" alt="iHerb" width="80" height="50" />
                </a>
                <a href="https://healf.com/en-uk/collections/omega-3" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                  <img src="/images/healfpill.png" alt="Healf" width="80" height="50" />
                </a>
                <a href="https://www.amazon.co.uk/s?k=omega+3" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
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