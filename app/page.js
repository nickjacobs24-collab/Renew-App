import Hero from "./sections/Hero";
import Bridge from "./sections/Bridge";

/*
 * Panel-gated build (§8.4): Panels 1–2 only. Each further panel is
 * built ONLY after the founder clears the previous ones on the preview.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <Bridge />
    </main>
  );
}
