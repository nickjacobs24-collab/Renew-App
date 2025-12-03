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
};

export default function AccountPage() {
  const router = useRouter();
  const { savedSupplements, removeSupplement, isLoaded } = useSavedSupplements();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - 3-part layout: Logo left, Title center, Back right */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto grid grid-cols-3 items-center">
          {/* Left - Logo */}
          <div className="flex items-center">
            <Image
              src="/images/renew-logo-black.png"
              alt="Renew logo"
              width={90}
              height={30}
              className="object-contain"
              priority
            />
          </div>
          
          {/* Center - Page title */}
          <div className="flex justify-center">
            <h1 className="text-lg font-semibold text-gray-900">My Account</h1>
          </div>
          
          {/* Right - Back button */}
          <div className="flex justify-end">
            <button
              onClick={() => router.push('/results')}
              className="flex items-center text-gray-500 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span className="text-sm font-medium">Back</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main content - 2-column equal grid */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left column - Saved supplements as single card */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Card header */}
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-base font-semibold text-gray-900">Your saved supplements</h2>
                <p className="text-sm text-gray-500 mt-0.5">Your personalised shortlist with guidance and tips</p>
              </div>

              {/* Loading state */}
              {!isLoaded && (
                <div className="px-6 py-8 text-center text-gray-500">
                  Loading...
                </div>
              )}

              {/* Empty state */}
              {isLoaded && savedSupplements.length === 0 && (
                <div className="px-6 py-10 text-center">
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-medium mb-1">No supplements saved yet</p>
                  <p className="text-gray-500 text-sm mb-5">Save supplements from your results to see them here.</p>
                  <button
                    onClick={() => router.push('/results')}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Browse supplements
                  </button>
                </div>
              )}

              {/* Supplements list - inside single card */}
              {isLoaded && savedSupplements.length > 0 && (
                <ul className="divide-y divide-gray-100">
                  {savedSupplements.map((id) => {
                    const supplement = SUPPLEMENT_DATA[id];
                    if (!supplement) return null;
                    
                    return (
                      <li key={id} className="px-6 py-5">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            {/* Name and category */}
                            <div className="flex items-baseline gap-2 mb-1">
                              <p className="font-semibold text-gray-900">{supplement.name}</p>
                              <span className="text-sm text-gray-400">{supplement.category}</span>
                            </div>
                            
                            {/* Headline */}
                            <p className="text-gray-700 mb-2">{supplement.headline}</p>
                            
                            {/* Tip */}
                            <p className="text-sm text-gray-500">
                              <span className="font-medium text-gray-600">Tip:</span> {supplement.tip}
                            </p>
                          </div>
                          
                          {/* Remove button */}
                          <button
                            onClick={() => removeSupplement(id)}
                            className="ml-4 text-sm font-medium text-gray-400 hover:text-red-600 transition-colors flex-shrink-0"
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

          {/* Right column - App CTA (content coming tomorrow) */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Card header */}
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-base font-semibold text-gray-900">Renew App</h2>
              </div>
              
              {/* Placeholder content */}
              <div className="px-6 py-10 text-center">
                <p className="text-sm text-gray-400">App CTA content coming tomorrow</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}