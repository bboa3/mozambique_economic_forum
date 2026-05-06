'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'Sobre', chevron: true },
  { href: '#attend', label: 'Agenda' },
  { href: '#sponsor', label: 'Organizadores & Parceiros' },
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
          background: scrolled ? '#0a0f1e' : 'transparent',
          backdropFilter: scrolled ? 'none' : 'blur(6px)',
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
          <ul className="hidden nav:flex flex-1 ml-12 list-none items-center justify-end">
            {NAV_LINKS.slice(1).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center h-full px-3 font-montserrat text-sm tracking-[0.08em] text-white border-b-[3px] border-b-transparent transition-[color,border-color] duration-200 hover:text-white hover:border-b-orange-400"
                >
                  {link.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — visible only below nav breakpoint */}
          <button
            className="flex nav:hidden flex-col justify-center items-center gap-1.25 ml-auto bg-transparent border-0 cursor-pointer p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="block w-5.5 h-0.5 bg-white/85 rounded-sm transition-colors duration-200" />
            <span className="block w-5.5 h-0.5 bg-white/85 rounded-sm transition-colors duration-200" />
            <span className="block w-5.5 h-0.5 bg-white/85 rounded-sm transition-colors duration-200" />
          </button>
        </nav>
      </div>

      {/* Mobile full-screen drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-400 bg-navy/97 backdrop-blur-md overflow-y-auto px-6 pb-8 animate-drawer-in"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            className="sticky top-0 flex justify-end items-center h-16 bg-transparent border-0 cursor-pointer text-white/70 text-2xl leading-none p-0 w-full transition-colors duration-200 hover:text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
          <ul className="list-none">
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className="border-t border-white/7 last:border-b last:border-white/7"
              >
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 font-montserrat text-[0.9rem] text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                  {link.chevron && (
                    <span className="text-blue text-[0.8rem]">▾</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
