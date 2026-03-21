import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../lib/utils';

const milestones = [
  {
    year: '2002',
    title: 'Metzeler — koncern automotive',
    desc: 'Zakupowiec w fabryce uszczelek samochodowych. Najlepsze szkolenia Lean i Kaizen. Nawet jako zakupowiec dawalem dostawcom pomysly na budowe systemow transportowych.',
    icon: '🏭',
  },
  {
    year: '2008',
    title: 'Wlasna firma',
    desc: 'Odszedlem i zalozylem wlasna firme. Od pierwszego dnia — intralogistyka. Systemy transportowe, stanowiska, regaly przeplywowe.',
    icon: '🚀',
  },
  {
    year: '2012',
    title: 'Rebrand na MYZER\u00AE',
    desc: 'Znak towarowy zastrzezony w Unii Europejskiej. Budowa marki od podstaw — VMT, ramy, wozki, stacje 5S.',
    icon: '™️',
  },
  {
    year: '2018',
    title: 'Ekspansja miedzynarodowa',
    desc: 'Otwarcie oddzialow w Niemczech, Czechach, Francji i USA. 50 000+ stanowisk i wozkow dostarczonych klientom.',
    icon: '🌍',
  },
  {
    year: '2020',
    title: 'Wlasna nawigacja AGV 3D Lidar',
    desc: 'Opracowanie unikalnej nawigacji AGV opartej na 3D Lidar — inna niz u konkurencji. 36 wdrozen, wszystkie dzialaja 24/7. Rekord: 920 km/miesiac na jednym AGV.',
    icon: '🤖',
  },
  {
    year: '2023',
    title: 'ChatGPT zmienil wszystko',
    desc: 'Przyjaciel pokazal mi ChatGPT. Setki godzin eksploracji AI. Obsesja, ktora przeksztalcila sie w nowy filar biznesu.',
    icon: '⚡',
  },
  {
    year: '2024',
    title: 'JARVIS — moj system AI',
    desc: 'Zbudowalem JARVIS — kompletny system operacyjny AI. Automatyczny proces sprzedazy dzialajacy jak 20-osobowy zespol. Wdrazanie AI u zaprzyjaznionch firm.',
    icon: '🧠',
  },
  {
    year: '2025',
    title: 'arturmyzer.ai',
    desc: 'Dwa filary ekspertyzy, jedna misja. AI Expert + Intralogistyka. Indywidualne wdrozenia face-to-face dla duzych klientow.',
    icon: '🎯',
  },
];

function TimelineItem({ item, index }: { item: typeof milestones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="relative pl-8 md:pl-0 md:grid md:grid-cols-[1fr_80px_1fr] md:gap-4 items-start">
      {/* Left content (odd items) */}
      <div className={cn('hidden md:block', index % 2 === 0 ? '' : 'order-3')}>
        {index % 2 === 0 && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-right"
          >
            <div className="inline-block bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 group max-w-lg ml-auto">
              <div className="flex items-center gap-3 justify-end mb-3">
                <span className="text-[#4ADBC8] font-heading font-bold text-sm uppercase tracking-wider">{item.year}</span>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:text-[#4ADBC8] transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 font-body leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Center dot + year (sticky on desktop) */}
      <div className="hidden md:flex flex-col items-center order-2 relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="sticky top-32 flex flex-col items-center"
        >
          <div className="w-4 h-4 rounded-full bg-[#4ADBC8] shadow-[0_0_20px_rgba(74,219,200,0.5)] border-4 border-[#030303] z-10" />
          <span className="mt-2 text-xs font-mono text-white/40">{item.year}</span>
        </motion.div>
      </div>

      {/* Right content (even items on right, odd items here) */}
      <div className={cn('md:block', index % 2 === 0 ? 'hidden md:block order-3' : 'order-1')}>
        {index % 2 !== 0 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="inline-block bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 group max-w-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-[#4ADBC8] font-heading font-bold text-sm uppercase tracking-wider">{item.year}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:text-[#4ADBC8] transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 font-body leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Mobile fallback — show all items on left */}
      <div className="md:hidden">
        {/* Mobile dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#4ADBC8] shadow-[0_0_12px_rgba(74,219,200,0.4)] border-2 border-[#030303] z-10"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.06] transition-all duration-500 group"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl">{item.icon}</span>
            <span className="text-[#4ADBC8] font-heading font-bold text-xs uppercase tracking-wider">{item.year}</span>
          </div>
          <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-[#4ADBC8] transition-colors">
            {item.title}
          </h3>
          <p className="text-white/50 font-body leading-relaxed text-sm">
            {item.desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="historia" ref={sectionRef} className="relative bg-[#030303] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-am-dark via-[#030303] to-am-dark pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#006991]/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#4ADBC8]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container-narrow section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="badge-mint text-xs uppercase tracking-widest mb-6 inline-block">Moja droga</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Moja historia
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-body">
            Od zakupowca w koncernie automotive do eksperta AI i intralogistyki.
            Ponad dwie dekady budowania, wdrazania i transformacji.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Vertical line (desktop) — background track */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/[0.06]" />

          {/* Vertical line (desktop) — scroll-filled gradient */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 w-[2px] -translate-x-1/2 origin-top"
            style={{
              height: lineHeight,
              background: 'linear-gradient(to bottom, #4ADBC8, #006991, transparent)',
            }}
          />

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#4ADBC8]/40 via-[#006991]/20 to-transparent" />

          <div className="space-y-12 md:space-y-20">
            {milestones.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
