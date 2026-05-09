import Image from 'next/image';

const NAV_LINKS = [
  { href: '#about', label: 'Sobre o MEF' },
  { href: '#agenda', label: 'Agenda do Fórum' },
  { href: '#planos', label: 'Planos de Acesso' },
  { href: '#historia', label: 'Nossa História' },
  { href: '#lideranca', label: 'Liderança' },
  { href: '#sponsor', label: 'Organizadores & Parceiros' },
];

const REGISTER_URL = 'https://www.mozdigital.org/auth/r4c8n1';

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-950 text-white py-12 px-8 pb-6" id="contacto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-10 mb-10 pb-8 border-b border-white/10 max-[720px]:grid-cols-2 max-sm:grid-cols-1">

            {/* Coluna 1 — logo + descrição */}
            <div>
              <Image
                src="/logo.png"
                alt="Mozambique Economic Forum"
                width={160}
                height={50}
                className="object-contain h-[50px] w-auto"
              />
              <p className="mt-5 text-[0.85rem] text-white/70 leading-[1.8] max-w-56">
                O principal fórum de debate e acção para a independência económica de Moçambique.
              </p>
              <div className="mt-6">
                <span className="block text-[0.65rem] tracking-[0.14em] uppercase text-white/50 mb-2">
                  Organizado por
                </span>
                <p className="text-[0.8rem] text-white/65 leading-[1.8]">
                  Enermina · APME · APICOL<br />
                  SeasonWizard · Grupo Mesquita
                </p>
              </div>
            </div>

            {/* Coluna 2 — navegação */}
            <div>
              <h4 className="font-montserrat font-bold text-[0.7rem] tracking-[0.14em] uppercase text-white/55 mb-4">
                Navegação
              </h4>
              <ul className="list-none space-y-[0.55rem]">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[0.85rem] text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 — participar & contacto */}
            <div>
              <h4 className="font-montserrat font-bold text-[0.7rem] tracking-[0.14em] uppercase text-white/55 mb-4">
                Participe
              </h4>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-montserrat font-bold text-[0.75rem] tracking-[0.06em] uppercase py-[0.65rem] px-6 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-opacity duration-200 hover:opacity-85 mb-7"
              >
                Registar Agora
              </a>

              <h4 className="font-montserrat font-bold text-[0.7rem] tracking-[0.14em] uppercase text-white/55 mb-3">
                Contacto
              </h4>
              <ul className="list-none space-y-[0.55rem]">
                <li>
                  <a
                    href="mailto:geral@mozambiqueeconomicforum.co.mz"
                    className="text-[0.82rem] text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    geral@mozambiqueeconomicforum.co.mz
                  </a>
                </li>
                <li className="text-[0.82rem] text-white/65 leading-[1.6]">
                  Maputo, Moçambique
                </li>
              </ul>
            </div>

          </div>

          {/* Barra inferior */}
          <div className="flex flex-wrap gap-3 items-center justify-between text-[0.75rem] text-white/50">
            <span>
              © 2026 Mozambique Economic Forum. Todos os direitos reservados.
            </span>
            <div className="flex gap-4">
              <a href="#" className="text-white/55 hover:text-white transition-colors duration-200">Termos e Condições</a>
              <a href="#" className="text-white/55 hover:text-white transition-colors duration-200">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
