// Static server component — renders the About section and co-location badge.
export default function About() {
  return (
    <section className="w-full bg-gray-100 py-14 px-8 pt-14" id="about">
      <div className="max-w-215 mx-auto">
        <h2 className="font-montserrat font-extrabold text-4xl mb-5 text-center">
          O Futuro da Economia Definido no Presente
        </h2>
        <p className="text-[0.875rem] leading-[1.85] mb-[0.9rem]">
          Mozambique Economic Forum é o ponto de convergência da economia real, e palco da independência económica de Moçambique.
        </p>
        <p className="text-[0.875rem] leading-[1.85] mb-[0.9rem]">
          O{' '}
          <em>
            <strong>Mozambique Economic Forum</strong>
          </em>{' '}
          é um <strong>encontro anual</strong> alinhado aos esforços do Governo, sector privado, academia e sociedade civil para alargar o debate para o desenvolvimento, atrair investimentos, acelerar a industrialização, e crescimento económico, e das micro, pequenas e médias empresas em Moçambique.
        </p>
        <p className="text-[0.875rem] leading-[1.85] mb-[0.9rem]">
          Conectamos líderes, cientistas, empresas, investidores e parceiros à informação essencial, oportunidades de negócios e parcerias estratégicas para avançar a indústria, serviços e conteúdo local rumo à Independência Económica de Moçambique.
        </p>
        <p className="text-[0.875rem] leading-[1.85] mb-[0.9rem]">
          <strong>O Maior Palco da Independência Económica</strong>{' '}
          — O Mozambique Economic Forum conecta investidores, policy-makers, bancos, fundos de pensões, parceiros programáticos, sector privado, academia e sociedade civil para avançar ideias, acesso ao financiamento, infra-estruturas, e oportunidades no mercado real rumo à independência económica de Moçambique.
        </p>

        <div className="mt-8 w-full">
          <div className=" max-w-5xl h-9 bg-gray-100">

          </div>
        </div>
      </div>
    </section>
  );
}
