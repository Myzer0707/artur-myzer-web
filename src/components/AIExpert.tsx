import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '../lib/utils';

const capabilities = [
  { title: 'Lead Generation', desc: 'Automatyczna budowa baz, scraping, enrichment danych', icon: '🎯', colSpan: 'md:col-span-2', rowSpan: '' },
  { title: 'Pipeline CRM', desc: 'Pipedrive, automatyczne follow-upy, scoring leadów', icon: '📊', colSpan: '', rowSpan: '' },
  { title: 'Content Marketing AI', desc: 'Posty, artykuły, newsletter — generowane przez AI', icon: '✍️', colSpan: '', rowSpan: '' },
  { title: 'Cold Outreach', desc: 'Sekwencje email i LinkedIn, personalizacja na skale', icon: '📧', colSpan: 'md:col-span-2', rowSpan: '' },
  { title: 'Automatyzacja raportów', desc: 'Dashboardy, analizy, raporty generowane automatycznie', icon: '📈', colSpan: '', rowSpan: '' },
  { title: 'Scoring leadów', desc: 'Inteligentny scoring oparty na danych i zachowaniach', icon: '⚡', colSpan: '', rowSpan: '' },
  { title: 'Strony i landing pages', desc: 'Budowa stron internetowych z AI, od koncepcji po deploy', icon: '🌐', colSpan: '', rowSpan: '' },
  { title: 'Generowanie ofert', desc: 'Automatyczne tworzenie spersonalizowanych ofert', icon: '📋', colSpan: 'md:col-span-2', rowSpan: '' },
  { title: 'Social Media', desc: 'Planowanie, tworzenie i publikacja treści na social media', icon: '📱', colSpan: '', rowSpan: '' },
  { title: 'SEO & Content Strategy', desc: 'Strategia treści oparta na danych i analizie konkurencji', icon: '🔍', colSpan: '', rowSpan: '' },
  { title: 'Chatboty i asystenci', desc: 'AI chatboty na strony, asystenci głosowi, boty sprzedażowe', icon: '🤖', colSpan: '', rowSpan: '' },
  { title: 'Integracje', desc: 'n8n, Zapier, Make — łączenie narzędzi w jeden ekosystem', icon: '🔗', colSpan: '', rowSpan: '' },
  { title: 'Voice AI', desc: 'Transkrypcje, voice notes, automatyczne notatki ze spotkań', icon: '🎙️', colSpan: '', rowSpan: '' },
  { title: 'Analiza konkurencji', desc: 'Monitoring rynku, benchmarking, alerty o zmianach', icon: '🏆', colSpan: 'md:col-span-2', rowSpan: '' },
  { title: 'Dashboard operacyjny', desc: 'Centralny panel do zarządzania całym procesem', icon: '🖥️', colSpan: '', rowSpan: '' },
];

function BentoCard({
  cap,
  index,
  inView,
}: {
  cap: typeof capabilities[0];
  index: number;
  inView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.04, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative group cursor-default overflow-hidden rounded-2xl',
        'bg-black border border-white/[0.08]',
        'hover:border-white/[0.15] transition-all duration-500',
        cap.colSpan,
        cap.rowSpan,
      )}
    >
      {/* Hover glow effect */}
      <div
        className={cn(
          'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          'bg-gradient-to-br from-[#006991]/10 via-transparent to-[#4ADBC8]/5',
        )}
      />

      <div className="relative p-5 md:p-6 h-full flex flex-col">
        {/* Icon */}
        <motion.span
          animate={isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="text-3xl mb-4 block w-fit"
        >
          {cap.icon}
        </motion.span>

        {/* Content that shifts up on hover */}
        <div className="flex-1">
          <h4 className="font-heading font-semibold text-white text-base mb-2 group-hover:text-[#4ADBC8] transition-colors duration-300">
            {cap.title}
          </h4>
          <p className="text-white/40 text-sm font-body leading-relaxed">
            {cap.desc}
          </p>
        </div>

        {/* CTA that appears on hover */}
        <motion.div
          initial={false}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="mt-3 pt-3 border-t border-white/[0.06]"
        >
          <span className="text-xs font-heading font-semibold text-[#4ADBC8] uppercase tracking-wider flex items-center gap-1">
            Dowiedz się więcej
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function AIExpert() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="ai-expert" ref={sectionRef} className="relative bg-[#030303] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#006991]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4ADBC8]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-[0.05] pointer-events-none" />

      <div className="container-narrow section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#4ADBC8]/[0.08] backdrop-blur-sm border border-[#4ADBC8]/[0.15] rounded-full text-xs font-heading font-semibold uppercase tracking-widest text-[#4ADBC8] mb-6">
            Filar 2
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            AI Expert
          </h2>
          <p className="text-xl md:text-2xl text-[#4ADBC8] font-heading font-medium mb-6">
            Kompletny proces sprzedaży i zarządzania operacyjnego
          </p>
        </motion.div>

        {/* Story intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#006991]/[0.1] to-[#4ADBC8]/[0.05]" />
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 md:p-10">
              <p className="text-white/70 font-body text-lg leading-relaxed mb-4">
                Po COVID-zie szukalem sposobu na zwiekszenie przychodu bez rozbudowy dzialu sprzedazy.
                Przyjaciel pokazal mi ChatGPT — i to zmienilo wszystko.
              </p>
              <p className="text-white/70 font-body text-lg leading-relaxed mb-4">
                Setki godzin eksploracji pozniej zbudowalem <strong className="text-[#4ADBC8]">JARVIS</strong> —
                kompletny system AI, ktory automatyzuje caly proces sprzedazy i zarzadzania.
                Dziala jak 20-osobowy zespol sprzedazowy.
              </p>
              <p className="text-white/40 font-body text-base">
                Teraz wdrazam te same rozwiazania u klientow — indywidualnie, face-to-face.
              </p>
            </div>
          </div>
        </motion.div>

        {/* JARVIS label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
            Co potrafi system JARVIS?
          </h3>
          <p className="text-white/40 font-body">
            Kompletny ekosystem AI — od leada po zamkniecie dealu
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-16">
          {capabilities.map((cap, i) => (
            <BentoCard key={cap.title} cap={cap} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center"
        >
          <div className="relative inline-block rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#006991]/20 via-[#4ADBC8]/10 to-[#006991]/20 animate-gradient-shift bg-[length:200%_auto]" />
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl font-heading font-bold text-white mb-3">
                Szukamy duzych klientów na wdrozenia face-to-face
              </p>
              <p className="text-white/40 font-body mb-6">
                Kazde wdrozenie jest indywidualne — dopasowane do Twojej firmy i procesów
              </p>
              <a href="#kontakt" className="btn-gradient text-base group">
                Porozmawiajmy
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
