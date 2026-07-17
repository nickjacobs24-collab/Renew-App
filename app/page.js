import Bridge from "./sections/Bridge";
import PinnedPhoneSequence from "./sections/PinnedPhoneSequence";

/*
 * §8.8 motion-proof page: Beat 2 lead-in + pinned Beats 3–6.
 * Beats 1, 7, 8, 9 are not built yet — the tail spacer below stands in
 * for Beat 7 so the phone's exit is visible.
 */
export default function Home() {
  return (
    <main>
      <Bridge />
      <PinnedPhoneSequence />
      <div className="h-[60vh]" aria-hidden="true" />
    </main>
  );
}
