"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/*
 * §4 P1 hero video slot (amended round). Muted, looping, autoplay,
 * heavily dimmed under the content layer. Renders NOTHING — leaving
 * the black→green gradient as the poster fallback — on mobile, under
 * prefers-reduced-motion, and until footage is supplied.
 * When the founder supplies footage, set HERO_VIDEO_SRC.
 */

const HERO_VIDEO_SRC = null; // e.g. "/media/hero.mp4" — founder supplies

export default function HeroVideo() {
  const prefersReduced = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!HERO_VIDEO_SRC || prefersReduced || !isDesktop) return null;

  return (
    <div aria-hidden="true" className="absolute inset-0 z-0">
      <video
        className="h-full w-full object-cover"
        src={HERO_VIDEO_SRC}
        muted
        loop
        autoPlay
        playsInline
      />
      {/* Heavy dim so the content layer always wins */}
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
}
