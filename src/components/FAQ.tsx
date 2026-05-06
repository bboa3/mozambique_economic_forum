'use client';

import { useState } from 'react';

// FAQ item data — question/answer pairs extracted from the source HTML.
const faqItems = [
  {
    question:
      'How does the EsportsTravel Summit differ from other esports conferences?',
    answer:
      'While there are other esports business conferences, the EsportsTravel Summit is the only one that focuses entirely on the in-person events side of the industry. The summit attracts the decision-makers at esports organizations who are responsible for site selection of venues and host cities for in-person esports events. At the summit you can have one-on-one appointments with these decision-makers. In addition, we provide exclusive education on the key trends affecting in-person esports events and unrivaled networking opportunities to enhance your business development.',
  },
  {
    question: 'How does the EsportsTravel Summit work?',
    answer:
      'At our marketplace, you can meet in pre-arranged appointments with up to 22 event organizers one-on-one to discuss their event needs. If you choose not to participate in our marketplace, you can still gain access to our world-class education and networking opportunities, including off-site tours, an opening party, a happy hour and a late-night lounge where you can have more casual conversations.',
  },
  {
    question: 'Why should my market care about esports?',
    answer:
      'As esports and video-game competitions evolve, they do so with a generation that is growing up invested in different game titles and competitions — often with more affinity than traditional sports. Your community likely already has a thriving gaming community. Esports fans are willing to travel and spend money while traveling to see the best gamers compete at in-person events.',
  },
  {
    question: 'What is the economic impact of in-person esports events?',
    answer:
      'Esports events generate room nights, and increasingly so, although many communities are experiencing additional returns on investment not related specifically to room nights. Esports fans have been proven to spend considerable money while in destinations, from concessions at venues to off-site activities.',
  },
  {
    question: 'What are esports event organizers looking for?',
    answer:
      'Esports event organizers are looking for partners who can help enhance their events, work with them to secure venues and hotel room blocks, and suggest other activities in the community for their participants to experience. Organizers are looking for long-term relationships with destinations that truly understand and embrace the esports community.',
  },
  {
    question:
      "Our destination doesn't have a venue large enough to host esports. Why should we pursue these events?",
    answer:
      'Your destination likely has many venues that can host in-person events. Like traditional sports, professional events require large arenas — but the majority of esports events are staged in convention centers, conference centers, hotel ballrooms, theaters and other smaller venues that most destinations can accommodate. Esports event organizers are looking for help in siting their events.',
  },
];

// FAQ section: collapsible drawer (toggle entire FAQ open/closed) containing
// an accordion of individual Q&A items. First item is open by default,
// matching the source HTML's initial state.
export default function FAQ() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  // Track which single item is open (null = none). Default: index 0 open.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFaq() {
    setDrawerOpen((prev) => !prev);
  }

  // Accordion: clicking an already-open item closes it; clicking a closed item
  // opens it and closes any previously open item.
  function toggleItem(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div id="program">
      {/* Drawer toggle bar */}
      <div
        className="bg-blue py-4 px-8 flex items-center justify-center gap-4 cursor-pointer select-none"
        id="faqBar"
        onClick={toggleFaq}
      >
        <h3 className="font-montserrat font-extrabold text-[0.78rem] tracking-[0.18em] uppercase text-white">
          FAQ
        </h3>
        <span className={`text-white text-[0.9rem] transition-transform duration-300 ${drawerOpen ? 'rotate-180' : ''}`}>
          ▲
        </span>
      </div>

      {/* Collapsible drawer */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out bg-white ${drawerOpen ? 'max-h-750' : 'max-h-0'}`}
        id="faqDrawer"
      >
        <div className="max-w-215 mx-auto py-8 px-8 pb-10">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#ddd] last:border-b-0"
            >
              <button
                className="w-full bg-transparent border-0 cursor-pointer text-left flex items-start justify-between gap-4 py-[1.1rem] font-montserrat font-bold text-[0.83rem] text-[#222] leading-[1.4] transition-colors duration-200 hover:text-blue"
                onClick={() => toggleItem(index)}
              >
                {item.question}
                <span className={`text-blue shrink-0 text-[0.8rem] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`overflow-hidden transition-[max-height] duration-350 ease-in-out text-[0.845rem] leading-[1.8] text-[#666] ${openIndex === index ? 'max-h-125 pb-[1.1rem]' : 'max-h-0'}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
