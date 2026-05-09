'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const REGISTER_URL = 'https://www.mozdigital.org/auth/r4c8n1';

const NAV_LINKS = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'Sobre', chevron: true },
  { href: '#attend', label: 'Agenda' },
  { href: '#sponsor', label: 'Parceiros' },
  { href: '#history', label: 'História' },
  { href: '#leadership', label: 'Liderança' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>

      <div
        className='fixed top-0 left-0 right-0 z-300 flex items-center flex-1 w-full h-22 transition-[background,border-color] duration-350 ease-in-out'
        style={{
          background: scrolled ? '#000' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(6px)',
          borderBottom: scrolled ? '1px solid rgba(59,91,255,0.1)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <nav
          className="w-full max-w-440 mx-auto flex items-stretch px-12 py-2"
        >
          <div className="w-40 p-2">
            <Image
              src="/logo.png"
              alt="Mozambique Economic Forum"
              width={140}
              height={56}
              priority
              style={{ objectFit: 'contain', height: '100%', width: 'auto' }}
            />
          </div>

          {/* Desktop nav */}
          <ul className="hidden nav:flex flex-1 ml-12 list-none items-center justify-end gap-1">
            {NAV_LINKS.slice(1).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`flex items-center h-full px-3 font-montserrat text-sm tracking-[0.08em] border-b-[3px] border-b-transparent transition-[color,border-color] duration-200 ${scrolled ? 'text-white hover:text-[#3B5BFF] hover:border-b-[#3B5BFF]' : 'text-white hover:text-white hover:border-b-indigo-400'}`}
                >
                  {link.label.toUpperCase()}
                </a>
              </li>
            ))}
            <li className="ml-4">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat font-bold text-[0.78rem] tracking-[0.04em] text-white py-2.5 px-5 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-700/30 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Registar
              </a>
            </li>
          </ul>

          {/* Hamburger — visible only below nav breakpoint */}
          <button
            className="flex nav:hidden flex-col justify-center items-center gap-1.25 ml-auto bg-transparent border-0 cursor-pointer p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className={`block w-5.5 h-0.5 rounded-sm transition-colors duration-200 ${'bg-white/85'}`} />
            <span className={`block w-5.5 h-0.5 rounded-sm transition-colors duration-200 ${'bg-white/85'}`} />
            <span className={`block w-5.5 h-0.5 rounded-sm transition-colors duration-200 ${'bg-white/85'}`} />
          </button>
        </nav>
      </div>

      {/* Mobile full-screen drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-400 bg-slate-950 flex flex-col overflow-y-auto animate-drawer-in"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-20 shrink-0 border-b border-white/8">
            <Image
              src="/logo.png"
              alt="Mozambique Economic Forum"
              width={110}
              height={44}
              style={{ objectFit: 'contain', height: '36px', width: 'auto' }}
            />
            <button
              className="bg-transparent border-0 cursor-pointer text-white/60 text-2xl leading-none p-2 transition-colors duration-200 hover:text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              ✕
            </button>
          </div>

          {/* Nav links */}
          <ul className="list-none flex-1 px-6 pt-2">
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className="border-b border-white/7"
              >
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 font-montserrat text-[0.95rem] font-semibold text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                  {link.chevron && (
                    <span className="text-indigo-400 text-[0.8rem]">▾</span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="px-6 py-8 shrink-0">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-center font-montserrat font-bold text-[0.9rem] tracking-[0.04em] text-white py-4 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 shadow-lg shadow-indigo-700/30 transition-all duration-200 hover:opacity-90"
            >
              Registar Agora
            </a>
          </div>
        </div>
      )}
    </>
  );
}
