"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useSavedSupplements } from "@/hooks/useSavedSupplements";

// Supplement ID to display data mapping
const SUPPLEMENT_DATA = {
  "calm-glycine": { 
    name: "Glycine", 
    category: "Calm",
    headline: "Helps ease stress",
    tip: "Great any time of day — especially useful before bed if stress keeps your mind active"
  },
  "calm-ltheanine": { 
    name: "L-Theanine", 
    category: "Calm",
    headline: "Calms your mind without drowsiness",
    tip: "Pairs especially well with caffeine — smooth focus without jitters"
  },
  "calm-magnesium": { 
    name: "Magnesium", 
    category: "Calm",
    headline: "Supports muscle relaxation",
    tip: "Evening works best — calming effects support both relaxation and sleep depth"
  },
  "energy-creatine": { 
    name: "Creatine", 
    category: "Energy",
    headline: "Supports steady energy levels",
    tip: "Daily consistency matters most — missing days reduces its benefits faster than you'd think"
  },
  "energy-omega3": { 
    name: "Omega-3", 
    category: "Energy",
    headline: "Helps your mind stay focused",
    tip: "Take with your biggest meal — absorption can be 3× higher with dietary fat"
  },
  "energy-vitaminb": { 
    name: "Vitamin B", 
    category: "Energy",
    headline: "Turns food into energy",
    tip: "Take in the morning — B vitamins can improve daytime energy and sleep quality is better when not taken late"
  },
  "guthealth-digestiveenzymes": { 
    name: "Digestive Enzymes", 
    category: "Gut Health",
    headline: "Eases bloating and supports digestion",
    tip: "Take at the start of meals — enzymes work best when they're already present as food arrives"
  },
  "guthealth-prebioticsfibre": { 
    name: "Fibre", 
    category: "Gut Health",
    headline: "Helps keep you regular",
    tip: "Increase slowly — going too fast can cause bloating or discomfort"
  },
  "guthealth-probiotics": { 
    name: "Probiotics", 
    category: "Gut Health",
    headline: "Helps keep your gut in balance",
    tip: "Consistency matters — same time daily helps healthy bacteria take hold"
  },
  "imm-vitaminc": { 
    name: "Vitamin C", 
    category: "Immunity",
    headline: "Maintains immune defences",
    tip: "Smaller doses across the day absorb better than one big hit"
  },
  "imm-vitamind": { 
    name: "Vitamin D", 
    category: "Immunity",
    headline: "Helps build immune defences",
    tip: "Take with a fatty meal — absorption improves significantly"
  },
  "imm-zinc": { 
    name: "Zinc", 
    category: "Immunity",
    headline: "Helps you recover when unwell",
    tip: "Always take with food — zinc can cause stomach nausea when taken on its own"
  },
  "sleep-glycine": { 
    name: "Glycine", 
    category: "Sleep",
    headline: "Supports deeper, more restful sleep",
    tip: "Take 30–60 minutes before bed — helps lower core body temperature for deeper sleep"
  },
  "sleep-ltheanine": { 
    name: "L-Theanine", 
    category: "Sleep",
    headline: "Calms the mind before sleep",
    tip: "Pairs well with magnesium — the combo supports both mind and body relaxation"
  },
  "sleep-magnesium": { 
    name: "Magnesium", 
    category: "Sleep",
    headline: "Helps you fall asleep faster",
    tip: "Take 30–60 minutes before bed — aligns with its natural calming effects"
  },
  "essentials-omega3": { 
    name: "Omega-3", 
    category: "Essentials",
    headline: "Supports heart and brain health",
    tip: "Take with your biggest meal — absorption can be 3× higher with dietary fat"
  },
  "essentials-vitamind": { 
    name: "Vitamin D", 
    category: "Essentials",
    headline: "Supports immunity, mood, and bone health",
    tip: "Take with a fatty meal — absorption improves significantly"
  },
  "essentials-vitaminb": { 
    name: "Vitamin B", 
    category: "Essentials",
    headline: "Turns food into energy",
    tip: "Take in the morning — B vitamins can improve daytime energy and sleep quality is better when not taken late"
  },
  "essentials-magnesium": { 
    name: "Magnesium", 
    category: "Essentials",
    headline: "Supports sleep, calm, and recovery",
    tip: "Evening works best — calming effects support both relaxation and sleep depth"
  },
};

export default function AccountPage() {
  const router = useRouter();
  const { savedSupplements, removeSupplement, isLoaded } = useSavedSupplements();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - edge-to-edge like landing page */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/30 shadow-lg shadow-gray-300/40 sticky top-0 z-50">
        <div className="flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          {/* Logo - far left */}
          <div className="flex items-center">
            <Image
              src="/images/renew-logo-black.png"
              alt="Renew logo"
              width={80}
              height={32}
              className="object-contain md:w-[100px] md:h-[40px]"
              priority
            />
          </div>
          
{/* Right side - My Account label only */}
<span className="text-lg font-semibold text-gray-900">My Account</span>
        </div>
      </header>

     
{/* Main content */}
<main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
    
{/* Left column - App CTA (3/5 = 60%) - PRIMARY */}
<div className="lg:col-span-3">
<div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-visible h-full">
    <div className="px-8 py-8 flex flex-col items-center">
      
{/* Hero image with stacked card effect */}
<div className="relative mb-8" style={{ width: '360px', height: '220px' }}>
  {/* Back card - furthest, peeks out left and right */}
  <div 
    className="absolute rounded-2xl bg-white"
    style={{ 
      width: '400px', 
      height: '150px', 
      top: '29px', 
      left: '50%', 
      transform: 'translateX(-50%)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      zIndex: 1
    }}
  />
  {/* Middle card */}
  <div 
    className="absolute rounded-2xl bg-white"
    style={{ 
      width: '340px', 
      height: '180px', 
      top: '14px', 
      left: '50%', 
      transform: 'translateX(-50%)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      zIndex: 2
    }}
  />
  {/* Main image - front */}
  <div 
    className="absolute rounded-2xl overflow-hidden"
    style={{ 
      width: '280px', 
      height: '208px', 
      top: '0', 
      left: '50%',
      transform: 'translateX(-50%)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
      zIndex: 3
    }}
  >
    <Image
      src="/images/accountpage-pill.jpg"
      alt="Renew app"
      width={280}
      height={208}
      className="object-cover w-full h-full"
    />
  </div>
</div>
      
      {/* Headline - centered */}
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Get the app today
      </h2>
      
      {/* Benefits list - left-aligned within centered block, wider margins */}
      <div className="space-y-4 mb-8 w-full max-w-xl">
        
        {/* Benefit 1 */}
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Build your routine</p>
            <p className="text-base text-gray-500">Get reminders and timing advice so you always know when to take what.</p>
          </div>
        </div>
        
        {/* Benefit 2 */}
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Know what to expect</p>
            <p className="text-base text-gray-500">Week-by-week guidance so you're never left guessing if it's working.</p>
          </div>
        </div>
        
        {/* Benefit 3 */}
        <div className="flex items-start gap-3">
         <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Track how you feel</p>
            <p className="text-base text-gray-500">Simple check-ins that build your confidence over time.</p>
          </div>
        </div>
        
{/* Benefit 4 */}
<div className="flex items-start gap-3">
  <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <div>
    <p className="text-lg font-semibold text-gray-900">See the evidence</p>
    <p className="text-base text-gray-500">Use your wearable data or daily check-ins to see real progress over time.</p>
  </div>
</div>
        
      </div>
      
      {/* CTA Button - black */}
      <button
        onClick={() => router.push('/waitlist')}
        className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-colors"
      >
        Pre-register for the app
      </button>
      
    </div>
  </div>
</div>

{/* Right column - Saved supplements (2/5 = 40%) - SECONDARY */}
<div className="lg:col-span-2">
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-full">
    {/* Card header */}
    <div 
      className="px-8 pt-8 pb-6"
      style={{ borderBottom: '1px solid #E5E7EB' }}
    >
      <h2 className="text-2xl font-bold text-gray-900">Your Saved Supplements</h2>
      <p className="text-gray-500 mt-2">Your personalised shortlist</p>
    </div>

    {/* Loading state */}
    {!isLoaded && (
      <div className="px-8 py-12 text-center text-gray-500">
        Loading...
      </div>
    )}

{/* Empty state */}
{isLoaded && savedSupplements.length === 0 && (
  <div className="px-8 py-12 text-center">
    <p className="text-gray-500">No supplements saved yet.</p>
  </div>
)}

    {/* Supplements list */}
    {isLoaded && savedSupplements.length > 0 && (
      <ul className="divide-y divide-gray-100">
        {savedSupplements.map((id) => {
          const supplement = SUPPLEMENT_DATA[id];
          if (!supplement) return null;
          
          return (
            <li key={id} className="px-8 py-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <p className="font-semibold text-gray-900">{supplement.name}</p>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{supplement.category}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{supplement.headline}</p>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold text-gray-600">Tip:</span> {supplement.tip}
                  </p>
                </div>
                <button
                  onClick={() => removeSupplement(id)}
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors flex-shrink-0"
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    )}
  </div>
</div>

  </div>
</main>

    </div>
  );
}