import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import imgConteudo from '@/assets/Conteudo local.jpeg';
import imgIndependencia from '@/assets/Independência Económica.jpeg';
import imgIndustria from '@/assets/Investindo na Indústria, Serviços e conteudo local.jpeg';
import imgNegocios from '@/assets/Maior Palco de Negócios, Ligações Económicas.jpeg';
import imgFinanciamento from '@/assets/O Melhor Lugar para Aceder a Mercados, Financiamento.jpeg';

type Topic = {
  title: string;
  desc: string;
  imgGradient: string;
  panelBg: string;
  panelText: string;
  photo?: StaticImageData;
  objectPosition?: string;
};

const topics: Topic[] = [
  {
    title: 'Desenvolvimento Sustentável e Independência Económica',
    desc: 'Debate sobre políticas e estratégias para consolidar a soberania e independência económica de Moçambique.',
    imgGradient: 'linear-gradient(155deg, #0d1b3e 0%, #1a3a6e 35%, #0a1020 100%)',
    panelBg: '#0a0f1e',
    panelText: '#ffffff',
    photo: imgIndependencia,
    objectPosition: 'center 55%',
  },
  {
    title: 'Indústria e Mega-Projectos',
    desc: 'O papel dos grandes projectos na industrialização e no crescimento do conteúdo local em Moçambique.',
    imgGradient: 'linear-gradient(155deg, #1a0f00 0%, #3d2200 35%, #0d0d1a 100%)',
    panelBg: '#131827',
    panelText: '#ffffff',
    photo: imgIndustria,
    objectPosition: 'center 60%',
  },
  {
    title: 'Financiamento, Negócios e MPMEs',
    desc: 'Acesso ao crédito, ecossistema empreendedor e o crescimento das micro, pequenas e médias empresas.',
    imgGradient: 'linear-gradient(155deg, #001a0d 0%, #003d20 35%, #0a0d12 100%)',
    panelBg: '#0d1a24',
    panelText: '#ffffff',
    photo: imgFinanciamento,
    objectPosition: 'center 50%',
  },
  {
    title: 'Tecnologias e Transformação Digital',
    desc: 'Inovação, digitalização e o futuro da economia conectada em Moçambique.',
    imgGradient: 'linear-gradient(155deg, #0d001a 0%, #2a003d 35%, #0a0d12 100%)',
    panelBg: '#0a0f1e',
    panelText: '#ffffff',
    photo: imgConteudo,
    objectPosition: 'center 35%',
  },
  {
    title: 'Logística, Serviços e Conteúdo Local',
    desc: 'Cadeias de valor, portos, corredores e a participação local nos grandes contratos nacionais.',
    imgGradient: 'linear-gradient(155deg, #001a1a 0%, #003d3d 35%, #0a0d12 100%)',
    panelBg: '#0a0f1e',
    panelText: '#ffffff',
    photo: imgConteudo,
    objectPosition: 'center 35%',
  },
  {
    title: 'Agricultura, Economia Azul e ESGs',
    desc: 'Segurança alimentar, pesca, oceanos e critérios ESG como alavancas de competitividade global.',
    imgGradient: 'linear-gradient(155deg, #1a1a00 0%, #3d3800 35%, #0d0d1a 100%)',
    panelBg: '#0d1a24',
    panelText: '#ffffff',
    photo: imgNegocios,
    objectPosition: 'center 40%',
  },
  {
    title: 'Doing Business e Gestão Empresarial',
    desc: 'Clima de negócios, boas práticas de governação e modernização do ambiente empresarial.',
    imgGradient: 'linear-gradient(155deg, #1a0a00 0%, #3d1e00 35%, #0d0d1a 100%)',
    panelBg: '#0d1a24',
    panelText: '#ffffff',
    photo: imgNegocios,
    objectPosition: 'center 40%',
  },
  {
    title: 'Parcerias Público-Privadas',
    desc: 'Modelos de colaboração para infraestruturas, saúde, educação e desenvolvimento local sustentável.',
    imgGradient: 'linear-gradient(155deg, #0d1a1a 0%, #1a3d3d 35%, #0a0d12 100%)',
    panelBg: '#0d1a24',
    panelText: '#ffffff',
    photo: imgFinanciamento,
    objectPosition: 'center 50%',
  },
];

export default function FAQ() {
  return (
    <section id="agenda" style={{ background: '#0a0f1e' }} className="pt-16">

      {/* Section header */}
      <div className="max-w-5xl mx-auto px-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-5 h-0.5 bg-orange-400 shrink-0" />
          <span className="font-montserrat font-bold text-[0.7rem] tracking-[0.18em] uppercase text-orange-400">
            Agenda do Fórum
          </span>
        </div>
        <h2 className="font-montserrat font-extrabold text-[clamp(1.5rem,3.5vw,2.5rem)] text-white leading-[1.2]">
          Temas Centrais
        </h2>
      </div>

      {/* Topic grid */}
      <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-sm:grid-cols-1">
        {topics.map((topic, i) => (
          <div key={topic.title}>

            {/* Visual panel */}
            <div
              className="relative h-56 overflow-hidden"
              style={topic.photo ? undefined : { background: topic.imgGradient }}
            >
              {topic.photo ? (
                <>
                  {/* Real photo */}
                  <Image
                    src={topic.photo}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    className="object-cover"
                    style={{ objectPosition: topic.objectPosition ?? 'center 50%' }}
                  />
                  {/* Darkening overlay so index badge and vignette remain readable */}
                  <div
                    className="absolute inset-0 z-[1]"
                    style={{ background: 'rgba(0,0,0,0.28)' }}
                  />
                </>
              ) : (
                <>
                  {/* Ghost watermark emoji (gradient panels only) */}
                  <div
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                    style={{ fontSize: '9rem', opacity: 0.07 }}
                  >
                    {topic.emoji}
                  </div>
                  {/* Soft radial highlight */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'radial-gradient(ellipse at 35% 40%, rgba(255,255,255,0.07) 0%, transparent 65%)' }}
                  />
                  {/* Foreground emoji */}
                  <div
                    className="absolute inset-0 flex items-center justify-center z-10 drop-shadow-lg"
                    style={{ fontSize: '3.25rem' }}
                  >
                    {topic.emoji}
                  </div>
                </>
              )}

              {/* Index badge — shown on all panels */}
              <span
                className="absolute top-3 left-4 font-montserrat font-extrabold text-[0.6rem] tracking-[0.2em] z-[2]"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Bottom vignette — shown on all panels */}
              <div
                className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none z-[2]"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.55))' }}
              />
            </div>

            {/* Text panel */}
            <div
              style={{ background: topic.panelBg, color: topic.panelText }}
              className="p-6 min-h-[176px] flex flex-col gap-2"
            >
              <div className="w-4 h-0.5 bg-orange-400 mb-1 shrink-0" />
              <h3 className="font-montserrat font-bold text-[0.82rem] leading-[1.45]">
                {topic.title}
              </h3>
              <p className="text-[0.78rem] leading-[1.75]" style={{ opacity: 0.62 }}>
                {topic.desc}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
