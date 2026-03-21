import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
};

const trainings = [
  {
    title: 'AI dla zespołów B2B',
    duration: '1 dzień (6h)',
    format: 'Warsztat stacjonarny / online',
    audience: 'Zespoły sprzedaży, marketingu, operacji',
    points: [
      'ChatGPT & Claude — od promptów do workflow',
      'Automatyzacja raportów i analiz',
      'AI w sprzedaży: lead scoring, personalizacja, follow-up',
      'Każdy uczestnik wychodzi z 3 gotowymi narzędziami AI',
    ],
    highlight: 'Najpopularniejsze',
    highlightColor: 'bg-myzer-orange',
  },
  {
    title: 'Wdrożenie AI w firmie',
    duration: '2-5 dni',
    format: 'Konsulting + implementacja',
    audience: 'C-level, kierownicy działów',
    points: [
      'Audyt procesów pod kątem AI',
      'Mapa wdrożenia — quick wins + strategia długoterminowa',
      'Implementacja 3-5 automatyzacji na żywo',
      'Szkolenie zespołu + dokumentacja',
    ],
    highlight: 'Najwyższy ROI',
    highlightColor: 'bg-myzer-navy',
  },
  {
    title: 'Intralogistyka & AGV/AMR',
    duration: 'Indywidualnie',
    format: 'Konsulting / szkolenie',
    audience: 'Dyrektorzy operacyjni, inżynierowie produkcji',
    points: [
      'Metodologia wdrożeń AGV/AMR (MBPA)',
      'Lean & DMAIC w logistyce wewnętrznej',
      'Value Stream Mapping — warsztaty',
      'Audyt intralogistyczny z rekomendacjami',
    ],
    highlight: '18 lat doświadczenia',
    highlightColor: 'bg-myzer-green',
  },
];

export default function Training() {
  return (
    <section id="szkolenia" className="section-padding bg-white">
      <div className="container-narrow">
        <motion.div className="text-center mb-16" {...fadeInUp} transition={{ duration: 0.6 }}>
          <span className="inline-block px-3 py-1 bg-myzer-orange/10 text-myzer-orange font-heading font-semibold text-sm rounded-full mb-6">
            Szkolenia & Konsulting
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-myzer-dark mb-4">
            Praktyczne szkolenia, mierzalne wyniki
          </h2>
          <p className="text-grey-medium max-w-2xl mx-auto">
            Nie uczę teorii. Każdy uczestnik wychodzi z konkretnymi narzędziami
            i umiejętnościami, które może zastosować już następnego dnia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainings.map((training, i) => (
            <motion.div
              key={training.title}
              className="relative bg-myzer-grey rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Highlight badge */}
              <span className={`absolute -top-3 left-8 px-3 py-1 ${training.highlightColor} text-white text-xs font-heading font-bold rounded-full`}>
                {training.highlight}
              </span>

              <h3 className="text-xl font-heading font-bold text-myzer-dark mt-4 mb-4">
                {training.title}
              </h3>

              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-center gap-2 text-grey-medium">
                  <svg className="w-4 h-4 text-myzer-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {training.duration}
                </div>
                <div className="flex items-center gap-2 text-grey-medium">
                  <svg className="w-4 h-4 text-myzer-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {training.format}
                </div>
                <div className="flex items-center gap-2 text-grey-medium">
                  <svg className="w-4 h-4 text-myzer-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  {training.audience}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {training.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-grey-medium">
                    <svg className="w-5 h-5 text-myzer-orange shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="block text-center py-3 px-6 border-2 border-myzer-dark text-myzer-dark font-heading font-semibold text-sm rounded-lg
                         hover:bg-myzer-dark hover:text-white transition-all"
              >
                Zapytaj o szczegóły
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
