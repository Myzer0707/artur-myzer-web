import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

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
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.3 + i * 0.18,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Hero() {
  const stats = [
    { value: 5, suffix: '', label: 'firm w portfolio' },
    { value: 15, suffix: '+', label: 'lat w intralogistyce' },
    { value: 24, suffix: '/7', label: 'JARVIS pracuje' },
    { value: 80, suffix: '%', label: 'oszczędności czasu' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      {/* Radial gradient glow — top center orange */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(151,55,0,0.35) 0%, rgba(235,121,14,0.12) 35%, transparent 65%)',
        }}
      />
      {/* Secondary glow — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 100% 100%, rgba(235,121,14,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] right-[8%] w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(235,121,14,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[20%] left-[5%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(151,55,0,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-32 pb-20">

        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-8"
        >
          <span
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-heading font-semibold uppercase tracking-widest"
            style={{
              background: 'rgba(235,121,14,0.1)',
              border: '1px solid rgba(235,121,14,0.25)',
              color: '#f59332',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#eb790e] animate-pulse" />
            AI Expert & Intralogistics Specialist
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] font-heading font-bold text-white text-center leading-[1.08] mb-6 max-w-5xl mx-auto"
          style={{ letterSpacing: '-0.02em' }}
        >
          Buduję systemy AI{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #eb790e 0%, #f59332 50%, #f0a500 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 6s ease infinite',
            }}
          >
            które zarządzają
          </span>
          {' '}firmami
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-white/50 text-center max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >
          JARVIS to nie narzędzie — to operator Twojego biznesu. 24/7, bez błędów ludzkich,
          z pełną widocznością na każdym etapie.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a href="#jarvis" className="btn-primary text-base group">
            Poznaj JARVIS
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#o-mnie" className="btn-ghost text-base group">
            Kim jestem
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1, duration: 0.7 }}
              className="text-center group"
            >
              <div
                className="text-3xl md:text-4xl font-heading font-bold mb-1.5 transition-all duration-500"
                style={{ color: '#eb790e' }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/35 font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div
            className="w-5 h-8 rounded-full flex justify-center pt-1.5"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: '#eb790e' }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[5]"
        style={{ background: 'linear-gradient(to top, #0d0d0d, transparent)' }}
      />
    </section>
  );
}
