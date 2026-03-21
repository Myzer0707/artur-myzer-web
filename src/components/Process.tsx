import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const steps = [
  {
    number: '01',
    title: 'Analiza',
    duration: 'Tydzień 1',
    desc: 'Mapujemy procesy Twojej firmy. Identyfikujemy co zabiera czas, gdzie są wąskie gardła i które zadania JARVIS może przejąć natychmiast.',
    items: ['Audyt procesów', 'Analiza narzędzi', 'Mapa priorytetów'],
  },
  {
    number: '02',
    title: 'Konfiguracja',
    duration: 'Tydzień 1–2',
    desc: 'Konfigurujemy JARVIS pod specyfikę Twojego biznesu. Integrujemy z istniejącymi systemami, CRM i narzędziami.',
    items: ['Integracja CRM', 'Setup workflow', 'Konfiguracja agentów AI'],
  },
  {
    number: '03',
    title: 'Uruchomienie',
    duration: 'Tydzień 2',
    desc: 'JARVIS przejmuje operacje. Testujemy każdy workflow, wprowadzamy poprawki i przekazujemy pełny dashboard z KPI.',
    items: ['Testy systemowe', 'Szkolenie zespołu', 'Go-live'],
  },
  {
    number: '04',
    title: 'Optymalizacja',
    duration: 'Ongoing',
    desc: 'JARVIS uczy się i doskonali. Co miesiąc raport wyników, nowe automatyzacje, aktualizacje zgodnie z rozwojem firmy.',
    items: ['Miesięczne raporty', 'Nowe automatyzacje', 'Wsparcie 24/7'],
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="proces"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      {/* Decorative */}
      <div
        className="absolute left-0 bottom-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(151,55,0,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="flex justify-center mb-6">
          <span className="badge-orange">Jak pracujemy</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white text-center mb-6 max-w-3xl mx-auto"
          style={{ letterSpacing: '-0.02em' }}
        >
          Wdrożenie w{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #eb790e, #f59332)' }}
          >
            14 dni
          </span>
        </motion.h2>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-lg text-white/45 text-center max-w-2xl mx-auto mb-16 font-body leading-relaxed"
        >
          Prosty, sprawdzony proces. Bez długich projektów, bez angażowania IT,
          bez miesięcy czekania na efekty.
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              custom={3 + i} variants={fadeUp}
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="relative group"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-full w-5 h-px z-10"
                  style={{ background: 'rgba(235,121,14,0.2)' }}
                />
              )}

              <div
                className="h-full p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-4xl font-heading font-bold"
                    style={{ color: 'rgba(235,121,14,0.25)' }}
                  >
                    {step.number}
                  </span>
                  <span
                    className="text-xs font-heading font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(235,121,14,0.08)',
                      color: '#f59332',
                    }}
                  >
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-white text-xl mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm font-body leading-relaxed mb-4">{step.desc}</p>

                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-white/50 font-body">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#eb790e' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          custom={8} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col items-center mt-12 gap-4"
        >
          <p className="text-white/30 text-sm font-body text-center">
            Gotowy żeby zacząć? Pierwsze spotkanie jest bezpłatne.
          </p>
          <a href="#kontakt" className="btn-primary text-base group">
            Umów bezpłatną konsultację
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
