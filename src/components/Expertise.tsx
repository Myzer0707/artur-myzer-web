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

const aiItems = [
  'JARVIS — AI Operating System',
  'Automatyzacja workflow (n8n, Make)',
  'Integracje AI (Claude, GPT, Perplexity)',
  'AI Lead Generation',
  'Content marketing na autopilocie',
  'Wdrożenia AI dla firm B2B',
  'Szkolenia AI dla zespołów',
  'Personal brand arturmyzer.ai',
];

const intraItems = [
  'Systemy AGV/AMR — wdrożenia i optymalizacja',
  'Myzer Intra — systemy rurowe modularne',
  'Stanowiska montażowe i wózki milkrun',
  'Visual Management (VMT) — tablice 5S',
  'Regały flow-rack i shadow boards',
  'Lean Manufacturing & DMAIC',
  'Projektowanie layoutów hal produkcyjnych',
  'Systemy Alufance — ogrodzenia aluminiowe',
];

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="ekspertyza"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute right-0 top-1/3 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(235,121,14,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="flex justify-center mb-6">
          <span className="badge-orange">Ekspertyza</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white text-center mb-6 max-w-3xl mx-auto"
          style={{ letterSpacing: '-0.02em' }}
        >
          Dwa filary,{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #eb790e, #f59332)' }}
          >
            jedna synergia
          </span>
        </motion.h2>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-lg text-white/45 text-center max-w-2xl mx-auto mb-16 font-body leading-relaxed"
        >
          Rozumiem zarówno technologię AI jak i realia produkcji.
          To połączenie sprawia, że buduję systemy które naprawdę działają w firmach.
        </motion.p>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Expert */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="p-8 rounded-2xl"
            style={{
              background: 'rgba(235,121,14,0.05)',
              border: '1px solid rgba(235,121,14,0.15)',
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(235,121,14,0.15)', color: '#eb790e' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-xl">AI Expert</h3>
                <p className="text-xs text-white/35 font-body">arturmyzer.ai</p>
              </div>
            </div>

            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold mb-6"
              style={{ background: 'rgba(235,121,14,0.12)', color: '#f59332' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#eb790e] animate-pulse" />
              JARVIS — flagship product
            </div>

            <ul className="space-y-3">
              {aiItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-white/55 font-body">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(235,121,14,0.12)' }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="#eb790e" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Intralogistics */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="p-8 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-xl">Intralogistyk</h3>
                <p className="text-xs text-white/35 font-body">Myzer Intra, VMT, Alufance</p>
              </div>
            </div>

            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold mb-6"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              15+ lat doświadczenia
            </div>

            <ul className="space-y-3">
              {intraItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-white/55 font-body">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="rgba(255,255,255,0.5)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
