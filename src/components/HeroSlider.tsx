'use client';

import { useEffect, useState } from 'react';

const TOTAL_SLIDES = 5;
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
      <div className="absolute top-28 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
        <h1 className="font-montserrat font-black text-5xl leading-none text-white uppercase">
          Mozambique Economic Forum
        </h1>
        <div className="text-2xl font-bold tracking-[0.2em] uppercase text-orange-400 mt-1">
          JUNHO 21–22, 2026 · BEIRRA
        </div>
      </div>

      {/* Slide 0 */}
      <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out flex items-end pb-15 pl-14 max-sm:pb-12.5 ${current === 0 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center slide-bg bg1"></div>
        <div className="relative z-5 w-full max-w-430 ms-auto">
          <div className='max-w-135'>
            <h2 className="font-montserrat text-xl uppercase text-white tracking-widest mb-5">
              Investindo na Indústria, Serviços e <span className="text-orange-400">Conteúdo Local</span> em Moçambique
            </h2>
          </div>
        </div>
      </div>

      {/* Slide 1 */}
      <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out flex items-end pb-15 pl-14 max-sm:pb-12.5 max-sm:pl-6 ${current === 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center slide-bg bg2"></div>
        <div className="relative z-5 w-full max-w-430 ms-auto">
          <div className='max-w-135'>
            <h2 className="font-montserrat text-xl uppercase text-white tracking-widest mb-5">
              Um Novo Capítulo na História da <span className="text-orange-400">Independência Económica</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out flex items-end pb-15 pl-14 max-sm:pb-12.5 max-sm:pl-6 ${current === 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center slide-bg bg3"></div>
        <div className="relative z-5 w-full max-w-430 ms-auto">
          <div className='max-w-135'>
            <h2 className="font-montserrat text-xl uppercase text-white tracking-widest mb-5">
              O Maior Palco de <span className="text-orange-400">Negócios, Ligações Económicas</span> e Investimentos em Moçambique
            </h2>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out flex items-end pb-15 pl-14 max-sm:pb-12.5 max-sm:pl-6 ${current === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center slide-bg bg4"></div>
        <div className="relative z-5 w-full max-w-430 ms-auto">
          <div className='max-w-135'>
            <h2 className="font-montserrat text-xl uppercase text-white tracking-widest mb-5">
              O Melhor Lugar para Aceder a <span className="text-orange-400">Mercados, Financiamento</span> e Informação Económica
            </h2>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out flex items-end pb-15 pl-14 max-sm:pb-12.5 max-sm:pl-6 ${current === 4 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center slide-bg bg4"></div>
        <div className="relative z-5 w-full max-w-430 ms-auto">
          <div className='max-w-135'>
            <h2 className="font-montserrat text-xl uppercase text-white tracking-widest mb-5">
              O Centro das Parcerias <span className="text-orange-400">Públicas, Privadas</span> e Público-Privadas em Moçambique
            </h2>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 transition-opacity duration-900 ease-in-out flex items-end pb-15 pl-14 max-sm:pb-12.5 max-sm:pl-6 ${current === 5 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center slide-bg bg4"></div>
        <div className="relative z-5 w-full max-w-430 ms-auto">
          <div className='max-w-135'>
            <h2 className="font-montserrat text-xl uppercase text-white tracking-widest mb-5">
              Conecte-se ao <span className="text-orange-400">Mercado Real</span> para Avançar o Desenvolvimento Económico de Moçambique
            </h2>
          </div>
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
