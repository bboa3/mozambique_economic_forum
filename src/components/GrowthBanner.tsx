// Static server component — MEF Impact Banner with dark navy bg and grid pattern overlay.
export default function GrowthBanner() {
  return (
    <div
      className="relative py-16 px-8 text-center overflow-hidden"
      style={{ background: '#0a0f1e' }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(21,101,192,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="font-montserrat font-bold text-[clamp(0.95rem,2.2vw,1.2rem)] leading-loose text-white">
          Conectamos líderes, cientistas, empresas, investidores e parceiros à
          informação essencial, oportunidades de negócios e parcerias
          estratégicas para avançar a{' '}
          <span className="text-orange-400 font-extrabold">
            indústria, serviços e conteúdo local
          </span>{' '}
          rumo à{' '}
          <span className="text-orange-400 font-extrabold">
            Independência Económica de Moçambique
          </span>
          .
        </p>
      </div>
    </div>
  );
}
