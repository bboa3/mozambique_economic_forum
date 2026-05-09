import Image from 'next/image';

const NAV_LINKS = [
  { href: '#about',    label: 'Sobre o MEF' },
  { href: '#agenda',   label: 'Agenda do Fórum' },
  { href: '#planos',   label: 'Planos de Acesso' },
  { href: '#historia', label: 'Nossa História' },
  { href: '#lideranca',label: 'Liderança' },
  { href: '#sponsor',  label: 'Organizadores & Parceiros' },
];

const REGISTER_URL = 'https://www.mozdigital.org/auth/r4c8n1';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0d0d0d] text-white py-12 px-8 pb-6" id="contacto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-10 mb-10 pb-8 border-b border-white/8 max-[720px]:grid-cols-2 max-sm:grid-cols-1">

            {/* Coluna 1 — logo + descrição */}
            <div>
              <Image
                src="/logo.png"
                alt="Mozambique Economic Forum"
                width={160}
                height={64}
                style={{ objectFit: 'contain', height: '50px', width: 'auto' }}
              />
              <p className="mt-5 text-[0.8rem] text-white/45 leading-[1.8] max-w-[260px]">
                O principal fórum de debate e acção para a independência económica de Moçambique.
              </p>
              <div className="mt-6">
                <span className="block text-[0.6rem] tracking-[0.14em] uppercase text-white/30 mb-2">
                  Organizado por
                </span>
                <p className="text-[0.75rem] text-white/50 leading-[1.8]">
                  Enermina · APME · APICOL<br />
                  SeasonWizard · Grupo Mesquita
                </p>
              </div>
            </div>

            {/* Coluna 2 — navegação */}
            <div>
              <h4 className="font-montserrat font-bold text-[0.65rem] tracking-[0.14em] uppercase text-white/35 mb-4">
                Navegação
              </h4>
              <ul className="list-none space-y-[0.45rem]">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[0.8rem] text-white/55 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 — participar & contacto */}
            <div>
              <h4 className="font-montserrat font-bold text-[0.65rem] tracking-[0.14em] uppercase text-white/35 mb-4">
                Participe
              </h4>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-montserrat font-bold text-[0.7rem] tracking-[0.06em] uppercase py-[0.6rem] px-5 rounded-sm transition-opacity duration-200 hover:opacity-85 mb-7"
                style={{ background: '#f9a825', color: '#1a1a2e' }}
              >
                Registar Agora
              </a>

              <h4 className="font-montserrat font-bold text-[0.65rem] tracking-[0.14em] uppercase text-white/35 mb-3">
                Contacto
              </h4>
              <ul className="list-none space-y-[0.45rem]">
                <li>
                  <a
                    href="mailto:geral@mozambiqueeconomicforum.co.mz"
                    className="text-[0.8rem] text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    geral@mozambiqueeconomicforum.co.mz
                  </a>
                </li>
                <li className="text-[0.8rem] text-white/45 leading-[1.6]">
                  Maputo, Moçambique
                </li>
              </ul>
            </div>

          </div>

          {/* Barra inferior */}
          <div className="flex flex-wrap gap-3 items-center justify-between text-[0.7rem] text-white/30">
            <span>
              © 2026 Mozambique Economic Forum. Todos os direitos reservados.
            </span>
            <div className="flex gap-4">
              <a href="#" className="text-white/35 hover:text-white transition-colors duration-200">Termos e Condições</a>
              <a href="#" className="text-white/35 hover:text-white transition-colors duration-200">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Barra de rodapé */}
      <div className="bg-[#050505] border-t border-white/[0.04] text-center py-[0.85rem] font-montserrat font-bold text-[0.7rem] tracking-[0.12em] uppercase text-white/20">
        Mozambique Economic Forum · O Maior Palco da Independência Económica
      </div>
    </>
  );
}
