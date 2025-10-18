"use client";
import React from "react";

export default function HowRenewDecides() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-5 py-16">
        {/* HEADER */}
        <div className="text-center mb-20 pb-10 border-b border-gray-200/60">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
            How Renew Decides
          </h1>
          <p className="text-xl md:text-2xl text-gray-500">
            Renew doesn't tell you what to take. We show you what's proven, explain why it matters, and let you decide.
          </p>
        </div>

        {/* INTRO */}
        <div className="mb-14">
          <p className="text-lg text-gray-700/90 mb-5 leading-relaxed">
            We believe intelligence should be structured, explainable, and human.
            That's how trust is earned.
          </p>
        </div>

        {/* OUR PRINCIPLES */}
        <div className="mb-14 bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            Our Principles
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-lg text-gray-700/90 leading-relaxed">
                Nothing we show can harm — only help. Every ingredient is chosen for safety, tolerance, and long-term suitability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Evidence Over Hype</h3>
              <p className="text-lg text-gray-700/90 leading-relaxed">
                Only ingredients backed by rigorous human studies make it in. No fads, no fillers — just compounds proven to work over time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert-Led Logic</h3>
              <p className="text-lg text-gray-700/90 leading-relaxed">
                Inspired by leading voices in science and wellness, and research from institutions like Harvard and the Mayo Clinic.
              </p>
            </div>
          </div>
        </div>

        {/* HOW WE CHOOSE */}
        <div className="mb-14 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            How We Choose
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700/90 mb-5 leading-relaxed">
            Every supplement passes three filters:
          </p>
          <ul className="space-y-3 text-lg text-gray-700/90 leading-relaxed">
            <li>
              <strong>Proven over time</strong> — supported by decades of human research.
            </li>
            <li>
              <strong>Expert consensus</strong> — aligned with guidance from credible specialists.
            </li>
            <li>
              <strong>Real-world results</strong> — safe and effective in everyday use.
            </li>
          </ul>
        </div>

        {/* OUR ROLE */}
        <div className="mb-14 bg-gradient-to-br from-white via-indigo-50 to-purple-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            Our Role
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700/90 mb-4 leading-relaxed">
            We don't sell supplements.
          </p>
          <p className="text-lg text-gray-700/90 leading-relaxed">
            We organize what's proven — clearly, safely, and without bias — so you can decide with confidence.
          </p>
        </div>

        {/* FOOTER TAGLINE */}
        <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 p-10 md:p-12 rounded-3xl text-center mt-14 shadow-md">
          <p className="text-2xl md:text-3xl font-semibold text-gray-900">
            Clear answers. Real research. Your choice.
          </p>
        </div>
      </div>
    </div>
  );
}