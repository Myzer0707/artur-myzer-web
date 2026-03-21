import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const steps = [
  {
    num: '01',
    title: 'Rozmowa & Analiza',
    desc: 'Poznaje Twoj biznes, procesy i wyzwania. Identyfikuje obszary o najwyzszym potencjale.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Strategia & Plan',
    desc: 'Przygotowuje mape wdrozenia z quick wins i celami dlugoterminowymi. Mierzalne KPI.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Wdrozenie & Szkolenie',
    desc: 'Implementuje rozwiazania, szkole zespol i dostarczam dokumentacje. Wszystko hands-on.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Wyniki & Optymalizacja',
    desc: 'Mierze efekty, optymalizuje i zapewniam, ze inwestycja przynosi zwrot.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-am-dark relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-am-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-am-mint/10 rounded-full blur-[80px]" />

      <div className="container-narrow relative z-10">
        <motion.div className="text-center mb-16 md:mb-20" {...fadeUp}>
          <span className="badge-mint mb-6">Jak pracuje</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Sprawdzony{' '}
            <span className="text-gradient">proces</span>
          </h2>
          <p className="text-am-grey max-w-2xl mx-auto text-lg">
            Kazdy projekt realizuje wedlug wypracowanej metodologii.
            Od analizy po mierzalne wyniki w 4 krokach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative group"
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px">
                  <motion.div
                    className="h-full bg-gradient-to-r from-am-mint/30 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              )}

              <div className="card-glass p-6 lg:p-8 h-full hover:bg-white/[0.08] transition-all duration-500 group-hover:border-am-mint/20">
                {/* Number + Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-heading font-bold text-am-mint/20 group-hover:text-am-mint/40 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-am-mint/10 flex items-center justify-center text-am-mint group-hover:bg-am-mint group-hover:text-am-dark transition-all duration-300">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-heading font-bold text-white mb-3">{step.title}</h3>
                <p className="text-am-grey text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-16" {...fadeUp}>
          <a href="#kontakt" className="btn-gradient text-center justify-center group inline-flex">
            Zacznijmy wspolprace
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
