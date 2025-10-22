"use client";
import { useSearchParams } from 'next/navigation';

export default function PersonalisationTail() {
  const searchParams = useSearchParams();
  const pace = searchParams.get('q4');

  const variants = {
    fast: 'for results you may notice a little sooner.',
    steady: 'for steady progress that builds over time.',
    impact: 'for results that favour lasting impact over quick wins.',
  };

  const tail = variants[pace] || '';

  return tail ? ` - ${tail}` : '';
}