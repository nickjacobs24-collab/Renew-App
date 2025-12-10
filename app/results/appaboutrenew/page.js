"use client";
import React from "react";
import Image from "next/image";

export default function AboutRenew() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFBF7' }}>
      
      {/* HERO SECTION */}
      <div className="max-w-5xl mx-auto px-8 pt-24 pb-16">
        <h1 className="font-bold tracking-tight text-gray-900 mb-5" style={{ fontSize: '42px', lineHeight: '1.15' }}>
          About Renew
        </h1>
        <p className="text-gray-500 leading-relaxed max-w-3xl" style={{ fontSize: '18px', lineHeight: '1.7' }}>
          Health advice should be honest. Most of it isn't. Supplements can be one of the simplest ways to support your health — but the industry has made them confusing, commercial, and hard to trust.
        </p>
      </div>

      {/* OPTIONAL IMAGE SLOT 1 */}
      {/* 
      <div className="w-full h-[350px] relative">
        <Image
          src="/images/about-hero.jpg"
          alt="Natural wellness"
          fill
          className="object-cover"
        />
      </div>
      */}

      {/* WHY RENEW EXISTS */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="font-bold tracking-tight text-gray-900 mb-6" style={{ fontSize: '28px' }}>
          Why Renew Exists
        </h2>
        <div className="max-w-4xl space-y-5" style={{ fontSize: '16px', lineHeight: '1.8' }}>
          <p className="text-gray-700">
            The supplement world isn't working as it should. <span className="text-gray-500">Marketing is often prioritised over evidence. Brands promote what sells, not what works. And most advice comes from someone trying to make money — not someone trying to help you stay healthy.</span>
          </p>
          <p className="text-gray-700">
            When money's involved, transparency and truth often come second. <span className="font-medium text-gray-900">Renew was created to be a counterweight.</span>
          </p>
          <p className="text-gray-500">
            We give you guidance that isn't influenced by sales, sponsorships, or commissions — just clear, human, evidence-led information you can trust. No motive to sell. Only to inform.
          </p>
          <p className="text-gray-700">
            We believe something simple: <span className="text-gray-900">you are the only person who can truly know what's right for your health.</span> <span className="text-gray-500">Our job is to give you the information and clarity you need to make those decisions with confidence.</span>
          </p>
        </div>
      </div>

      {/* OPTIONAL IMAGE SLOT 2 */}
      {/* 
      <div className="w-full h-[300px] relative my-8">
        <Image
          src="/images/about-nature.jpg"
          alt="Calm and clarity"
          fill
          className="object-cover"
        />
      </div>
      */}

      {/* WHO RENEW IS FOR */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="font-bold tracking-tight text-gray-900 mb-6" style={{ fontSize: '28px' }}>
          Who Renew Is For
        </h2>
        <div className="max-w-4xl space-y-5" style={{ fontSize: '16px', lineHeight: '1.8' }}>
          <p className="text-gray-700">
            Supplements aren't just for athletes, biohackers, or the 1% chasing ultimate performance. <span className="text-gray-500">And they're not just for the version of "health" you see online or on Instagram — the gym selfies and protein shake posts.</span>
          </p>
          <p className="text-gray-700">
            They're for <span className="text-gray-900 font-medium">real people with real goals</span>. <span className="text-gray-500">Whether that's moving better, sleeping better, thinking clearer, feeling calmer, having more energy, or simply digesting food more comfortably.</span>
          </p>
          <p className="text-gray-500">
            The industry markets to extremes. Renew is built for everyone else — the vast majority who just want to feel good and stay well, without pressure, noise, or complexity.
          </p>
          <p className="text-gray-700">
            Ten seconds a day. From home. <span className="text-gray-900 font-medium">Real benefits you can see and feel</span> <span className="text-gray-500">— when someone finally tells you honestly what works for you and your goals.</span>
          </p>
        </div>
      </div>

      {/* WHAT WE BELIEVE - DARK SECTION */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-bold tracking-tight mb-8" style={{ fontSize: '28px' }}>
            What We Believe
          </h2>
          <div className="max-w-3xl space-y-4" style={{ fontSize: '15px', lineHeight: '1.7' }}>
            <p><span className="font-semibold text-white">Safe</span> <span className="text-gray-400">— based on evidence, nothing else</span></p>
            <p><span className="font-semibold text-white">Effective</span> <span className="text-gray-400">— chosen because it works</span></p>
            <p><span className="font-semibold text-white">Human</span> <span className="text-gray-400">— real and written for everyday life</span></p>
            <p><span className="font-semibold text-white">Honest</span> <span className="text-gray-400">— the full picture, so you can choose what's right</span></p>
            <p><span className="font-semibold text-white">Respectful</span> <span className="text-gray-400">— nobody cares more about your health than you</span></p>
          </div>
          <p className="font-medium mt-10 text-gray-300" style={{ fontSize: '17px' }}>
            We offer guidance. You decide.
          </p>
        </div>
      </div>

      {/* THE RESULT */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="font-bold tracking-tight text-gray-900 mb-6" style={{ fontSize: '28px' }}>
          The Result
        </h2>
        <div className="max-w-3xl" style={{ fontSize: '16px', lineHeight: '1.8' }}>
          <p className="text-gray-700 mb-3">
            Less confusion. Less noise. Less risk.
          </p>
          <p className="text-gray-900 font-medium">
            More confidence. More safety. More control.
          </p>
        </div>
      </div>

      {/* CLOSING TAGLINE */}
      <div className="py-14" style={{ backgroundColor: '#F5F2EC' }}>
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p className="font-semibold text-gray-900" style={{ fontSize: '22px' }}>
            Renew — honest guidance for everyday health.
          </p>
        </div>
      </div>

    </div>
  );
}