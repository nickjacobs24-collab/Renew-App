import Hero from "./sections/Hero";
import Bridge from "./sections/Bridge";
import HeresHow from "./sections/HeresHow";

/*
 * Panel-gated build (§8.4): Panels 1–3 only. Panels 4–7 build ONLY
 * after the founder clears these on the preview.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <Bridge />
      <HeresHow />
    </main>
  );
}
