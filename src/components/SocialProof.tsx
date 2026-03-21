import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { cn } from '../lib/utils';

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
    <section id="liczby" ref={sectionRef} className="relative bg-[#030303] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-am-dark/30 to-[#030303] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#006991]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none" />

      <div className="container-narrow section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#006991]/[0.08] backdrop-blur-sm border border-[#006991]/[0.15] rounded-full text-xs font-heading font-semibold uppercase tracking-widest text-[#4ADBC8] mb-6">
            Liczby mówią same za siebie
          </span>
        </motion.div>

        {/* Big numbers grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {bigNumbers.map((num, i) => (
            <motion.div
              key={num.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative group text-center"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#006991]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative bg-white/[0.02] border border-white/[0.04] rounded-2xl p-6 md:p-8 hover:border-white/[0.1] transition-all duration-500">
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006991] to-[#4ADBC8]">
                    <BigCounter target={num.value} suffix={num.suffix} />
                  </span>
                </div>
                <div className="text-sm md:text-base text-white/35 font-body group-hover:text-white/55 transition-colors duration-500">
                  {num.label}
                </div>
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
          <p className="text-white/20 text-sm font-heading uppercase tracking-widest mb-8">Zaufali nam</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className={cn(
                  'px-8 py-4 rounded-xl',
                  'bg-white/[0.03] border border-white/[0.06]',
                  'font-heading font-bold text-white/30 text-lg',
                  'hover:text-[#4ADBC8] hover:bg-white/[0.06] hover:border-white/[0.12]',
                  'transition-all duration-300',
                )}
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
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4ADBC8]/[0.05] via-transparent to-[#006991]/[0.05] rounded-3xl blur-2xl" />
            <blockquote className="relative text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white leading-snug max-w-3xl mx-auto">
              "Nie jestem duży. Ale moje AGV{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4ADBC8] to-[#006991]">nie stoją</span>{' '}
              — pracują 24/7"
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
