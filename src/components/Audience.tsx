// Static server component — renders the audience section with donut SVG chart
// and photo grid. The SVG is written as JSX directly (no img tag required).
export default function Audience() {
  return (
    <section className="bg-dark text-white py-8 px-8 pb-16" id="attend">
      <div className="font-montserrat font-extrabold text-[0.8rem] tracking-[0.15em] uppercase text-center mb-10">
        Summit Audience
      </div>
      <div className="max-w-275 mx-auto grid grid-cols-[280px_1fr] gap-12 items-start max-[920px]:grid-cols-1">

        {/* Donut chart */}
        <div className="flex flex-col items-center max-[920px]:hidden">
          <svg
            viewBox="0 0 260 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Audience breakdown donut chart"
            role="img"
            className="w-65 h-65 block"
          >
            {/* Donut segments: r=90, cx=130 cy=130, circumference≈565.5 */}
            {/* 24% Amateur/National = 135.7 */}
            <circle cx="130" cy="130" r="90" stroke="#3b9ddd" strokeWidth="38" strokeDasharray="135.7 565.5" strokeDashoffset="141.4" fill="none" />
            {/* 16% Grassroots/Regional = 90.5 */}
            <circle cx="130" cy="130" r="90" stroke="#5bc8af" strokeWidth="38" strokeDasharray="90.5 565.5" strokeDashoffset="5.7" fill="none" />
            {/* 15% Professional = 84.8 */}
            <circle cx="130" cy="130" r="90" stroke="#f0883e" strokeWidth="38" strokeDasharray="84.8 565.5" strokeDashoffset="-84.8" fill="none" />
            {/* 15% Collegiate = 84.8 */}
            <circle cx="130" cy="130" r="90" stroke="#e8c53a" strokeWidth="38" strokeDasharray="84.8 565.5" strokeDashoffset="-169.6" fill="none" />
            {/* 12% Youth/Campus = 67.9 */}
            <circle cx="130" cy="130" r="90" stroke="#5aad5e" strokeWidth="38" strokeDasharray="67.9 565.5" strokeDashoffset="-254.4" fill="none" />
            {/* 9% Casino/Festival = 50.9 */}
            <circle cx="130" cy="130" r="90" stroke="#a855f7" strokeWidth="38" strokeDasharray="50.9 565.5" strokeDashoffset="-322.3" fill="none" />
            {/* 9% High School = 50.9 */}
            <circle cx="130" cy="130" r="90" stroke="#ef4444" strokeWidth="38" strokeDasharray="50.9 565.5" strokeDashoffset="-373.2" fill="none" />
            {/* Inner fill to create the donut hole */}
            <circle cx="130" cy="130" r="71" fill="#111" />
            {/* Center text */}
            <text x="130" y="125" textAnchor="middle" fill="#fff" fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10.5" letterSpacing="1">WHO YOU&apos;LL</text>
            <text x="130" y="141" textAnchor="middle" fill="#fff" fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="10.5" letterSpacing="1">MEET</text>
            {/* Percentage labels */}
            <text x="154" y="55"  fill="#fff" fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9.5">24%</text>
            <text x="196" y="150" fill="#fff" fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9.5">16%</text>
            <text x="148" y="211" fill="#fff" fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9.5">15%</text>
            <text x="55"  y="205" fill="#fff" fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9.5">15%</text>
            <text x="32"  y="125" fill="#fff" fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9.5">12%</text>
            <text x="55"  y="68"  fill="#fff" fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9.5">9%</text>
            <text x="115" y="40"  fill="#fff" fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="9.5">9%</text>
          </svg>

          <div className="mt-6 w-full">
            <div className="flex items-center gap-2 mb-[0.4rem] text-[0.7rem] text-white/70"><div className="w-2.25 h-2.25 rounded-full shrink-0" style={{ background: '#3b9ddd' }}></div>Amateur / National Tournament Organizers</div>
            <div className="flex items-center gap-2 mb-[0.4rem] text-[0.7rem] text-white/70"><div className="w-2.25 h-2.25 rounded-full shrink-0" style={{ background: '#5bc8af' }}></div>Grassroots / Regional Tournament Organizers</div>
            <div className="flex items-center gap-2 mb-[0.4rem] text-[0.7rem] text-white/70"><div className="w-2.25 h-2.25 rounded-full shrink-0" style={{ background: '#f0883e' }}></div>Professional Global Tournament Organizers</div>
            <div className="flex items-center gap-2 mb-[0.4rem] text-[0.7rem] text-white/70"><div className="w-2.25 h-2.25 rounded-full shrink-0" style={{ background: '#e8c53a' }}></div>Collegiate Tournament Organizers</div>
            <div className="flex items-center gap-2 mb-[0.4rem] text-[0.7rem] text-white/70"><div className="w-2.25 h-2.25 rounded-full shrink-0" style={{ background: '#5aad5e' }}></div>Youth / Campus Education Leaders</div>
            <div className="flex items-center gap-2 mb-[0.4rem] text-[0.7rem] text-white/70"><div className="w-2.25 h-2.25 rounded-full shrink-0" style={{ background: '#a855f7' }}></div>Casino / Festival Convention</div>
            <div className="flex items-center gap-2 mb-[0.4rem] text-[0.7rem] text-white/70"><div className="w-2.25 h-2.25 rounded-full shrink-0" style={{ background: '#ef4444' }}></div>High School Tournament Organizers</div>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-4 gap-4 max-[920px]:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <div className="w-full pb-[72%] relative rounded-sm overflow-hidden mb-3" style={{ background: 'linear-gradient(135deg,#1c2a3a,#0a1520)' }}>
              <div className="absolute inset-0 flex items-center justify-center text-[2.5rem]">🤝</div>
            </div>
            <p className="text-[0.78rem] leading-[1.65] text-white/60">
              The EsportsTravel Summit brings together esports tournament and
              video-game event organizers, destinations and suppliers in a dynamic
              direct-selling appointment-based marketplace.
            </p>
          </div>
          <div>
            <div className="w-full pb-[72%] relative rounded-sm overflow-hidden mb-3" style={{ background: 'linear-gradient(135deg,#1a1a2e,#0d0d22)' }}>
              <div className="absolute inset-0 flex items-center justify-center text-[2.5rem]">🎤</div>
            </div>
            <p className="text-[0.78rem] leading-[1.65] text-white/60">
              Featuring compelling educational content and creative social and
              networking opportunities, the EsportsTravel Summit positions its
              host cities at the vanguard of the events industry.
            </p>
          </div>
          <div>
            <div className="w-full pb-[72%] relative rounded-sm overflow-hidden mb-3" style={{ background: 'linear-gradient(135deg,#2e1a1a,#220d0d)' }}>
              <div className="absolute inset-0 flex items-center justify-center text-[2.5rem]">💡</div>
            </div>
            <p className="text-[0.78rem] leading-[1.65] text-white/60">
              The connection between esports, technology and economic development
              are at the heart of the EsportsTravel Summit experience.
            </p>
          </div>
          <div>
            <div className="w-full pb-[72%] relative rounded-sm overflow-hidden mb-3" style={{ background: 'linear-gradient(135deg,#1a2e2e,#0d2222)' }}>
              <div className="absolute inset-0 flex items-center justify-center text-[2.5rem]">🌐</div>
            </div>
            <p className="text-[0.78rem] leading-[1.65] text-white/60">
              The EsportsTravel Summit is the unique gathering place for
              travel-industry professionals who want to capitalize on the
              worldwide esports phenomenon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
