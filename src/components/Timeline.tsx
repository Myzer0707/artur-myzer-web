import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
      >
        <div className={`card-glass p-6 md:p-8 hover:bg-white/10 transition-all duration-500 group ${isLeft ? 'md:ml-auto' : 'md:mr-auto'} max-w-lg`}>
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
            <span className="text-2xl">{item.icon}</span>
            <span className="text-am-mint font-heading font-bold text-sm uppercase tracking-wider">{item.year}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:text-am-mint transition-colors">
            {item.title}
          </h3>
          <p className="text-white/60 font-body leading-relaxed text-sm md:text-base">
            {item.desc}
          </p>
        </div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-am-mint shadow-[0_0_20px_rgba(74,219,200,0.5)] border-4 border-am-dark"
      />

      {/* Spacer for opposite side */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="historia" ref={sectionRef} className="relative bg-am-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-am-dark via-am-dark-lighter/50 to-am-dark pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-am-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-body">
            Od zakupowca w koncernie automotive do eksperta AI i intralogistyki.
            Ponad dwie dekady budowania, wdrazania i transformacji.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-am-mint/50 via-am-primary/30 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
