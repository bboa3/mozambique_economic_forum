'use client';

import { useEffect, useState } from 'react';

const TOTAL_SLIDES = 4;
const AUTO_PLAY_MS = 5200;

// Hero section with auto-playing image slider.
// Manages active slide index with useState and drives auto-play with useEffect.
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Go to a specific slide by index — used by both dots and the auto-play timer.
  function goSlide(n: number) {
    setCurrent(n);
  }

  // Auto-play: advance to the next slide every AUTO_PLAY_MS milliseconds.
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TOTAL_SLIDES);
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-135 overflow-hidden max-sm:h-120" id="home">
      {/* Centered brand overlay */}
      <div className="absolute top-20.5 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
        <h1 className="font-montserrat font-bold text-5xl leading-none text-white uppercase">
          Mozambique Economic Forum
        </h1>
        <div className="text-2xl font-bold tracking-[0.2em] uppercase text-white/65 mt-1">
          JUNHO 21–22, 2026 · BEIRRA
        </div>
      </div>

      {/* Slide 0 */}
      <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out flex items-end pb-15 pl-14 max-sm:pb-12.5 max-sm:pl-6 ${current === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center slide-bg bg1"></div>
        <div className="relative z-5 max-w-135">
          <h1 className="font- text-[clamp(1.5rem,3.2vw,2.4rem)] text-white uppercase leading-[1.1] mb-5 [text-shadow:0_2px_16px_rgba(0,0,0,0.6)] max-sm:text-[1.25rem]">
            LEARN FROM ESPORTS THOUGHT LEADERS AND INFLUENCERS
          </h1>
        </div>
      </div>

      {/* Slide 1 */}
      <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out flex items-end pb-15 pl-14 max-sm:pb-12.5 max-sm:pl-6 ${current === 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center slide-bg bg2"></div>
        <div className="relative z-5 max-w-135">
          <h1 className="font-montserrat font-black text-[clamp(1.5rem,3.2vw,2.4rem)] text-white uppercase leading-[1.1] mb-5 [text-shadow:0_2px_16px_rgba(0,0,0,0.6)] max-sm:text-[1.25rem]">
            BUILT OVER 10 YEARS. FOCUSED ON WHAT&apos;S NEXT.
          </h1>
          <p className="text-white/90 text-[0.9rem] leading-[1.65] mb-5 font-normal">
            <strong style={{ color: '#fff' }}>
              The EsportsTravel Summit has grown with the industry—and continues
              to lead it forward.
            </strong>
            <br />
            Don&apos;t miss the 10th edition.
          </p>
        </div>
      </div>

      {/* Slide 2 */}
      <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out flex items-end pb-15 pl-14 max-sm:pb-12.5 max-sm:pl-6 ${current === 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center slide-bg bg3"></div>
        <div className="relative z-5 max-w-135">
          <h1 className="font-montserrat font-black text-[clamp(1.5rem,3.2vw,2.4rem)] text-white uppercase leading-[1.1] mb-5 [text-shadow:0_2px_16px_rgba(0,0,0,0.6)] max-sm:text-[1.25rem]">
            WHERE SPORTS AND ENTERTAINMENT MEET INNOVATION
          </h1>
        </div>
      </div>

      {/* Slide 3 */}
      <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out flex items-end pb-15 pl-14 max-sm:pb-12.5 max-sm:pl-6 ${current === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center slide-bg bg4"></div>
        <div className="relative z-5 max-w-135">
          <h1 className="font-montserrat font-black text-[clamp(1.5rem,3.2vw,2.4rem)] text-white uppercase leading-[1.1] mb-5 [text-shadow:0_2px_16px_rgba(0,0,0,0.6)] max-sm:text-[1.25rem]">
            PARTICIPATE IN THE DESTINATION &amp; SUPPLIER MARKETPLACE
          </h1>
          <a
            href="#marketplace"
            className="inline-block font-montserrat font-bold text-[0.7rem] tracking-widest uppercase py-[0.6rem] px-6 rounded-sm cursor-pointer border-0 transition-colors duration-200 bg-blue text-white hover:bg-blue-dark"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-5.5 left-1/2 -translate-x-1/2 flex gap-1.75 z-10">
        {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full border-[1.5px] cursor-pointer p-0 transition-colors duration-300 ${current === i ? 'bg-gold border-gold' : 'bg-white/35 border-white/50'}`}
            onClick={() => goSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
