type Plan = {
  title: string;
  subtitle: string;
  price: string;
  featured?: boolean;
  perks: string[];
};

const plans: Plan[] = [
  {
    title: 'Empreendedor',
    subtitle: 'Participantes individuais',
    price: '10.000 Mt',
    perks: [
      'Acesso a todas as sessões do fórum',
      'Kit de participante',
      'Certificado de participação',
    ],
  },
  {
    title: 'Conteúdo Local',
    subtitle: 'Empresas nacionais',
    price: '20.000 Mt',
    featured: true,
    perks: [
      'Tudo do Empreendedor +',
      'Kit de participante premium',
      'Acesso à área de networking exclusivo',
      'Certificado de participação',
    ],
  },
  {
    title: 'Multinacional',
    subtitle: 'Grupos internacionais',
    price: '50.000 Mt',
    perks: [
      'Tudo do Conteúdo Local +',
      'Kit de participante premium',
      'Acesso à área de networking exclusivo',
      'Visibilidade na agenda oficial do MEF',
    ],
  },
  {
    title: 'Investidor',
    subtitle: 'Fundos e investidores',
    price: '60.000 Mt',
    perks: [
      'Tudo do Multinacional +',
      'Kit de participante premium',
      'Acesso à área de networking exclusivo',
      'Reunião bilateral com organizadores',
    ],
  },
  {
    title: 'Governo',
    subtitle: 'Entidades públicas',
    price: '10.000 Mt',
    perks: [
      'Acesso a todas as sessões do fórum',
      'Kit de participante oficial',
      'Certificado de participação',
      'Mesa de honra reservada',
      'Reconhecimento público no evento',
    ],
  },
];

const REGISTER_URL = 'https://www.mozdigital.org/auth/r4c8n1';

export default function MembershipPlans() {
  return (
    <section className="bg-[#f4f6f9] py-16 px-8" id="planos">
      <div className="max-w-l mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-5 h-0.5 bg-orange-400 shrink-0" />
          <span className="font-montserrat font-bold text-[0.7rem] tracking-[0.18em] uppercase text-orange-400">
            Participação
          </span>
        </div>

        <h2 className="font-montserrat font-extrabold text-[clamp(1.5rem,3vw,2rem)] text-[#1a1a2e] leading-[1.2] mb-10">
          Planos de Acesso ao Fórum
        </h2>

        {/* Plans grid — 3 cols wraps to 3+2; flex centres the orphan row */}
        <div className="flex flex-wrap justify-center gap-5">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className="flex flex-col w-2xl md:w-1/3 max-w-80 bg-white transition-all duration-300 hover:-translate-y-1"
      style={{
        borderRadius: '16px',
        border: plan.featured ? '2px solid #1565c0' : '1px solid #e2e6ed',
        boxShadow: plan.featured
          ? '0 8px 32px rgba(21,101,192,0.15)'
          : '0 2px 12px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Featured banner */}
      {plan.featured ? (
        <div
          className="flex items-center justify-center py-[0.6rem]"
          style={{ background: '#0a0f1e' }}
        >
          <span className="font-montserrat font-extrabold text-[0.62rem] tracking-[0.18em] uppercase text-white">
            Mais Popular
          </span>
        </div>
      ) : (
        /* Spacer so all card bodies start at the same height */
        <div style={{ height: '38px' }} />
      )}

      <div className="flex flex-col flex-1 px-7 pt-6 pb-7">

        {/* Plan name + subtitle */}
        <h3 className="font-montserrat font-extrabold text-[1.2rem] text-[#1a1a2e] leading-[1.25] mb-1">
          {plan.title}
        </h3>
        <p className="text-[0.78rem] text-[#888] mb-5 leading-[1.5]">
          {plan.subtitle}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-6">
          <span
            className="font-montserrat font-black text-[1.9rem] leading-none"
            style={{ color: '#1565c0' }}
          >
            {plan.price}
          </span>
          <span className="text-[0.72rem] text-[#aaa] font-semibold">/ entrada</span>
        </div>

        {/* Perks list */}
        <ul className="flex-1 flex flex-col gap-[0.7rem] mb-7">
          {plan.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-[0.6rem]">
              <span
                className="shrink-0 font-bold text-[0.8rem] mt-[0.05rem]"
                style={{ color: '#1565c0' }}
              >
                ✓
              </span>
              <span className="text-[0.82rem] text-[#444] leading-[1.55]">{perk}</span>
            </li>
          ))}
        </ul>

        {/* CTA button — pill, full-width, gold */}
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center font-montserrat font-extrabold text-[0.78rem] tracking-[0.04em] py-[0.85rem] px-4 transition-opacity duration-200 hover:opacity-90"
          style={{
            background: '#f9a825',
            color: '#1a1a2e',
            borderRadius: '50px',
          }}
        >
          Registar — {plan.title}
        </a>

      </div>
    </div>
  );
}
