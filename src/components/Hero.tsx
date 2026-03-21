import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ParticleNetwork from './ParticleNetwork';

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

export default function Hero() {
  const stats = [
    { value: 18, suffix: '+', label: 'lat doświadczenia' },
    { value: 50000, suffix: '+', label: 'produktów dostarczonych' },
    { value: 36, suffix: '', label: 'wdrożeń AGV' },
    { value: 4, suffix: '', label: 'kraje ekspansji' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-am-dark">
      {/* Particle Network Background */}
      <div className="absolute inset-0">
        <ParticleNetwork
          particleCount={100}
          connectionDistance={160}
          particleColor="0, 105, 145"
          lineColor="74, 219, 200"
          mouseRadius={220}
          speed={0.3}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-am-dark/40 via-transparent to-am-dark/80 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-am-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-am-mint/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-narrow section-padding pt-32 pb-20">
        {/* Logo animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-10"
        >
          <img
            src="/images/icon-white.svg"
            alt="Artur Myzer Logo"
            className="w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_0_30px_rgba(74,219,200,0.3)]"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-am-mint/10 backdrop-blur-sm border border-am-mint/20 rounded-full">
            <span className="w-2 h-2 bg-am-mint rounded-full animate-pulse" />
            <span className="text-am-mint font-heading font-semibold text-xs uppercase tracking-widest">AI Expert & Intralogistics Consultant</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white text-center leading-[1.1] mb-8 max-w-5xl mx-auto"
        >
          Łączę sztuczną inteligencję{' '}
          <span className="text-gradient">z 18-letnim doświadczeniem</span>{' '}
          w intralogistyce
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-white/60 text-center max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >
          Dwa filary ekspertyzy. Jedna misja — realne wyniki dla Twojej firmy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a href="#ai-expert" className="btn-gradient text-base group">
            AI Expert
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#intralogistyka" className="btn-ghost text-base group">
            Ekspert Intralogistyki
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 border-t border-white/10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/50 font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs font-body uppercase tracking-widest">Przewiń</span>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 bg-am-mint rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
