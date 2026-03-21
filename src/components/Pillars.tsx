import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
};

const pillars = [
  {
    id: 'ai',
    badge: 'Filar 1',
    title: 'AI Expert',
    subtitle: 'Sztuczna inteligencja dla biznesu',
    color: 'myzer-orange',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    points: [
      {
        title: 'Szkolenia AI dla firm',
        desc: 'Warsztaty praktyczne: ChatGPT, Claude, automatyzacja z AI. Uczestnicy wychodzą z gotowymi narzędziami, nie tylko wiedzą.',
      },
      {
        title: 'Wdrożenia AI w procesach B2B',
        desc: 'Automatyzacja raportów, inteligentny CRM, generowanie ofert, analiza danych — wdrożenia szyte na miarę.',
      },
      {
        title: 'Content & thought leadership',
        desc: 'Artykuły eksperckie, LinkedIn, newsletter. Budowanie pozycji eksperta AI w Twojej branży.',
      },
    ],
    clients: ['Aklima', 'Edytor', 'Immobilia', 'Majmax', 'Dako'],
  },
  {
    id: 'intra',
    badge: 'Filar 2',
    title: 'Intralogistyka & AGV/AMR',
    subtitle: '18 lat doświadczenia w optymalizacji',
    color: 'myzer-navy',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    points: [
      {
        title: 'Wdrożenia AGV/AMR',
        desc: 'Pełny cykl: analiza potrzeb → dobór technologii → implementacja → optymalizacja. Metodologia MBPA (Myzer Best Practices Academy).',
      },
      {
        title: 'Lean & DMAIC',
        desc: 'Value Stream Mapping, Milk Run, PFEP, Gemba Walk. Redukcja waste i optymalizacja przepływów materiałowych.',
      },
      {
        title: 'Systemy transportu wewnętrznego',
        desc: 'Systemy rurowe, przenośniki, regały. Projektowanie layout\'ów i kalkulacja ROI dla inwestycji intralogistycznych.',
      },
    ],
    clients: ['Toyota', 'BSH', 'Continental', 'Volkswagen'],
  },
];

export default function Pillars() {
  return (
    <section id="filary" className="section-padding bg-myzer-grey">
      <div className="container-narrow">
        <motion.div className="text-center mb-16" {...fadeInUp} transition={{ duration: 0.6 }}>
          <span className="inline-block px-3 py-1 bg-myzer-orange/10 text-myzer-orange font-heading font-semibold text-sm rounded-full mb-6">
            Ekspertyza
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-myzer-dark mb-4">
            Dwa filary, jedna misja
          </h2>
          <p className="text-grey-medium max-w-2xl mx-auto">
            Łączę świat nowych technologii z twardym doświadczeniem operacyjnym.
            To unikalne połączenie daje moim klientom realną przewagę.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                  pillar.color === 'myzer-orange' ? 'bg-myzer-orange/10 text-myzer-orange' : 'bg-myzer-navy/10 text-myzer-navy'
                }`}>
                  {pillar.icon}
                </div>
                <div>
                  <span className={`text-xs font-heading font-bold uppercase tracking-wider ${
                    pillar.color === 'myzer-orange' ? 'text-myzer-orange' : 'text-myzer-navy'
                  }`}>
                    {pillar.badge}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-myzer-dark mt-1">{pillar.title}</h3>
                  <p className="text-grey-cool text-sm mt-1">{pillar.subtitle}</p>
                </div>
              </div>

              {/* Points */}
              <div className="space-y-6">
                {pillar.points.map((point) => (
                  <div key={point.title}>
                    <h4 className="font-heading font-semibold text-myzer-dark mb-1">{point.title}</h4>
                    <p className="text-grey-medium text-sm leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>

              {/* Clients */}
              <div className="mt-8 pt-6 border-t border-myzer-grey">
                <p className="text-xs text-grey-cool font-heading font-medium uppercase tracking-wider mb-3">
                  Wybrani klienci
                </p>
                <div className="flex flex-wrap gap-2">
                  {pillar.clients.map((client) => (
                    <span key={client} className="px-3 py-1 bg-myzer-grey text-grey-medium text-sm font-medium rounded-md">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
