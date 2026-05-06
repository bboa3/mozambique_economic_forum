// Static server component — renders the About section and co-location badge.
export default function About() {
  return (
    <section className="max-w-215 mx-auto py-14 px-8 pt-14" id="about">
      <h2 className="font-montserrat font-extrabold text-2xl text-[#222] mb-5 text-center">
        O Futuro da Economia Definido no Presente
      </h2>
      <p className="text-[0.875rem] leading-[1.85] text-[#666] mb-[0.9rem]">
        Mozambique Economic Forum é o ponto de convergência da economia real, e palco da independência económica de Moçambique.
      </p>
      <p className="text-[0.875rem] leading-[1.85] text-[#666] mb-[0.9rem]">
        O{' '}
        <em>
          <strong>Mozambique Economic Forum</strong>
        </em>{' '}
        é um <strong>encontro anual</strong> alinhado aos esforços do Governo, sector privado, academia e sociedade civil para alargar o debate para o desenvolvimento, atrair investimentos, acelerar a industrialização, e crescimento económico, e das micro, pequenas e médias empresas em Moçambique.
      </p>
      <p className="text-[0.875rem] leading-[1.85] text-[#666] mb-[0.9rem]">
        Conectamos líderes, cientistas, empresas, investidores e parceiros à informação essencial, oportunidades de negócios e parcerias estratégicas para avançar a indústria, serviços e conteúdo local rumo à Independência Económica de Moçambique.
      </p>
      <p className="text-[0.875rem] leading-[1.85] text-[#666] mb-[0.9rem]">
        <strong>O Maior Palco da Independência Económica</strong>{' '}
        — O Mozambique Economic Forum conecta investidores, policy-makers, bancos, fundos de pensões, parceiros programáticos, sector privado, academia e sociedade civil para avançar ideias, acesso ao financiamento, infra-estruturas, e oportunidades no mercado real rumo à independência económica de Moçambique.
      </p>

      <div className="mt-8 pt-8 border-t border-[#ddd] text-center">
        <div className="font-montserrat font-bold text-[0.65rem] tracking-[0.18em] uppercase text-[#666] mb-4">
          Exclusive Co-Location Partner
        </div>
        <div className="inline-flex flex-col items-center justify-center w-21 h-21 rounded-full border-2 border-[#ddd] bg-[#f7f7f7] font-montserrat font-extrabold text-[0.65rem] text-[#666] text-center leading-[1.3] tracking-[0.03em]">
          USEf
          <br />
          Logo
        </div>
      </div>
    </section>
  );
}
