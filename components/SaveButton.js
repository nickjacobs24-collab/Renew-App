"use client";
import { useState } from "react";
import { useSavedSupplements } from "@/hooks/useSavedSupplements";

export default function SaveButton({ id }) {
  const { isSaved, toggleSave, isLoaded } = useSavedSupplements();
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const saved = isSaved(id);

  const handleClick = () => {
    toggleSave(id);
    
    // Show confirmation message briefly
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  // Don't render until localStorage is loaded (prevents hydration mismatch)
  if (!isLoaded) {
    return (
      <div className="h-10 px-3 flex items-center justify-center">
        <div className="w-16 h-5" />
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleClick}
        aria-label={saved ? "Remove from saved supplements" : "Save this supplement"}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          saved 
            ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" 
            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
        }`}
      >
        {saved ? (
          <>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span>Saved</span>
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span>Save</span>
          </>
        )}
      </button>
      
      {/* Confirmation tooltip */}
      {showConfirmation && (
        <div 
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap z-50"
          style={{
            backgroundColor: saved ? '#065f46' : '#374151',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          {saved ? "Added to your saved supplements" : "Removed from saved"}
        </div>
      )}
    </div>
  );
}