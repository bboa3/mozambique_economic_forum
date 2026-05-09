export default function GrowthBanner() {
  return (
    <div className="relative py-20 px-8 text-center overflow-hidden bg-linear-to-br from-blue-600 via-indigo-700 to-indigo-900">
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)',
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="font-montserrat font-black text-[clamp(1.1rem,2.5vw,1.4rem)] leading-[1.7] text-white">
          Conectamos líderes, cientistas, empresas, investidores e parceiros à
          informação essencial, oportunidades de negócios e parcerias
          estratégicas para avançar a{' '}
          <span className="text-indigo-300">
            indústria, serviços e conteúdo local
          </span>{' '}
          rumo à{' '}
          <span className="text-indigo-300">
            Independência Económica de Moçambique
          </span>
          .
        </p>
      </div>
    </div>
  );
}
