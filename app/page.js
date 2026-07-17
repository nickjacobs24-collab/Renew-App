import Hero from "./sections/Hero";
import Bridge from "./sections/Bridge";
import HeresHow from "./sections/HeresHow";
import Proof from "./sections/Proof";
import Trust from "./sections/Trust";
import GetPrism from "./sections/GetPrism";
import FaqFooter from "./sections/FaqFooter";

/*
 * §4 FINAL: all seven panels, one scroll. Arrangements (§2.2):
 * stacked / statement / stacked / split / statement / stacked / utility
 * — no two consecutive the same. Modes: DARK dark LIGHT LIGHT DARK
 * LIGHT LIGHT per the §2 mode map.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <Bridge />
      <HeresHow />
      <Proof />
      <Trust />
      <GetPrism />
      <FaqFooter />
    </main>
  );
}
