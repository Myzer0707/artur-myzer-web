import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    function step(now: number) {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString('pl-PL')}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const stats = [
  {
    value: 5,
    suffix: '',
    label: 'Firm w portfolio',
    sublabel: 'Myzer Intra, VMT, Alufance, Mayhpi, arturmyzer.ai',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Lat doświadczenia',
    sublabel: 'W intralogistyce i wdrożeniach AGV/AMR',
  },
  {
    value: 80,
    suffix: '%',
    label: 'Mniej czasu operacyjnego',
    sublabel: 'Dzięki automatyzacji procesów przez JARVIS',
  },
  {
    value: 18,
    suffix: '',
    label: 'MCP Serwerów',
    sublabel: 'Aktywnych integracji w systemie JARVIS',
  },
  {
    value: 14,
    suffix: ' dni',
    label: 'Wdrożenie JARVIS',
    sublabel: 'Od analizy do pełnego uruchomienia systemu',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'JARVIS pracuje',
    sublabel: 'Bez urlopów, bez błędów ludzkich, bez przerw',
  },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="wyniki"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#111111' }}
    >
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(151,55,0,0.15) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="flex justify-center mb-6">
          <span className="badge-orange">Liczby mówią same za siebie</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white text-center mb-6 max-w-3xl mx-auto"
          style={{ letterSpacing: '-0.02em' }}
        >
          Wyniki które{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #eb790e, #f59332)' }}
          >
            można zmierzyć
          </span>
        </motion.h2>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-lg text-white/45 text-center max-w-xl mx-auto mb-16 font-body leading-relaxed"
        >
          Nie obiecuję — pokazuję liczby z mojego własnego systemu.
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={3 + i} variants={fadeUp}
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="group p-6 md:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="text-4xl md:text-5xl font-heading font-bold mb-2 transition-colors duration-300"
                style={{ color: '#eb790e' }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-heading font-semibold text-white text-sm md:text-base mb-1.5">
                {stat.label}
              </div>
              <div className="text-xs text-white/30 font-body leading-relaxed">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
