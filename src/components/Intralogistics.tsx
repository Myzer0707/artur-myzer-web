import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ParticleNetwork from './ParticleNetwork';

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
    color: 'from-am-primary to-am-primary/70',
  },
  {
    letter: 'M',
    name: 'Mierz',
    desc: 'PFEP, Spaghetti diagram, Gemba Walk — prawdziwe dane z hali produkcyjnej',
    color: 'from-am-mint to-am-mint/70',
  },
  {
    letter: 'A',
    name: 'Analizuj',
    desc: 'Identyfikacja waste, optymalizacja przeplywow materialowych',
    color: 'from-cyan-400 to-cyan-400/70',
  },
  {
    letter: 'I',
    name: 'Implementuj',
    desc: 'Projektowanie layoutu, dobor technologii, wdrozenie AGV/AMR',
    color: 'from-am-primary to-am-mint',
  },
  {
    letter: 'C',
    name: 'Kontroluj',
    desc: 'Monitoring KPI, optymalizacja ciagla, support 24/7',
    color: 'from-am-mint to-cyan-400',
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
    <section id="intralogistyka" ref={sectionRef} className="relative bg-am-dark overflow-hidden">
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
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-am-dark to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-am-dark to-transparent pointer-events-none z-[1]" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-am-primary/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-narrow section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="badge-primary bg-am-primary/10 text-am-primary text-xs uppercase tracking-widest mb-6 inline-block border border-am-primary/20">
            Filar 1
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Ekspert Intralogistyki
          </h2>
          <p className="text-xl md:text-2xl text-am-mint font-heading font-medium mb-6">
            Grupa Myzer — od projektu po wdrozenie
          </p>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-body">
            18 lat doswiadczenia, 50 000+ produktow, oddzialy w 4 krajach.
            Kazdy projekt realizowany metoda DMAIC z Six Sigma.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="card-glass p-6 text-center group hover:bg-white/10 transition-all duration-500"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/50 font-body group-hover:text-am-mint transition-colors">{stat.label}</div>
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
          <p className="text-white/40 text-center mb-12 font-body">
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
                <div className="card-glass p-6 h-full hover:bg-white/10 transition-all duration-500 text-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.letter}
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg mb-2">{step.name}</h4>
                  <p className="text-white/50 text-sm font-body leading-relaxed">{step.desc}</p>
                </div>
                {/* Connector arrow (except last) */}
                {i < dmaic.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-am-mint/30">
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
          className="border-gradient p-8 md:p-12 bg-am-dark-lighter/50 backdrop-blur-sm rounded-2xl mb-20 text-center"
        >
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white leading-snug mb-4">
            "30 minut w zakladzie i wiem, czy wdrozenie AGV jest mozliwe"
          </blockquote>
          <p className="text-am-mint font-heading font-medium">— Artur Myzer</p>
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
                <li key={s} className="flex items-start gap-3 text-white/70 font-body">
                  <svg className="w-5 h-5 text-am-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
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
            <p className="text-white/50 font-body mb-6">
              Wspolpracujemy z najwiekszymi koncernami w Europie:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Toyota', 'BSH', 'Continental', 'Volkswagen'].map((client, i) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="card-glass p-4 text-center font-heading font-semibold text-white/80 hover:text-am-mint hover:bg-white/10 transition-all duration-300"
                >
                  {client}
                </motion.div>
              ))}
            </div>
            <p className="text-white/30 text-sm mt-4 font-body italic">
              Unikalna nawigacja 3D Lidar — inna niz u konkurencji
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
