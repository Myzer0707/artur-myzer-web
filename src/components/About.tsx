import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const skills = [
  { name: 'AI & Machine Learning', level: 90 },
  { name: 'Lean Manufacturing / DMAIC', level: 95 },
  { name: 'AGV / AMR Implementations', level: 98 },
  { name: 'Value Stream Mapping', level: 92 },
  { name: 'B2B Sales Automation', level: 85 },
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-heading font-medium text-am-dark">{name}</span>
        <span className="text-sm font-mono text-am-primary font-medium">{level}%</span>
      </div>
      <div className="h-2 bg-am-grey-light rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-am-primary to-am-mint"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="o-mnie" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-am-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-am-mint/[0.03] rounded-full blur-3xl" />

      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Photo placeholder + decoration */}
          <motion.div {...fadeUp}>
            <div className="relative">
              {/* Main photo area */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-gradient">
                <div className="absolute inset-[1px] rounded-2xl bg-am-grey-light overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="w-36 h-36 bg-gradient-to-br from-am-primary/20 to-am-mint/20 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                      >
                        <span className="text-5xl font-heading font-bold text-gradient">AM</span>
                      </motion.div>
                      <p className="text-am-grey text-sm">Zdjecie profilowe</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative cards */}
              <motion.div
                className="absolute -right-6 top-12 bg-white rounded-xl shadow-xl shadow-black/10 p-4 border border-am-grey-light"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-am-mint/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-am-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-am-grey">Ekspert</div>
                    <div className="text-sm font-heading font-bold text-am-dark">AI & Lean</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-16 bg-white rounded-xl shadow-xl shadow-black/10 p-4 border border-am-grey-light"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-am-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-am-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-am-grey">Doswiadczenie</div>
                    <div className="text-sm font-heading font-bold text-am-dark">18+ lat</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div {...fadeUp}>
              <span className="badge-primary mb-6">O mnie</span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-am-dark mb-6 leading-tight"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Praktyk,{' '}
              <span className="text-gradient-primary">nie teoretyk</span>
            </motion.h2>

            <motion.div
              className="space-y-4 text-am-grey-dark leading-relaxed mb-10"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Nazywam sie <strong className="text-am-dark">Artur Myzer</strong>.
                Od 18 lat dzialiam w branzy intralogistycznej — od systemow rurowych
                przez AGV/AMR po kompletne projekty automatyzacji magazynow i linii produkcyjnych.
              </p>
              <p>
                Rownolegle rozwijam ekspertyze w sztucznej inteligencji.
                Szkole firmy B2B z praktycznego wdrazania AI w codziennych procesach —
                od automatyzacji raportow przez generowanie tresci po inteligentne systemy CRM.
              </p>
              <p className="text-am-dark font-medium border-l-2 border-am-mint pl-4">
                Moje podejscie? Konkretne liczby, nie slogany.
                Czas montazu: 2h. ROI wdrozenia: 6 miesiecy. Oszczednosc: 40% czasu na raportowaniu.
              </p>
            </motion.div>

            {/* Skill bars */}
            <motion.div
              className="space-y-4"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
