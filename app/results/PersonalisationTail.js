"use client";
import { useSearchParams } from 'next/navigation';

export default function PersonalisationTail() {
  const searchParams = useSearchParams();
  const pace = searchParams.get('q4');

  const variants = {
    fast: 'for faster results.',
    steady: 'for consistent progress.',
    impact: 'for lasting results.',
  };

  const tail = variants[pace] || '';

  return tail ? ` ${tail}` : '';
}