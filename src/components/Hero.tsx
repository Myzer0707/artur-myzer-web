import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ParticleNetwork from './ParticleNetwork';
import { cn } from '../lib/utils';

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

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-[#006991]/[0.15]',
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'backdrop-blur-[2px] border border-white/[0.08]',
            'shadow-[0_8px_32px_0_rgba(0,105,145,0.1)]',
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(74,219,200,0.12),transparent_70%)]',
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const stats = [
    { value: 18, suffix: '+', label: 'lat doświadczenia' },
    { value: 50000, suffix: '+', label: 'produktów dostarczonych' },
    { value: 36, suffix: '', label: 'wdrożeń AGV' },
    { value: 4, suffix: '', label: 'kraje ekspansji' },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#030303]">
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/60 via-transparent to-[#030303]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#006991]/[0.05] via-transparent to-[#4ADBC8]/[0.05] pointer-events-none" />

      {/* Elegant floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-[#006991]/[0.15]"
          className="top-[15%] left-[-8%] md:left-[-5%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-[#4ADBC8]/[0.12]"
          className="top-[70%] right-[-5%] md:right-[-2%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-[#006991]/[0.1]"
          className="top-[35%] right-[5%] hidden md:block"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#4ADBC8]/[0.1]"
          className="bottom-[25%] left-[10%] hidden lg:block"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#006991]/[0.08]"
          className="top-[20%] right-[15%] hidden xl:block"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow section-padding pt-32 pb-20">
        {/* Logo animation */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-10"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-[#4ADBC8]/20 rounded-full scale-150 animate-pulse-glow" />
            <img
              src="/images/icon-white.svg"
              alt="Artur Myzer Logo"
              className="relative w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_0_30px_rgba(74,219,200,0.3)]"
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-full shadow-[0_0_15px_rgba(74,219,200,0.1)]">
            <span className="w-2 h-2 bg-[#4ADBC8] rounded-full animate-pulse" />
            <span className="text-[#4ADBC8] font-heading font-semibold text-xs uppercase tracking-widest">AI Expert & Intralogistics Consultant</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white text-center leading-[1.1] mb-8 max-w-5xl mx-auto"
        >
          <span className="inline-block">Łączę sztuczną inteligencję</span>{' '}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#4ADBC8] via-[#00E9F4] to-[#4ADBC8] bg-[length:200%_auto] animate-gradient-shift">
            z 18-letnim doświadczeniem
          </span>{' '}
          <span className="inline-block">w intralogistyce</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-white/50 text-center max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >
          Dwa filary ekspertyzy. Jedna misja — realne wyniki dla Twojej firmy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
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
          custom={5}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 border-t border-white/[0.06]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + i * 0.1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-center group"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2 group-hover:text-[#4ADBC8] transition-colors duration-500">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/40 font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs font-body uppercase tracking-widest">Przewiń</span>
          <div className="w-5 h-8 border-2 border-white/[0.15] rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 bg-[#4ADBC8] rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-am-dark to-transparent pointer-events-none z-[5]" />
    </section>
  );
}
