"use client";
import React from "react";
import Image from "next/image";

export default function AboutRenew() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFBF7' }}>
      
      {/* HERO SECTION */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-bold tracking-tight text-gray-900 mb-5" style={{ fontSize: '44px', lineHeight: '1.1' }}>
            About Renew
          </h1>
          <p className="text-gray-600" style={{ fontSize: '17px', lineHeight: '1.8' }}>
            Health advice should be honest. Most of it isn't. Supplements can be one of the simplest ways to support your health — but the industry has made them confusing, commercial, and hard to trust.
          </p>
        </div>
      </section>

      {/* OPTIONAL: HERO IMAGE */}
      {/*
      <div className="w-full h-[280px] relative">
        <Image src="/images/about-hero.jpg" alt="Natural wellness" fill className="object-cover" />
      </div>
      */}

      {/* WHY RENEW EXISTS */}
      <section className="py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-bold tracking-tight text-gray-900 mb-6" style={{ fontSize: '28px' }}>
            Why Renew Exists
          </h2>
          <div className="space-y-4 text-gray-600" style={{ fontSize: '16px', lineHeight: '1.85' }}>
            <p>
              The supplement world isn't working as it should. Marketing is often prioritised over evidence. Brands promote what sells, not what works. And most advice comes from someone trying to make money — not someone trying to help you stay healthy.
            </p>
            <p>
              When money's involved, transparency and truth often come second. Renew was created to be a counterweight.
            </p>
            <p>
              We give you guidance that isn't influenced by sales, sponsorships, or commissions — just clear, human, evidence-led information you can trust. No motive to sell. Only to inform.
            </p>
            <p>
              We believe something simple: you are the only person who can truly know what's right for your health. Our job is to give you the information and clarity you need to make those decisions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* OPTIONAL: IMAGE BREAK */}
      {/*
      <div className="w-full h-[300px] relative">
        <Image src="/images/about-nature.jpg" alt="Calm and clarity" fill className="object-cover" />
      </div>
      */}

      {/* WHO RENEW IS FOR */}
      <section className="py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-bold tracking-tight text-gray-900 mb-6" style={{ fontSize: '28px' }}>
            Who Renew Is For
          </h2>
          <div className="space-y-4 text-gray-600" style={{ fontSize: '16px', lineHeight: '1.85' }}>
            <p>
              Supplements aren't just for athletes, biohackers, or the 1% chasing ultimate performance. And they're not just for the version of "health" you see online or on Instagram — the gym selfies and protein shake posts.
            </p>
            <p>
              They're for real people with real goals. Whether that's moving better, sleeping better, thinking clearer, feeling calmer, having more energy, or simply digesting food more comfortably.
            </p>
            <p>
              The industry markets to extremes. Renew is built for everyone else — the vast majority who just want to feel good and stay well, without pressure, noise, or complexity.
            </p>
            <p>
              Ten seconds a day. From home. Benefits you can see and feel — when someone finally tells you honestly what works for you and your goals.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE - DARK SECTION */}
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-bold tracking-tight mb-8" style={{ fontSize: '28px' }}>
            What We Believe
          </h2>
          <div className="space-y-3" style={{ fontSize: '17px', lineHeight: '1.7' }}>
            <p>
              <span className="font-semibold">Safe</span>
              <span className="text-gray-400"> — based on evidence, nothing else</span>
            </p>
            <p>
              <span className="font-semibold">Effective</span>
              <span className="text-gray-400"> — chosen because it works</span>
            </p>
            <p>
              <span className="font-semibold">Human</span>
              <span className="text-gray-400"> — real and written for everyday life</span>
            </p>
            <p>
              <span className="font-semibold">Honest</span>
              <span className="text-gray-400"> — the full picture, so you can choose what's right</span>
            </p>
            <p>
              <span className="font-semibold">Respectful</span>
              <span className="text-gray-400"> — nobody cares more about your health than you</span>
            </p>
          </div>
          <p className="mt-10 text-gray-300" style={{ fontSize: '17px' }}>
            We offer guidance. You decide.
          </p>
        </div>
      </section>

      {/* THE RESULT */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-bold tracking-tight text-gray-900 mb-6" style={{ fontSize: '28px' }}>
            The Result
          </h2>
          <div className="text-gray-600" style={{ fontSize: '16px', lineHeight: '1.8' }}>
            <p>
              Less confusion. Less noise. Less risk.<br />
              More confidence. More safety. More control.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}