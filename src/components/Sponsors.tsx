const sponsors = [
  'Enermina',
  'APME',
  'APICOL',
  'SeasonWizard',
  'Legacy Holding Corporation',
  'Grupo Mesquita',
  'Chele Consultoria',
  'Royal Burger Group',
  'IFPELAC – Inhambane',
  'Conselho Nacional da Juventude',
];

export default function Sponsors() {
  return (
    <div className="w-full flex flex-col items-center py-12 px-6 bg-indigo-50" id="sponsor">
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-block w-5 h-0.5 bg-indigo-600 shrink-0" />
        <span className="font-montserrat font-bold text-[0.7rem] tracking-[0.18em] uppercase text-indigo-600">
          Organizadores &amp; Parceiros
        </span>
      </div>
      <h2 className="font-montserrat font-extrabold text-[clamp(1.3rem,3vw,2rem)] text-gray-900 leading-[1.2] mb-8 text-center">
        Quem Faz o MEF Acontecer
      </h2>
      <div className="max-w-3xl flex flex-wrap items-center justify-center gap-3 max-sm:gap-2">
        {sponsors.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center px-5 py-[0.6rem] bg-white font-montserrat font-semibold text-[0.75rem] text-gray-800 tracking-[0.02em] whitespace-nowrap rounded-full border border-indigo-100 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-300"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
