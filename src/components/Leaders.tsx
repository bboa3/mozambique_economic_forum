const AVATAR_BG_CLASSES = [
  'bg-indigo-600', 'bg-violet-600', 'bg-sky-500', 'bg-emerald-500',
  'bg-amber-500', 'bg-red-500', 'bg-purple-600', 'bg-cyan-500',
];

function getInitials(name: string): string {
  const parts = name.trim().split(' ');
  return parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : parts[0][0].toUpperCase();
}

const leaders = [
  { name: 'José Nchumali', role: 'Presidente' },
  { name: 'Pedro Silva', role: 'Vice-Presidente' },
  { name: 'Ussene Mucanheia', role: 'Director Executivo' },
  { name: 'Paulo Mata', role: 'Coordenador do Fórum' },
  { name: 'Orlando Mesquita', role: 'Coordenador de Operações' },
  { name: 'Marco Mesquita', role: 'Coordenador de Produção' },
  { name: 'Dário Manjate', role: 'Coordenador de Logística' },
  { name: 'Moisés Mavie', role: 'Coord. de Comunicação e Imagem' },
];

export default function Leaders() {
  return (
    <section className="py-16 px-8 bg-indigo-50" id="lideranca">
      <div className="max-w-7xl mx-auto grid gap-16 xl:grid-cols-3">

        {/* Left — section label + heading + description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-5 h-0.5 bg-indigo-600 shrink-0" />
            <span className="font-montserrat font-bold text-[0.7rem] tracking-[0.18em] uppercase text-indigo-600">
              A Nossa Equipa
            </span>
          </div>
          <h2 className="font-montserrat font-extrabold text-[clamp(1.5rem,3.5vw,2.5rem)] text-gray-900 leading-[1.2] mb-4">
            Os Rostos por Trás do MEF
          </h2>
          <p className="text-base text-gray-500 leading-[1.8]">
            Uma equipa comprometida com o debate, a acção e a construção da independência económica de Moçambique.
          </p>
        </div>

        {/* Right — leaders list */}
        <ul role="list" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:col-span-2 content-start">
          {leaders.map((person, i) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-5">
                <div
                  className={`size-14 rounded-full flex items-center justify-center font-montserrat font-bold text-base text-white shrink-0 ${AVATAR_BG_CLASSES[i % AVATAR_BG_CLASSES.length]}`}
                >
                  {getInitials(person.name)}
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-[0.9rem] text-gray-900 leading-[1.4]">
                    {person.name}
                  </h3>
                  <p className="text-[0.8rem] font-semibold text-indigo-600 leading-[1.6]">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
