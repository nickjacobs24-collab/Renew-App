"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SaveButton from "@/components/SaveButton";

export default function DigestiveEnzymes({ onClose }) {
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
            maxWidth: '1380px',
            boxShadow: '0 0 70px -10px rgba(15, 60, 160, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-4 right-4 flex items-center gap-1">
            <SaveButton id="guthealth-digestiveenzymes" />
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
            WELLNESS ESSENTIALS
          </p>

          <p className="text-3xl md:text-4xl font-bold leading-snug text-center max-w-3xl mx-auto" style={{ marginBottom: '20px' }}>
            <span className="bg-gradient-to-r from-orange-900 via-amber-800 to-orange-700 bg-clip-text text-transparent">
              Helps your body break down food
            </span>
          </p>

          <div className="mx-auto text-center text-lg md:text-xl" style={{ maxWidth: '900px', lineHeight: '1.7', marginBottom: '36px' }}>
            <span style={{ fontWeight: 600, color: '#1F2937' }}>
              Your body naturally makes enzymes to turn food into nutrients it can use.
            </span>
            <br />
            <span style={{ fontWeight: 400, color: '#4B5563' }}>
              Sometimes it needs a little extra help. Digestive enzymes give that gentle support — helping you feel lighter and more comfortable after eating.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: '30px' }}>
            <div className="rounded-xl p-4" style={{ backgroundColor: '#FAFAFA' }}>
              <p className="text-sm font-semibold text-gray-900 mb-2">Benefits</p>
              <ul className="text-sm space-y-1.5" style={{ fontWeight: 400, color: '#4B5563' }}>
                <li>• Reduces bloating and post-meal heaviness</li>
                <li>• Helps your body absorb more nutrients from food</li>
                <li>• Supports smoother, more comfortable digestion</li>
              </ul>
            </div>

            <div className="rounded-xl p-4" style={{ backgroundColor: '#FAFAFA' }}>
              <p className="text-sm font-semibold text-gray-900 mb-2">Timeline</p>
              <ul className="text-sm space-y-1.5" style={{ fontWeight: 400, color: '#4B5563' }}>
                <li>• Most people notice improvements within 1–2 weeks</li>
                <li>• Works best with consistent use alongside meals</li>
              </ul>
            </div>

            <div className="rounded-xl p-4" style={{ backgroundColor: '#FAFAFA' }}>
              <p className="text-sm font-semibold text-gray-900 mb-2">Safety</p>
              <ul className="text-sm space-y-1.5" style={{ fontWeight: 400, color: '#4B5563' }}>
                <li>• Well-tolerated when taken with food</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '26px' }}>
            <div className="rounded-xl px-6 py-3 relative" style={{ backgroundColor: '#FAFAFA' }}>
              <p className="text-[15px] leading-relaxed text-center" style={{ fontWeight: 400, color: '#4B5563' }}>
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
                Widely used for digestive support — researched and documented for decades.
                <span className="inline-block group" style={{ marginLeft: '8px', top: '-6px', position: 'relative' }}>
                  <span
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
                  <span
                    className="absolute text-white rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity ease-out whitespace-normal"
                    style={{
                      width: '350px',
                      bottom: '32px',
                      left: '0',
                      padding: '6px 8px',
                      backgroundColor: '#111111',
                      fontSize: '13px',
                      lineHeight: '1.35',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
                      transitionDuration: '150ms'
                    }}
                  >
                  Digestive enzymes are well-tolerated and can help reduce common digestive symptoms such as gas and bloating. (Cleveland Clinic).
                  </span>
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
                <a href="https://www.hollandandbarrett.com/shop/vitamins-supplements/condition/digestive-health/digestive-enzymes" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                  <img src="/images/hbpill.png" alt="Holland & Barrett" width="80" height="50" />
                </a>
                <a href="https://uk.iherb.com/c/digestive-enzymes" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                  <img src="/images/iherbpill.png" alt="iHerb" width="80" height="50" />
                </a>
                <a href="https://healf.com/collections/digestive-enzymes" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
                  <img src="/images/healfpill.png" alt="Healf" width="80" height="50" />
                </a>
                <a href="https://www.amazon.co.uk/s?k=digestive+enzymes" target="_blank" rel="noreferrer" className="transition-transform hover:scale-105">
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