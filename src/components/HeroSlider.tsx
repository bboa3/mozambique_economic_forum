'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import imgIndustria    from '@/assets/Investindo na Indústria, Serviços e conteudo local.jpeg';
import imgIndependencia from '@/assets/Independência Económica.jpeg';
import imgMaiorPalco   from '@/assets/Maior Palco de Negócios, Ligações Económicas.jpeg';
import imgMercados     from '@/assets/O Melhor Lugar para Aceder a Mercados, Financiamento.jpeg';
import imgParcerias    from '@/assets/O  Centro das Parcerias.jpeg';

import type { StaticImageData } from 'next/image';

type Slide = {
  image: StaticImageData;
  // Focal point — keeps the most important part of the photo in frame
  objectPosition: string;
  headline: React.ReactNode;
};

const slides: Slide[] = [
  {
    image: imgIndustria,
    objectPosition: 'center 45%',
    headline: (
      <>Investindo na Indústria, Serviços e{' '}
        <span className="text-orange-400">Conteúdo Local</span> em Moçambique</>
    ),
  },
  {
    image: imgIndependencia,
    objectPosition: 'center 55%',
    headline: (
      <>Um Novo Capítulo na História da{' '}
        <span className="text-orange-400">Independência Económica</span></>
    ),
  },
  {
    image: imgMaiorPalco,
    objectPosition: 'center 40%',
    headline: (
      <>O Maior Palco de{' '}
        <span className="text-orange-400">Negócios, Ligações Económicas</span>{' '}
        e Investimentos em Moçambique</>
    ),
  },
  {
    image: imgMercados,
    objectPosition: 'center 50%',
    headline: (
      <>O Melhor Lugar para Aceder a{' '}
        <span className="text-orange-400">Mercados, Financiamento</span>{' '}
        e Informação Económica</>
    ),
  },
  {
    image: imgParcerias,
    objectPosition: 'center 35%',
    headline: (
      <>O Centro das{' '}
        <span className="text-orange-400">Parcerias Público-Privadas</span>{' '}
        em Moçambique</>
    ),
  },
];

const AUTO_PLAY_MS = 5200;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-135 overflow-hidden max-sm:h-120" id="home">

      {/* Brand overlay — sits above all slides */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none w-full px-4 max-sm:top-20">
        <h1 className="font-montserrat font-black text-5xl leading-none text-white uppercase drop-shadow-lg max-sm:text-3xl">
          Mozambique Economic Forum
        </h1>
        <div className="text-2xl font-bold tracking-[0.2em] uppercase text-orange-400 mt-1 drop-shadow-md max-sm:text-lg">
          JUNHO 21–22, 2026 · BEIRA
        </div>
      </div>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={current !== i}
          className={`absolute inset-0 transition-opacity duration-900 ease-in-out flex items-end pb-15 pl-14 max-sm:pb-12 max-sm:pl-6 ${
            current === i ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Photo */}
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: slide.objectPosition }}
          />

          {/* Layered overlay: left-to-right for text legibility + top/bottom vignette */}
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background: [
                'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.48) 48%, rgba(0,0,0,0.18) 100%)',
                'linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, transparent 38%, transparent 62%, rgba(0,0,0,0.42) 100%)',
              ].join(', '),
            }}
          />

          {/* Slide text — bottom-left */}
          <div className="relative z-[2] w-full max-w-430 ms-auto">
            <div className="max-w-135">
              <h2 className="font-montserrat text-xl uppercase text-white tracking-widest mb-5 drop-shadow-md">
                {slide.headline}
              </h2>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-5.5 left-1/2 -translate-x-1/2 flex gap-1.75 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full border-[1.5px] cursor-pointer p-0 transition-colors duration-300 ${
              current === i ? 'bg-gold border-gold' : 'bg-white/35 border-white/50'
            }`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para o slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
