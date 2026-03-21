import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function BigCounter({ target, suffix = '', duration = 2.5 }: { target: number; suffix?: string; duration?: number }) {
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

const bigNumbers = [
  { value: 18, suffix: '+', label: 'lat doświadczenia' },
  { value: 50000, suffix: '+', label: 'stanowisk i wózków' },
  { value: 36, suffix: '', label: 'wdrożeń AGV 24/7' },
  { value: 4, suffix: '', label: 'kraje operacji' },
  { value: 920, suffix: ' km', label: 'rekord AGV / miesiąc' },
  { value: 15, suffix: '+', label: 'narzędzi AI w ekosystemie' },
];

const clients = ['Toyota', 'BSH', 'Continental', 'Volkswagen'];

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="liczby" ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-am-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-narrow section-padding relative z-10">
        {/* Big numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="badge-primary text-xs uppercase tracking-widest mb-6 inline-block">Liczby mówią same za siebie</span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {bigNumbers.map((num, i) => (
            <motion.div
              key={num.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient-primary mb-2">
                <BigCounter target={num.value} suffix={num.suffix} />
              </div>
              <div className="text-sm md:text-base text-am-dark/50 font-body group-hover:text-am-primary transition-colors">
                {num.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-am-dark/30 text-sm font-heading uppercase tracking-widest mb-8">Zaufali nam</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="px-8 py-4 rounded-xl bg-am-dark/5 font-heading font-bold text-am-dark/40 text-lg hover:text-am-primary hover:bg-am-primary/5 transition-all duration-300"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center mt-16"
        >
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-am-dark leading-snug max-w-3xl mx-auto">
            "Nie jestem duży. Ale moje AGV{' '}
            <span className="text-am-primary">nie stoją</span>{' '}
            — pracują 24/7"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
