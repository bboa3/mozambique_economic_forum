'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import imgIndependencia from '@/assets/Independência Económica.jpeg';
import imgIndustria from '@/assets/Investindo na Indústria, Serviços e conteudo local.jpeg';
import imgMaiorPalco from '@/assets/Maior Palco de Negócios, Ligações Económicas.jpeg';
import imgParcerias from '@/assets/O  Centro das Parcerias.jpeg';
import imgMercados from '@/assets/O Melhor Lugar para Aceder a Mercados, Financiamento.jpeg';

import type { StaticImageData } from 'next/image';

const REGISTER_URL = 'https://www.mozdigital.org/auth/r4c8n1';

type Slide = {
  image: StaticImageData;
  objectPosition: string;
  headline: React.ReactNode;
};

const slides: Slide[] = [
  {
    image: imgIndustria,
    objectPosition: 'center 45%',
    headline: (
      <>Investindo na Indústria, Serviços e{' '}
        <span className="text-indigo-400">Conteúdo Local</span>{' '}
        em Moçambique</>
    ),
  },
  {
    image: imgIndependencia,
    objectPosition: 'center 55%',
    headline: (
      <>Um Novo Capítulo na História da{' '}
        <span className="text-indigo-400">Independência Económica</span></>
    ),
  },
  {
    image: imgMaiorPalco,
    objectPosition: 'center 40%',
    headline: (
      <>O Maior Palco de{' '}
        <span className="text-indigo-400">Negócios, Ligações Económicas</span>{' '}
        e Investimentos em Moçambique</>
    ),
  },
  {
    image: imgMercados,
    objectPosition: 'center 50%',
    headline: (
      <>O Melhor Lugar para Aceder a{' '}
        <span className="text-indigo-400">Mercados, Financiamento</span>{' '}
        e Informação Económica</>
    ),
  },
  {
    image: imgParcerias,
    objectPosition: 'center 35%',
    headline: (
      <>O Centro das{' '}
        <span className="text-indigo-400">Parcerias Público-Privadas</span>{' '}
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
    <div
      className="relative overflow-hidden min-h-155 h-svh max-h-190"
      id="home"
    >
      {/* Slide photos */}
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={current !== i}
          className={`absolute inset-0 transition-opacity ease-in-out duration-900ms ${current === i ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: slide.objectPosition }}
          />
        </div>
      ))}

      {/* Darkening overlay — left-heavy for text legibility */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background: [
            'linear-gradient(to right, rgba(5,10,35,0.78) 0%, rgba(5,10,35,0.52) 55%, rgba(5,10,35,0.18) 100%)',
            'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 30%, transparent 65%, rgba(0,0,0,0.38) 100%)',
          ].join(', '),
        }}
      />

      {/* Content block */}
      <div className="absolute inset-0 z-2 flex items-center max-sm:items-start max-sm:pt-32">
        <div className="w-full max-w-7xl mx-auto px-8 max-sm:px-5">
          <div className="max-w-155">
            {/* Dynamic slide headline */}
            <h1 className="font-montserrat font-black text-white leading-[1.08] mb-5 text-[clamp(2rem,4.5vw,3.4rem)]">
              {slides[current].headline}
            </h1>

            {/* Date + location */}
            <p className="font-montserrat font-bold tracking-[0.14em] uppercase text-white/65 mb-9 text-[clamp(0.8rem,1.5vw,1rem)]">
              21–22 Junho 2026 · Beira, Moçambique
            </p>

            {/* CTA buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat font-bold text-[0.85rem] tracking-[0.04em] text-white py-[0.9rem] px-8 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 shadow-lg shadow-indigo-700/40 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              >
                Registar Agora
              </a>
              <a
                href="#about"
                className="font-montserrat font-bold text-[0.85rem] tracking-[0.04em] text-white py-[0.85rem] px-8 rounded-xl border-2 border-white/75 transition-all duration-200 hover:bg-white/10"
              >
                Saber Mais
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2 rounded-full border cursor-pointer p-0 transition-all duration-300 ${current === i
              ? 'bg-linear-to-r from-blue-500 to-indigo-600 border-indigo-500'
              : 'bg-white/35 border-white/50'
              }`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para o slide ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
