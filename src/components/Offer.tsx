import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const offers = [
  {
    title: 'Sesje 1-na-1',
    desc: 'Indywidualne wdrozenie AI w Twojej firmie. Analiza procesow, konfiguracja narzedzi, szkolenie zespolu.',
    features: ['Analiza aktualnych procesow', 'Dobor narzedzi AI', 'Konfiguracja i wdrozenie', 'Szkolenie zespolu'],
    badge: 'AI',
    gradient: 'from-am-mint to-cyan-400',
    available: true,
  },
  {
    title: 'Konsulting intralogistyczny',
    desc: 'Audyt, projektowanie layoutu, analiza feasibility AGV/AMR. Pelna metodologia DMAIC.',
    features: ['Audyt intralogistyczny', 'Projektowanie layoutu', 'Feasibility study AGV', 'Wdrozenie i monitoring'],
    badge: 'INTRA',
    gradient: 'from-am-primary to-am-mint',
    available: true,
  },
  {
    title: 'Wdrozenie procesu sprzedazy AI',
    desc: 'Kompletny system sprzedazowy oparty na AI — od lead generation po zamkniecie dealu.',
    features: ['Lead generation', 'CRM automation', 'Cold outreach sequences', 'Dashboard i raporting'],
    badge: 'AI + SALES',
    gradient: 'from-am-primary to-cyan-400',
    available: true,
  },
];

const comingSoon = [
  { title: 'Szkolenia grupowe', desc: 'Warsztaty AI dla zespolow — teoria i praktyka w jeden dzien' },
  { title: 'Kursy online', desc: 'Platforma e-learningowa z kursami AI i intralogistyki' },
];

export default function Offer() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="oferta" ref={sectionRef} className="relative bg-am-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-am-dark via-am-dark-lighter/30 to-am-dark pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-am-mint/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-narrow section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="badge-mint text-xs uppercase tracking-widest mb-6 inline-block">Oferta</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Jak mogę pomóc?
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-body">
            Trzy sciezki wspolpracy — kazda dopasowana indywidualnie do Twoich potrzeb.
          </p>
        </motion.div>

        {/* Offer cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="relative group"
            >
              <div className="card-glass p-8 h-full flex flex-col hover:bg-white/10 transition-all duration-500">
                {/* Badge */}
                <span className={`inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-6 bg-gradient-to-r ${offer.gradient} text-am-dark`}>
                  {offer.badge}
                </span>

                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:text-am-mint transition-colors">
                  {offer.title}
                </h3>
                <p className="text-white/50 font-body text-sm leading-relaxed mb-6 flex-grow">
                  {offer.desc}
                </p>

                <ul className="space-y-2 mb-8">
                  {offer.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/70 text-sm font-body">
                      <svg className="w-4 h-4 text-am-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#kontakt" className="btn-ghost text-sm justify-center group/btn">
                  Umow konsultacje
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-white/30 text-sm font-heading uppercase tracking-widest mb-6">Wkrótce</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {comingSoon.map((item) => (
              <div key={item.title} className="card-glass p-6 opacity-50 cursor-default">
                <h4 className="font-heading font-semibold text-white/60 mb-2">{item.title}</h4>
                <p className="text-white/30 text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-sm font-body mt-8 italic">
            "Kazde wdrozenie jest indywidualne — porozmawiajmy"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
