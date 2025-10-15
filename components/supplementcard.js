"use client"
import { useState } from 'react';
import { Lock } from 'lucide-react';

export default function SupplementCard({ supplement, data, isLocked, isPremiumActive, onUpgrade }) {
  const [expandedQuote, setExpandedQuote] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  if (!data) return null;

  const isLongQuote = data.expert_validation && data.expert_validation.length > 160;

  if (isLocked) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{supplement}</h3>
        <p className="text-gray-600 text-sm mb-4">{data.what_it_does}</p>
        <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <Lock className="w-5 h-5 text-gray-500 mx-auto mb-1" />
            <p className="text-xs text-gray-600">Premium details locked</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{supplement}</h3>
        <p className="text-gray-600 text-sm mb-3">{data.what_it_does}</p>
        
        <div className="mb-4 p-3 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-sm text-blue-900">
            <strong>Why we recommend this:</strong> {data.because_therefore}
          </p>
        </div>

        <div className="space-y-3 mb-4">
          <div className="text-sm text-gray-700">
            <span className="inline-block border border-gray-300 bg-white rounded-lg px-2 py-1 text-xs font-medium mr-2">
              Safety
            </span>
            {data.safety_protocol}
          </div>
          <p className="text-sm"><strong>Dosage:</strong> {data.dosage_range}</p>
        </div>

        {data.expert_validation && (
       <blockquote
  className={`border-l-4 border-blue-200 pl-3 mb-4 text-sm italic ${
    isExpandedQuote && isLongQuote ? &quot;line-clamp-3&quot; : &quot;&quot;
  }`}
>
  {data.expert_validation}
</blockquote>
        )}

        <div className="mt-4">
          {isPremiumActive ? (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-teal-600 hover:text-teal-800 font-medium"
            >
              {showDetails ? 'Hide details' : 'See details'}
            </button>
          ) : (
            <button
              onClick={onUpgrade}
              className="text-sm text-gray-600 hover:text-gray-800 font-medium"
            >
              Premium details
            </button>
          )}
        </div>

        {showDetails && isPremiumActive && (
          <div className="mt-4 space-y-3 p-4 bg-gray-50 rounded-xl">
            <div>
              <dt className="text-xs font-semibold text-gray-900 mb-1">Why this form?</dt>
              <dd className="text-sm text-gray-700">{data.form_recommendation}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-900 mb-1">Timing</dt>
              <dd className="text-sm text-gray-700">{data.timing_protocol}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-900 mb-1">Timeline</dt>
              <dd className="text-sm text-gray-700">{data.timeline}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-900 mb-1">Synergies</dt>
              <dd className="text-sm text-gray-700">{data.synergies}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-900 mb-1">Avoid</dt>
              <dd className="text-sm text-gray-700">{data.avoid_these}</dd>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}