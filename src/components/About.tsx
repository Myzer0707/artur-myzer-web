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

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: 'AI Expert',
    description: 'Buduję systemy AI, które działają — nie prezentacje. JARVIS to mój flagship product.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    label: 'Intralogistyk',
    description: '15+ lat przy wdrożeniach AGV, AMR, systemów Lean i DMAIC w produkcji.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Przedsiębiorca',
    description: 'Właściciel 5 firm: Myzer Intra, VMT, Alufance, Mayhpi, arturmyzer.ai.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    label: 'Operator',
    description: 'JARVIS zarządza moimi firmami automatycznie — sprzedaż, marketing, finanse.',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="o-mnie" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: '#0d0d0d' }}>
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(151,55,0,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section label */}
        <motion.div
          custom={0} variants={fadeUp}
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="flex justify-center mb-6"
        >
          <span className="badge-orange">O mnie</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          custom={1} variants={fadeUp}
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white text-center mb-6 max-w-3xl mx-auto"
          style={{ letterSpacing: '-0.02em' }}
        >
          Łączę świat AI z{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #eb790e, #f59332)' }}
          >
            realnym biznesem
          </span>
        </motion.h2>

        <motion.p
          custom={2} variants={fadeUp}
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-lg text-white/45 text-center max-w-2xl mx-auto mb-16 font-body leading-relaxed"
        >
          Nie jestem konsultantem który opowiada o AI na slajdach.
          Jestem praktykiem — zbudowałem JARVIS, który dziś zarządza moimi 5 firmami.
        </motion.p>

        {/* Two columns layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left — bio */}
          <motion.div
            custom={3} variants={fadeUp}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            <div
              className="h-full p-8 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(235,121,14,0.12)', color: '#eb790e' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-white">Artur Myziak</h3>
              </div>
              <p className="text-white/55 font-body leading-relaxed mb-4 text-[15px]">
                Przez 15+ lat pracowałem przy wdrożeniach systemów intralogistycznych — AGV, AMR, Lean,
                DMAIC, systemy rurowe modularne. Widziałem jak firmy tracą czas na powtarzalne procesy.
              </p>
              <p className="text-white/55 font-body leading-relaxed mb-6 text-[15px]">
                Postanowiłem to zmienić. Zbudowałem JARVIS — AI Operating System który dziś zarządza
                sprzedażą, marketingiem i operacjami moich 5 firm równocześnie. Teraz oferuję go innym.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AGV/AMR', 'Lean Manufacturing', 'DMAIC', 'AI Systems', 'Claude AI', 'n8n Automation'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-heading font-semibold"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — highlights grid */}
          <motion.div
            custom={4} variants={fadeUp}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: 'rgba(235,121,14,0.1)', color: '#eb790e' }}
                >
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-white text-sm mb-1.5">{item.label}</h4>
                <p className="text-white/40 text-xs font-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
