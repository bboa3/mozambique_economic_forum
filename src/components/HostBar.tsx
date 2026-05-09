// Static server component — MEF History section (id="historia") with vertical timeline.
const timelineEntries = [
  {
    year: '2018',
    text: 'O nosso primeiro ',
    bold: 'Workshop Educacional',
    rest: ' com legisladores, magistrados, academia, membros do governo e sociedade civil — o ponto de partida de uma visão transformadora.',
  },
  {
    year: '17 Julho 2022',
    text: 'Realizamos a nossa ',
    bold: '1ª Conferência e Feira do Conteúdo Local',
    rest: ', consolidando o MEF como principal plataforma de debate económico em Moçambique.',
  },
  {
    year: '19 Dezembro 2024',
    text: 'Reunimos ',
    bold: '+650 market-players',
    rest: ' chave da economia na Cidade de Maputo para avançar a Indústria Extractiva e Conteúdo Local em Moçambique.',
  },
  {
    year: 'Novembro 2025',
    text: 'Realizamos a ',
    bold: 'Sessão de Alto Nível sobre Conteúdo Local',
    rest: ' em Maputo (7 Nov) e a ',
    bold2: '2ª Conferência e Feira do Conteúdo Local',
    rest2: ' em Pemba, Cabo Delgado (21–22 Nov).',
  },
];

export default function HostBar() {
  return (
    <section
      className="py-16 px-8 bg-slate-950"
      id="historia"
    >
      <div className="max-w-3xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-5 h-0.5 bg-indigo-400 shrink-0" />
          <span className="font-montserrat font-bold text-[0.7rem] tracking-[0.18em] uppercase text-indigo-400">
            A Nossa Jornada
          </span>
        </div>

        <h2 className="font-montserrat font-extrabold text-white text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] mb-6">
          Nossa História
        </h2>

        {/* Vertical timeline */}
        <div className="relative pl-8 border-l-2 border-indigo-500/40">
          {timelineEntries.map((entry, i) => (
            <div key={i} className="relative mb-10 last:mb-0">
              {/* Dot on the line */}
              <div
                className="absolute left-[-2.45rem] top-1 w-4 h-4 rounded-full border-2 border-indigo-500 bg-slate-950"
              />
              {/* Year label */}
              <div className="font-montserrat font-extrabold text-base tracking-loose uppercase mb-2 text-indigo-400">
                {entry.year}
              </div>
              {/* Entry text */}
              <p className="text-base leading-loose text-white">
                {entry.text}
                {entry.bold}
                {entry.rest}
                {entry.bold2 && (
                  <>
                    {entry.bold2}{entry.rest2}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
