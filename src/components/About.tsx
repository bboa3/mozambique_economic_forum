// Static server component — About section with body text and VMV (Visão/Missão/Valores) cards.
export default function About() {
  const vmvCards = [
    {
      title: 'Visão',
      text: 'Ser o principal fórum de debate e acção para a independência económica de Moçambique, conectando os actores-chave da economia real.',
    },
    {
      title: 'Missão',
      text: 'Conectar líderes, empresas, investidores e parceiros à informação essencial, oportunidades de negócios e parcerias estratégicas para avançar a industrialização e o conteúdo local em Moçambique.',
    },
    {
      title: 'Valores',
      text: 'Transparência, inclusão, inovação e compromisso com o desenvolvimento sustentável e a soberania económica de Moçambique.',
    },
  ];

  return (
    <section className="w-full bg-[#f4f6f9] py-16 px-8" id="about">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-5 h-0.5 bg-orange-400 shrink-0" />
          <span className="font-montserrat font-bold text-[0.7rem] tracking-[0.18em] uppercase text-orange-400">
            Sobre o MEF
          </span>
        </div>

        <h2 className="font-montserrat font-extrabold text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.2] mb-6">
          O Futuro da Economia Definido no Presente
        </h2>

        <p className="text-base leading-loose mb-[0.9rem]">
          <strong>Mozambique Economic Forum</strong>
          {' '}
          é o ponto de convergência da economia real, e palco da independência
          económica de Moçambique.
        </p>
        <p className="text-base leading-loose mb-[0.9rem]">
          O MEF é um <strong>encontro anual</strong> alinhado aos esforços do
          Governo, sector privado, academia e sociedade civil para alargar o
          debate para o desenvolvimento, atrair investimentos, acelerar a
          industrialização e o crescimento económico, e das micro, pequenas e
          médias empresas em Moçambique.
        </p>
        <p className="text-base leading-loose mb-[0.9rem]">
          Conectamos líderes, cientistas, empresas, investidores e parceiros à
          informação essencial, oportunidades de negócios e parcerias estratégicas
          para avançar a indústria, serviços e conteúdo local rumo à{' '}
          <strong>Independência Económica de Moçambique</strong>.
        </p>
        <p className="text-base leading-loose mb-10">
          <strong>O Maior Palco da Independência Económica</strong> — O
          Mozambique Economic Forum conecta investidores, policy-makers, bancos,
          fundos de pensões, parceiros programáticos, sector privado, academia e
          sociedade civil para avançar ideias, acesso ao financiamento,
          infra-estruturas, e oportunidades no mercado real.
        </p>

        {/* VMV Cards */}
        <div className="grid grid-cols-3 gap-6 max-[720px]:grid-cols-1">
          {vmvCards.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden bg-white rounded-sm transition-all duration-250 hover:--translate-y-0.75 hover:shadow-lg hover:border-orange-400"
            >
              {/* Top gradient bar */}
              <div className="h-1 w-full bg-orange-400" />
              <div className="p-6">
                <h3 className="font-montserrat font-extrabold text-lg mb-3">
                  {card.title}
                </h3>
                <p className="text-sm leading-loose">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
