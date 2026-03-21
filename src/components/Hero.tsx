import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const blob1X = useTransform(mouseX, [0, 1], [-20, 20]);
  const blob1Y = useTransform(mouseY, [0, 1], [-20, 20]);
  const blob2X = useTransform(mouseX, [0, 1], [15, -15]);
  const blob2Y = useTransform(mouseY, [0, 1], [15, -15]);

  useEffect(() => {
    function handleMouse(e: MouseEvent) {
      const { clientX, clientY } = e;
      mouseX.set(clientX / window.innerWidth);
      mouseY.set(clientY / window.innerHeight);
    }
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const stats = [
    { value: 18, suffix: '+', label: 'lat w intralogistyce' },
    { value: 50, suffix: '+', label: 'wdrozenia AGV/AMR' },
    { value: 200, suffix: '+', label: 'przeszkolonych osob' },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-am-dark overflow-hidden noise-overlay">
      {/* Animated mesh gradient blobs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full morph-blob opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0,105,145,0.6) 0%, transparent 70%)',
          x: blob1X,
          y: blob1Y,
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] rounded-full morph-blob opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(74,219,200,0.5) 0%, transparent 70%)',
          x: blob2X,
          y: blob2Y,
          filter: 'blur(50px)',
          animationDelay: '-4s',
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/6 w-[300px] h-[300px] rounded-full morph-blob opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(0,233,244,0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animationDelay: '-2s',
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-am-mint/10 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-am-primary/10 to-transparent" />

      {/* Content */}
      <div className="container-narrow relative z-10 section-padding pt-32 md:pt-40">
        <motion.div
          className="max-w-4xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-am-mint/10 backdrop-blur-sm border border-am-mint/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-am-mint rounded-full animate-pulse" />
              <span className="text-am-mint font-heading font-semibold text-sm">AI Expert &bull; Intralogistics Consultant</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-8"
            variants={fadeUp}
          >
            Lacze{' '}
            <span className="relative">
              <span className="text-gradient">sztuczna inteligencje</span>
              <motion.span
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-am-mint to-am-cyan rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </span>
            <br className="hidden md:block" />
            {' '}z 18-letnim doswiadczeniem{' '}
            <br className="hidden lg:block" />
            w{' '}
            <span className="text-am-cyan">intralogistyce</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-am-grey max-w-2xl mb-12 leading-relaxed"
            variants={fadeUp}
          >
            Pomagam firmom B2B wdrazac AI w codziennych procesach i optymalizowac
            intralogistyke metodami Lean, DMAIC i AGV/AMR.{' '}
            <span className="text-white font-medium">Konkretne wyniki, nie puste obietnice.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeUp}>
            <a href="#szkolenia" className="btn-gradient text-center justify-center group">
              Szkolenia AI
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#o-mnie" className="btn-ghost text-center justify-center group">
              Poznaj mnie
              <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10"
            variants={fadeUp}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group"
                variants={scaleIn}
              >
                <div className="text-3xl md:text-5xl font-heading font-bold text-gradient mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-am-grey group-hover:text-am-mint transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs text-am-grey/50 font-heading uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-am-mint rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
