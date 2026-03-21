import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ParticleNetwork from './ParticleNetwork';
import { cn } from '../lib/utils';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    function step(now: number) {
      const progress = Math.min((now - startTime) / 2000, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString('pl-PL')}{suffix}</span>;
}

const dmaic = [
  {
    letter: 'D',
    name: 'Definiuj',
    desc: 'Analiza potrzeb klienta, definicja celu wdrozenia, scope projektu',
    gradient: 'from-[#006991] to-[#006991]/60',
  },
  {
    letter: 'M',
    name: 'Mierz',
    desc: 'PFEP, Spaghetti diagram, Gemba Walk — prawdziwe dane z hali produkcyjnej',
    gradient: 'from-[#4ADBC8] to-[#4ADBC8]/60',
  },
  {
    letter: 'A',
    name: 'Analizuj',
    desc: 'Identyfikacja waste, optymalizacja przeplywow materialowych',
    gradient: 'from-[#00E9F4] to-[#00E9F4]/60',
  },
  {
    letter: 'I',
    name: 'Implementuj',
    desc: 'Projektowanie layoutu, dobor technologii, wdrozenie AGV/AMR',
    gradient: 'from-[#006991] to-[#4ADBC8]',
  },
  {
    letter: 'C',
    name: 'Kontroluj',
    desc: 'Monitoring KPI, optymalizacja ciagla, support 24/7',
    gradient: 'from-[#4ADBC8] to-[#00E9F4]',
  },
];

const stats = [
  { value: 50000, suffix: '+', label: 'stanowisk i wozków' },
  { value: 36, suffix: '', label: 'wdrozen AGV' },
  { value: 920, suffix: ' km', label: 'rekord AGV / miesiąc' },
  { value: 24, suffix: '/7', label: 'praca AGV non-stop' },
];

const services = [
  'Projektowanie layoutow intralogistycznych',
  'Wdrozenia AGV/AMR z nawigacja 3D Lidar',
  'Systemy transportowe i przeplywowe',
  'Stanowiska robocze i stacje 5S',
  'Konsulting Lean / Kaizen',
  'Audyt feasibility AGV',
];

export default function Intralogistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="intralogistyka" ref={sectionRef} className="relative bg-[#030303] overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 opacity-30">
        <ParticleNetwork
          particleCount={50}
          connectionDistance={120}
          particleColor="0, 105, 145"
          lineColor="0, 105, 145"
          mouseRadius={150}
          speed={0.15}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none z-[1]" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#006991]/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#4ADBC8]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-narrow section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#006991]/[0.1] backdrop-blur-sm border border-[#006991]/[0.2] rounded-full text-xs font-heading font-semibold uppercase tracking-widest text-[#006991] mb-6">
            Filar 1
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Ekspert Intralogistyki
          </h2>
          <p className="text-xl md:text-2xl text-[#4ADBC8] font-heading font-medium mb-6">
            Grupa Myzer — od projektu po wdrozenie
          </p>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-body">
            18 lat doswiadczenia, 50 000+ produktow, oddzialy w 4 krajach.
            Kazdy projekt realizowany metoda DMAIC z Six Sigma.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#006991]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 text-center group-hover:border-white/[0.12] transition-all duration-500">
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 group-hover:text-[#4ADBC8] transition-colors duration-500">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/40 font-body group-hover:text-white/60 transition-colors">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* DMAIC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white text-center mb-4">
            Metodologia DMAIC
          </h3>
          <p className="text-white/30 text-center mb-12 font-body">
            Sprawdzona metoda z Six Sigma — kazdy projekt przechodzi pelny cykl
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {dmaic.map((step, i) => (
              <motion.div
                key={step.letter}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="relative group"
              >
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 h-full hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 text-center">
                  <div className={cn(
                    'w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mx-auto mb-4',
                    'text-white font-heading font-bold text-2xl',
                    'group-hover:scale-110 group-hover:shadow-lg transition-all duration-300',
                    step.gradient,
                  )}>
                    {step.letter}
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg mb-2">{step.name}</h4>
                  <p className="text-white/40 text-sm font-body leading-relaxed">{step.desc}</p>
                </div>
                {/* Connector arrow (except last) */}
                {i < dmaic.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-[#4ADBC8]/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mb-20"
        >
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#4ADBC8]/30 via-[#006991]/20 to-[#4ADBC8]/30 blur-[1px]" />
          <div className="relative bg-[#030303]/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-white/[0.06]">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white leading-snug mb-4">
              "30 minut w zakladzie i wiem, czy wdrozenie AGV jest mozliwe"
            </blockquote>
            <p className="text-[#4ADBC8] font-heading font-medium">— Artur Myzer</p>
          </div>
        </motion.div>

        {/* Services & Clients */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h3 className="text-xl font-heading font-bold text-white mb-6">Uslugi</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3 text-white/60 font-body group/item hover:text-white/80 transition-colors">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-[#4ADBC8]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#4ADBC8]/20 transition-colors">
                    <svg className="w-3 h-3 text-[#4ADBC8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <h3 className="text-xl font-heading font-bold text-white mb-6">Klienci</h3>
            <p className="text-white/40 font-body mb-6">
              Wspolpracujemy z najwiekszymi koncernami w Europie:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Toyota', 'BSH', 'Continental', 'Volkswagen'].map((client, i) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 text-center font-heading font-semibold text-white/60 hover:text-[#4ADBC8] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                >
                  {client}
                </motion.div>
              ))}
            </div>
            <p className="text-white/25 text-sm mt-4 font-body italic">
              Unikalna nawigacja 3D Lidar — inna niz u konkurencji
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
