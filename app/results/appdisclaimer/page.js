"use client";
import React from "react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-5 py-16">
        {/* HEADER */}
        <div className="text-center mb-20 pb-10 border-b border-gray-200/60">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
            Disclaimer & Legal
          </h1>
          <p className="text-xl md:text-2xl text-gray-500">
            Important information about using Renew
          </p>
        </div>

        {/* LAST UPDATED */}
        <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 md:p-8 rounded-2xl mb-12 border border-indigo-100 shadow-sm">
          <p className="text-base text-gray-600">
            <strong>Last updated:</strong> September 2025
          </p>
        </div>

        {/* INTRO */}
        <div className="mb-14">
          <p className="text-lg text-gray-700/90 mb-5 leading-relaxed">
            Please read this disclaimer carefully before using Renew. By
            accessing and using our platform, you acknowledge and agree to the
            terms outlined below.
          </p>
        </div>

        {/* EDUCATIONAL PURPOSE */}
        <div className="mb-14 bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            Educational Purpose Only
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700/90 mb-5 leading-relaxed">
            Renew provides information for educational purposes only. It is not
            medical advice and should not replace professional guidance.
          </p>
        </div>

        {/* MEDICAL GUIDANCE */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-10 rounded-3xl mb-14 border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 relative inline-block">
            Medical Guidance
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700/90 leading-relaxed">
            Always follow the instructions on your product’s label. If you have
            a medical condition, take prescription medication, are pregnant,
            breastfeeding, or under 18, please consult a qualified health
            professional before using supplements.
          </p>
        </div>

        {/* SAFETY */}
        <div className="mb-14 bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            Safety & Storage
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700/90 mb-5 leading-relaxed">
            Keep supplements in a cool, dry place, away from direct sunlight and
            out of reach of children. If you experience any adverse effects,
            discontinue use and seek professional guidance.
          </p>
        </div>

        {/* TRANSPARENCY */}
        <div className="mb-14 bg-gradient-to-br from-white via-indigo-50 to-purple-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            Transparency
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700/90 mb-5 leading-relaxed">
            Renew may earn a small commission from affiliate links. This never
            influences what we feature — our priority is to keep all
            recommendations evidence-based, transparent, and trustworthy.
          </p>
        </div>

        {/* CONTACT */}
        <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 p-10 md:p-12 rounded-3xl text-center mt-14 shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Questions?
          </h2>
          <p className="text-lg mb-6 text-gray-700/90">
            If you have any questions about this disclaimer:
          </p>
          <a
            href="mailto:nick.jacobs24@gmail.com"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white no-underline px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            nick.jacobs24@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
