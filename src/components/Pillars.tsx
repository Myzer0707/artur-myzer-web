import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const pillars = [
  {
    id: 'ai',
    badge: 'Filar 1',
    title: 'AI Expert',
    subtitle: 'Sztuczna inteligencja dla biznesu',
    gradient: 'from-am-primary to-am-primary/80',
    accentColor: 'am-primary',
    glowColor: 'rgba(0,105,145,0.15)',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    points: [
      { title: 'Szkolenia AI dla firm', desc: 'Warsztaty praktyczne: ChatGPT, Claude, automatyzacja z AI. Uczestnicy wychodza z gotowymi narzedziami.', icon: '01' },
      { title: 'Wdrozenia AI w procesach B2B', desc: 'Automatyzacja raportow, inteligentny CRM, generowanie ofert, analiza danych — szyte na miare.', icon: '02' },
      { title: 'Content & thought leadership', desc: 'Artykuly eksperckie, LinkedIn, newsletter. Budowanie pozycji eksperta AI w Twojej branzy.', icon: '03' },
    ],
    clients: ['Aklima', 'Edytor', 'Immobilia', 'Majmax', 'Dako'],
  },
  {
    id: 'intra',
    badge: 'Filar 2',
    title: 'Intralogistyka & AGV/AMR',
    subtitle: '18 lat doswiadczenia w optymalizacji',
    gradient: 'from-am-mint to-am-cyan',
    accentColor: 'am-mint',
    glowColor: 'rgba(74,219,200,0.15)',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    points: [
      { title: 'Wdrozenia AGV/AMR', desc: 'Pelny cykl: analiza potrzeb, dobor technologii, implementacja, optymalizacja. Metodologia MBPA.', icon: '01' },
      { title: 'Lean & DMAIC', desc: 'Value Stream Mapping, Milk Run, PFEP, Gemba Walk. Redukcja waste i optymalizacja przeplywow.', icon: '02' },
      { title: 'Systemy transportu wewnetrznego', desc: "Systemy rurowe, przenosniki, regaly. Projektowanie layout'ow i kalkulacja ROI.", icon: '03' },
    ],
    clients: ['Toyota', 'BSH', 'Continental', 'Volkswagen'],
  },
];

export default function Pillars() {
  return (
    <section id="filary" className="section-padding bg-am-grey-lighter relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="container-narrow relative z-10">
        <motion.div className="text-center mb-16 md:mb-20" {...fadeUp} transition={{ duration: 0.6 }}>
          <span className="badge-primary mb-6">Ekspertyza</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-am-dark mb-4">
            Dwa filary,{' '}
            <span className="text-gradient-primary">jedna misja</span>
          </h2>
          <p className="text-am-grey-dark max-w-2xl mx-auto text-lg">
            Lacze swiat nowych technologii z twardym doswiadczeniem operacyjnym.
            To unikalne polaczenie daje moim klientom realna przewage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              className="group relative bg-white rounded-2xl overflow-hidden"
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${pillar.gradient}`} />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <motion.div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      pillar.accentColor === 'am-primary'
                        ? 'bg-am-primary/10 text-am-primary group-hover:bg-am-primary group-hover:text-white'
                        : 'bg-am-mint/10 text-am-mint group-hover:bg-am-mint group-hover:text-am-dark'
                    }`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    {pillar.icon}
                  </motion.div>
                  <div>
                    <span className={`text-xs font-heading font-bold uppercase tracking-[0.15em] ${
                      pillar.accentColor === 'am-primary' ? 'text-am-primary' : 'text-am-mint'
                    }`}>{pillar.badge}</span>
                    <h3 className="text-2xl font-heading font-bold text-am-dark mt-1">{pillar.title}</h3>
                    <p className="text-am-grey text-sm mt-1">{pillar.subtitle}</p>
                  </div>
                </div>

                {/* Points */}
                <div className="space-y-6">
                  {pillar.points.map((point, j) => (
                    <motion.div
                      key={point.title}
                      className="flex gap-4 group/item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.15 + j * 0.1 }}
                    >
                      <span className={`text-xs font-mono font-bold mt-1 shrink-0 ${
                        pillar.accentColor === 'am-primary' ? 'text-am-primary/40' : 'text-am-mint/40'
                      }`}>{point.icon}</span>
                      <div>
                        <h4 className="font-heading font-semibold text-am-dark mb-1 group-hover/item:text-am-primary transition-colors">{point.title}</h4>
                        <p className="text-am-grey-dark text-sm leading-relaxed">{point.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Clients */}
                <div className="mt-8 pt-6 border-t border-am-grey-light">
                  <p className="text-xs text-am-grey font-heading font-medium uppercase tracking-[0.15em] mb-3">Wybrani klienci</p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.clients.map((client) => (
                      <span key={client} className="px-3 py-1.5 bg-am-grey-lighter text-am-grey-dark text-sm font-medium rounded-lg hover:bg-am-primary/5 hover:text-am-primary transition-colors cursor-default">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"
                style={{ background: pillar.glowColor }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
