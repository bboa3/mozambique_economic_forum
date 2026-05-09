// Static server component — Impact stats row with 4 stat boxes and top blue gradient bars.
const stats = [
  {
    value: '2018',
    label: 'Ano do primeiro Workshop Educacional',
  },
  {
    value: '+650',
    label: 'Market-players reunidos em Maputo (Dez 2024)',
  },
  {
    value: '4',
    label: 'Edições realizadas desde 2018',
  },
  {
    value: '8',
    label: 'Temas centrais na agenda do Fórum',
  },
];

export default function StatsRow() {
  return (
    <div className="bg-indigo-50 border-b border-indigo-100 py-12 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-4 gap-0 max-[700px]:grid-cols-2 max-sm:grid-cols-1">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative overflow-hidden flex flex-col items-center text-center px-6 py-8 border-r border-[#e8eaee] last:border-r-0 max-[700px]:border-b max-[700px]:last:border-b-0 max-[700px]:even:border-r-0"
          >
            {/* Top gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 to-indigo-400" />

            <div className="font-montserrat font-black text-[2.4rem] leading-[1] mb-2 text-indigo-600">
              {stat.value}
            </div>
            <p className="text-[0.78rem] leading-[1.6] text-[#666] max-w-[180px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
