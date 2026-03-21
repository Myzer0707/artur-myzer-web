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
    highlightColor: 'bg-am-primary',
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
    highlightColor: 'bg-am-dark',
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
    highlightColor: 'bg-am-mint text-am-dark',
  },
];

export default function Training() {
  return (
    <section id="szkolenia" className="section-padding bg-white">
      <div className="container-narrow">
        <motion.div className="text-center mb-16" {...fadeInUp} transition={{ duration: 0.6 }}>
          <span className="inline-block px-3 py-1 bg-am-primary/10 text-am-primary font-heading font-semibold text-sm rounded-full mb-6">
            Szkolenia & Konsulting
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-am-dark mb-4">Praktyczne szkolenia, mierzalne wyniki</h2>
          <p className="text-am-grey-dark max-w-2xl mx-auto">
            Nie uczę teorii. Każdy uczestnik wychodzi z konkretnymi narzędziami
            i umiejętnościami, które może zastosować już następnego dnia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainings.map((training, i) => (
            <motion.div key={training.title} className="relative bg-am-grey-light rounded-2xl p-8 hover:shadow-lg transition-shadow" {...fadeInUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <span className={`absolute -top-3 left-8 px-3 py-1 ${training.highlightColor} text-white text-xs font-heading font-bold rounded-full`}>
                {training.highlight}
              </span>

              <h3 className="text-xl font-heading font-bold text-am-dark mt-4 mb-4">{training.title}</h3>

              <div className="space-y-2 mb-6 text-sm">
                {[
                  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: training.duration },
                  { icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z', text: training.format },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-am-grey-dark">
                    <svg className="w-4 h-4 text-am-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                    </svg>
                    {text}
                  </div>
                ))}
              </div>

              <ul className="space-y-3 mb-8">
                {training.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-am-grey-dark">
                    <svg className="w-5 h-5 text-am-mint shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              <a href="#kontakt" className="block text-center py-3 px-6 border-2 border-am-primary text-am-primary font-heading font-semibold text-sm rounded-lg hover:bg-am-primary hover:text-white transition-all">
                Zapytaj o szczegóły
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
