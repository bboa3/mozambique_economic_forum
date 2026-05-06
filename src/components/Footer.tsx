import Image from 'next/image';

// Static server component — renders the full footer (3-column grid + bottom
// bar + the footer-ns-bar strip below).
export default function Footer() {
  return (
    <>
      <footer className="bg-[#0d0d0d] text-white py-12 px-8 pb-6" id="events">
        <div className="max-w-250 mx-auto">
          <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-10 mb-10 pb-8 border-b border-white/8 max-[920px]:grid-cols-2 max-sm:grid-cols-1">

            {/* Column 1 — logo + powered by */}
            <div>
              <div className="font-montserrat font-black text-[1.3rem] text-white tracking-[-0.02em] leading-[1.1]">
                <Image
                  src="/logo.png"
                  alt="Mozambique Economic Forum"
                  width={160}
                  height={64}
                  style={{ objectFit: 'contain', height: '50px', width: 'auto' }}
                />
              </div>
              <div className="mt-6">
                <span className="block text-[0.6rem] tracking-[0.14em] uppercase text-white/35 mb-[0.4rem]">
                  Powered by:
                </span>
                <div className="font-montserrat font-extrabold text-[1.05rem] text-white/60">
                  Northstar<sup>+</sup>
                  <br />
                  <span
                    style={{
                      fontSize: '0.58rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    MEETINGS GROUP
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2 — quick links */}
            <div>
              <h4 className="font-montserrat font-bold text-[0.65rem] tracking-[0.14em] uppercase text-white/40 mb-3">
                Quick Links
              </h4>
              <ul className="list-none">
                <li className="mb-[0.35rem]">
                  <a href="#about" className="text-[0.8rem] text-white/60 transition-colors duration-200 hover:text-white">About</a>
                </li>
                <li className="mb-[0.35rem]">
                  <a href="#program" className="text-[0.8rem] text-white/60 transition-colors duration-200 hover:text-white">Program</a>
                </li>
                <li className="mb-[0.35rem]">
                  <a href="mailto:jgewirtz@ntmllc.com" className="text-[0.8rem] text-white/60 transition-colors duration-200 hover:text-white">Contact</a>
                </li>
              </ul>
            </div>

            {/* Column 3 — marketplace + organizers CTAs */}
            <div>
              <h4 className="font-montserrat font-bold text-[0.65rem] tracking-[0.14em] uppercase text-white/40 mb-3">
                Marketplace &amp; Sponsors
              </h4>
              <a href="#marketplace" className="inline-block bg-blue text-white font-montserrat font-bold text-[0.68rem] tracking-[0.08em] uppercase py-2 px-5 rounded-sm mt-2 transition-colors duration-200 hover:bg-blue-dark">
                CLICK HERE
              </a>
              <h4 className="font-montserrat font-bold text-[0.65rem] tracking-[0.14em] uppercase text-white/40 mb-3" style={{ marginTop: '1.25rem' }}>
                Esports Event Organizers
              </h4>
              <a href="#attend" className="inline-block bg-blue text-white font-montserrat font-bold text-[0.68rem] tracking-[0.08em] uppercase py-2 px-5 rounded-sm mt-2 transition-colors duration-200 hover:bg-blue-dark">
                CLICK HERE
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-center justify-between text-[0.7rem] text-white/30">
            <span>
              Copyright &copy; 2025 by Northstar Travel Media LLC. All Rights
              Reserved. 301 Route 17 N, Suite 1150, Rutherford, NJ 07070 &middot;
              (310) 954-2525
            </span>
            <div>
              <a href="#" className="text-white/35 ml-4 hover:text-white">Terms &amp; Conditions</a>
              <a href="#" className="text-white/35 ml-4 hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Standalone bar beneath footer */}
      <div className="bg-[#050505] border-t border-white/[0.04] text-center py-[0.85rem] font-montserrat font-extrabold text-[0.95rem] text-white/30">
        Northstar<sup style={{ fontSize: '0.45rem' }}>+</sup>
      </div>
    </>
  );
}
