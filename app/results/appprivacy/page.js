"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-5 py-16">
        {/* HEADER */}
        <div className="text-center mb-20 pb-10 border-b border-gray-200/60">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-500">
            Your privacy matters to us
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
            Renew values your privacy. This policy explains what information we
            collect, how we use it, and your rights under UK and EU data
            protection law.
          </p>
        </div>

        {/* INFORMATION WE COLLECT */}
        <div className="mb-14 bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            Information We Collect
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <ul className="space-y-3 text-lg text-gray-700/90 leading-relaxed">
            <li>
              <strong>Basic usage data:</strong> anonymous analytics (such as
              page views, clicks, or device type) to help us understand how
              people use Renew.
            </li>
            <li>
              <strong>Cookies:</strong> we use cookies for basic analytics and
              site functionality.
            </li>
            <li>
              <strong>Voluntary information:</strong> if you provide feedback
              through surveys or choose to share your email with us, we only
              collect that information with your consent.
            </li>
          </ul>
        </div>

        {/* HOW WE USE INFORMATION */}
        <div className="mb-14 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            How We Use Information
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <ul className="space-y-3 text-lg text-gray-700/90 leading-relaxed">
            <li>To improve Renew's design, content, and user experience.</li>
            <li>
              To communicate with you if you have chosen to share your email
              (for example, to follow up on feedback or notify you about
              updates).
            </li>
            <li>We do not sell your data to third parties.</li>
          </ul>
        </div>

        {/* AFFILIATE LINKS */}
        <div className="mb-14 bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            Affiliate Links
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700/90 leading-relaxed">
            When you visit affiliate sites through our links, those retailers
            may collect their own data in line with their privacy policies. Renew
            does not control how third-party sites use data.
          </p>
        </div>

        {/* DATA STORAGE & RETENTION */}
        <div className="mb-14 bg-gradient-to-br from-white via-indigo-50 to-purple-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            Data Storage & Retention
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <ul className="space-y-3 text-lg text-gray-700/90 leading-relaxed">
            <li>Personal information is stored securely with limited access.</li>
            <li>
              We retain data only as long as necessary to provide our service and
              meet legal obligations.
            </li>
            <li>If you request, we will delete your personal data.</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-10 rounded-3xl mb-14 border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 relative inline-block">
            Security
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700/90 leading-relaxed">
            We take reasonable steps to protect your data, including secure
            storage, restricted access, and encryption where appropriate.
          </p>
        </div>

        {/* YOUR RIGHTS */}
        <div className="mb-14 bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            Your Rights
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700/90 mb-5 leading-relaxed">
            Under data protection law, you have the right to:
          </p>
          <ul className="space-y-3 text-lg text-gray-700/90 leading-relaxed">
            <li>Request a copy of the data we hold about you.</li>
            <li>Ask us to correct or delete your personal data.</li>
            <li>
              Withdraw consent for us to use your information at any time.
            </li>
          </ul>
        </div>

        {/* UPDATES */}
        <div className="mb-14 bg-gradient-to-br from-white via-indigo-50 to-purple-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900 relative inline-block">
            Updates
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700/90 leading-relaxed">
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated revision date.
          </p>
        </div>

        {/* CONTACT */}
        <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 p-10 md:p-12 rounded-3xl text-center mt-14 shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Contact
          </h2>
          <p className="text-lg mb-6 text-gray-700/90">
            For any privacy questions or to exercise your rights:
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
