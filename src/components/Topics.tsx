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
  photo: StaticImageData;
  objectPosition?: string;
};

const topics: Topic[] = [
  {
    title: 'Desenvolvimento Sustentável e Independência Económica',
    desc: 'Debate sobre políticas e estratégias para consolidar a soberania e independência económica de Moçambique.',
    photo: imgIndependencia,
    objectPosition: 'center 55%',
  },
  {
    title: 'Indústria e Mega-Projectos',
    desc: 'O papel dos grandes projectos na industrialização e no crescimento do conteúdo local em Moçambique.',
    photo: imgIndustria,
    objectPosition: 'center 60%',
  },
  {
    title: 'Financiamento, Negócios e MPMEs',
    desc: 'Acesso ao crédito, ecossistema empreendedor e o crescimento das micro, pequenas e médias empresas.',
    photo: imgFinanciamento,
    objectPosition: 'center 50%',
  },
  {
    title: 'Tecnologias e Transformação Digital',
    desc: 'Inovação, digitalização e o futuro da economia conectada em Moçambique.',
    photo: imgConteudo,
    objectPosition: 'center 35%',
  },
  {
    title: 'Logística, Serviços e Conteúdo Local',
    desc: 'Cadeias de valor, portos, corredores e a participação local nos grandes contratos nacionais.',
    photo: imgConteudo,
    objectPosition: 'center 35%',
  },
  {
    title: 'Agricultura, Economia Azul e ESGs',
    desc: 'Segurança alimentar, pesca, oceanos e critérios ESG como alavancas de competitividade global.',
    photo: imgNegocios,
    objectPosition: 'center 40%',
  },
  {
    title: 'Doing Business e Gestão Empresarial',
    desc: 'Clima de negócios, boas práticas de governação e modernização do ambiente empresarial.',
    photo: imgNegocios,
    objectPosition: 'center 40%',
  },
  {
    title: 'Parcerias Público-Privadas',
    desc: 'Modelos de colaboração para infraestruturas, saúde, educação e desenvolvimento local sustentável.',
    photo: imgFinanciamento,
    objectPosition: 'center 50%',
  },
];

export default function Topics() {
  return (
    <section id="agenda" className="pt-16 bg-slate-950">

      {/* Section header */}
      <div className="max-w-5xl mx-auto px-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-5 h-0.5 bg-indigo-400 shrink-0" />
          <span className="font-montserrat font-bold text-[0.7rem] tracking-[0.18em] uppercase text-indigo-400">
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

            {/* Photo panel */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={topic.photo}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 25vw"
                className="object-cover"
                style={{ objectPosition: topic.objectPosition ?? 'center 50%' }}
              />
              {/* Darkening overlay */}
              <div className="absolute inset-0 z-[1] bg-black/30" />

              {/* Index badge */}
              <span className="absolute top-3 left-4 font-montserrat font-extrabold text-[0.6rem] tracking-[0.2em] z-[2] text-white/50">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Bottom vignette */}
              <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none z-[2] bg-linear-to-b from-transparent to-black/60" />
            </div>

            {/* Text panel */}
            <div className="bg-slate-900 text-white p-6 min-h-[176px] flex flex-col gap-2">
              <div className="w-4 h-0.5 mb-1 shrink-0 bg-indigo-400" />
              <h3 className="font-montserrat font-bold text-[0.9rem] leading-[1.45] text-white">
                {topic.title}
              </h3>
              <p className="text-[0.82rem] leading-[1.75] text-white/75">
                {topic.desc}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
