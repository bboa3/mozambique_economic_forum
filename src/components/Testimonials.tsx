'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote:
      '"The way the EsportsTravel Summit is engaging the right people that truly believe in elevating this industry has been inspiring. It\'s a win-win for everyone."',
    cite: 'HOK',
  },
  {
    quote:
      '"I certainly recommend attending the EsportsTravel Summit, especially if you\'re trying to understand opportunities that exist outside of your typical partners. When you\'re looking at bringing your esports product out into a global marketplace, the Summit is a tremendous opportunity to learn about who the players are, find opportunities and solidify strong partnerships."',
    cite: 'Overwolf',
  },
  {
    quote:
      '"The EsportsTravel Summit is really innovative. It\'s the first that focused on this emerging trend and is really becoming a major factor in the esports industry."',
    cite: 'Populous',
  },
  {
    quote:
      '"The EsportsTravel Summit provides everyone an opportunity to grow new business. That\'s why destinations should attend the Summit. Esports is a fast-emerging segment within our industry. There\'s opportunity for all of us."',
    cite: 'CVB Executive',
  },
  {
    quote:
      '"The EsportsTravel Summit has provided a tremendous opportunity to connect. It\'s been fantastic. We\'ve had an opportunity to outreach with folks that will be both beneficial for our efforts going forward."',
    cite: 'U.S. Anti-Doping Agency',
  },
];

const AUTO_CYCLE_MS = 6000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  function goT(n: number) {
    setCurrent(n);
  }

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, AUTO_CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-dark text-white py-16 px-8">
      <div className="max-w-170 mx-auto text-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={current === i ? 'block animate-t-fade' : 'hidden'}
          >
            <blockquote className="text-[0.96rem] leading-[1.8] text-white/82 italic mb-4">
              {t.quote}
            </blockquote>
            <cite className="font-montserrat font-bold text-[0.7rem] tracking-widest uppercase text-white/40 not-italic">
              {t.cite}
            </cite>
          </div>
        ))}

        <div className="flex gap-2 justify-center mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-7 h-0.75 rounded-sm border-0 cursor-pointer p-0 transition-colors duration-300 ${current === i ? 'bg-white' : 'bg-white/20'}`}
              onClick={() => goT(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
