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
    <section className="py-16 px-8 bg-indigo-50" id="planos">
      <div className="max-w-l mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-5 h-0.5 bg-indigo-600 shrink-0" />
          <span className="font-montserrat font-bold text-[0.7rem] tracking-[0.18em] uppercase text-indigo-600">
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
      className={`flex flex-col w-2xl md:w-1/3 max-w-80 bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        plan.featured
          ? 'border-2 border-indigo-600 shadow-xl shadow-indigo-500/20'
          : 'border border-gray-200 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Featured banner */}
      {plan.featured ? (
        <div className="flex items-center justify-center py-[0.6rem] bg-linear-to-r from-blue-600 to-indigo-600">
          <span className="font-montserrat font-extrabold text-[0.62rem] tracking-[0.18em] uppercase text-white">
            Mais Popular
          </span>
        </div>
      ) : (
        /* Spacer so all card bodies start at the same height */
        <div className="h-[38px]" />
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
            className="font-montserrat font-black text-[1.9rem] leading-none text-indigo-600"
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
                className="shrink-0 font-bold text-[0.8rem] mt-[0.05rem] text-indigo-600"
              >
                ✓
              </span>
              <span className="text-[0.82rem] text-[#444] leading-[1.55]">{perk}</span>
            </li>
          ))}
        </ul>

        {/* CTA button — pill, full-width, MozDigital blue */}
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center font-montserrat font-extrabold text-[0.78rem] tracking-[0.04em] py-[0.9rem] px-4 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
        >
          Registar — {plan.title}
        </a>

      </div>
    </div>
  );
}
