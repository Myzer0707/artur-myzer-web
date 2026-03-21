import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const trainings = [
  {
    title: 'AI dla zespolow B2B',
    duration: '1 dzien (6h)',
    format: 'Warsztat stacjonarny / online',
    audience: 'Zespoly sprzedazy, marketingu, operacji',
    points: [
      'ChatGPT & Claude — od promptow do workflow',
      'Automatyzacja raportow i analiz',
      'AI w sprzedazy: lead scoring, personalizacja',
      'Kazdy uczestnik wychodzi z 3 narzedziami AI',
    ],
    highlight: 'Najpopularniejsze',
    accentColor: 'am-primary',
    featured: true,
  },
  {
    title: 'Wdrozenie AI w firmie',
    duration: '2-5 dni',
    format: 'Konsulting + implementacja',
    audience: 'C-level, kierownicy dzialow',
    points: [
      'Audyt procesow pod katem AI',
      'Mapa wdrozenia — quick wins + strategia',
      'Implementacja 3-5 automatyzacji na zywo',
      'Szkolenie zespolu + dokumentacja',
    ],
    highlight: 'Najwyzszy ROI',
    accentColor: 'am-mint',
    featured: false,
  },
  {
    title: 'Intralogistyka & AGV/AMR',
    duration: 'Indywidualnie',
    format: 'Konsulting / szkolenie',
    audience: 'Dyrektorzy operacyjni, inzynierowie',
    points: [
      'Metodologia wdrozen AGV/AMR (MBPA)',
      'Lean & DMAIC w logistyce wewnetrznej',
      'Value Stream Mapping — warsztaty',
      'Audyt intralogistyczny z rekomendacjami',
    ],
    highlight: '18 lat doswiadczenia',
    accentColor: 'am-cyan',
    featured: false,
  },
];

export default function Training() {
  return (
    <section id="szkolenia" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-am-primary/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-am-mint/[0.02] rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        <motion.div className="text-center mb-16 md:mb-20" {...fadeUp} transition={{ duration: 0.6 }}>
          <span className="badge-mint mb-6">Szkolenia & Konsulting</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-am-dark mb-4">
            Praktyczne szkolenia,{' '}
            <span className="text-gradient">mierzalne wyniki</span>
          </h2>
          <p className="text-am-grey-dark max-w-2xl mx-auto text-lg">
            Nie ucze teorii. Kazdy uczestnik wychodzi z konkretnymi narzedziami
            i umiejetnosciami do zastosowania juz nastepnego dnia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {trainings.map((training, i) => (
            <motion.div
              key={training.title}
              className={`relative group rounded-2xl transition-all duration-500 ${
                training.featured
                  ? 'bg-am-dark text-white md:-mt-4 md:mb-4 shadow-2xl shadow-am-dark/20'
                  : 'bg-am-grey-lighter hover:shadow-xl hover:shadow-black/5'
              }`}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              {/* Animated border for featured */}
              {training.featured && (
                <div className="absolute inset-0 rounded-2xl border-gradient opacity-50" />
              )}

              {/* Badge */}
              <div className="absolute -top-3 left-8 z-10">
                <motion.span
                  className={`px-4 py-1.5 text-xs font-heading font-bold rounded-full shadow-lg ${
                    training.featured
                      ? 'bg-gradient-to-r from-am-mint to-am-cyan text-am-dark'
                      : training.accentColor === 'am-mint'
                        ? 'bg-am-mint text-am-dark'
                        : 'bg-am-cyan text-am-dark'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {training.highlight}
                </motion.span>
              </div>

              <div className="p-8 pt-10 relative z-10">
                <h3 className={`text-xl font-heading font-bold mb-4 ${
                  training.featured ? 'text-white' : 'text-am-dark'
                }`}>{training.title}</h3>

                {/* Meta */}
                <div className="space-y-2 mb-6">
                  {[
                    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: training.duration },
                    { icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z', text: training.format },
                    { icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z', text: training.audience },
                  ].map(({ icon, text }) => (
                    <div key={text} className={`flex items-center gap-2.5 text-sm ${
                      training.featured ? 'text-white/70' : 'text-am-grey-dark'
                    }`}>
                      <svg className={`w-4 h-4 shrink-0 ${
                        training.featured ? 'text-am-mint' : 'text-am-primary'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                      </svg>
                      {text}
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${
                  training.featured ? 'bg-white/10' : 'bg-am-grey-light'
                }`} />

                {/* Points */}
                <ul className="space-y-3 mb-8">
                  {training.points.map((point) => (
                    <li key={point} className={`flex items-start gap-2.5 text-sm ${
                      training.featured ? 'text-white/80' : 'text-am-grey-dark'
                    }`}>
                      <svg className="w-5 h-5 text-am-mint shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#kontakt"
                  className={`block text-center py-3.5 px-6 font-heading font-semibold text-sm rounded-xl transition-all duration-300 ${
                    training.featured
                      ? 'bg-gradient-to-r from-am-mint to-am-cyan text-am-dark hover:shadow-[0_4px_20px_rgba(74,219,200,0.4)] hover:-translate-y-0.5'
                      : 'border-2 border-am-dark/10 text-am-dark hover:border-am-primary hover:text-am-primary hover:shadow-[0_4px_20px_rgba(0,105,145,0.1)]'
                  }`}
                >
                  Zapytaj o szczegoly
                </a>
              </div>

              {/* Hover glow for non-featured */}
              {!training.featured && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-am-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
