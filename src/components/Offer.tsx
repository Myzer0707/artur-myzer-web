import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../lib/utils';

const offers = [
  {
    title: 'Sesje 1-na-1',
    desc: 'Indywidualne wdrozenie AI w Twojej firmie. Analiza procesow, konfiguracja narzedzi, szkolenie zespolu.',
    features: ['Analiza aktualnych procesow', 'Dobor narzedzi AI', 'Konfiguracja i wdrozenie', 'Szkolenie zespolu'],
    badge: 'AI',
    gradient: 'from-[#4ADBC8] to-[#00E9F4]',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(74,219,200,0.15)]',
    available: true,
  },
  {
    title: 'Konsulting intralogistyczny',
    desc: 'Audyt, projektowanie layoutu, analiza feasibility AGV/AMR. Pelna metodologia DMAIC.',
    features: ['Audyt intralogistyczny', 'Projektowanie layoutu', 'Feasibility study AGV', 'Wdrozenie i monitoring'],
    badge: 'INTRA',
    gradient: 'from-[#006991] to-[#4ADBC8]',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(0,105,145,0.2)]',
    available: true,
    featured: true,
  },
  {
    title: 'Wdrozenie procesu sprzedazy AI',
    desc: 'Kompletny system sprzedazowy oparty na AI — od lead generation po zamkniecie dealu.',
    features: ['Lead generation', 'CRM automation', 'Cold outreach sequences', 'Dashboard i raporting'],
    badge: 'AI + SALES',
    gradient: 'from-[#006991] to-[#00E9F4]',
    borderGlow: 'group-hover:shadow-[0_0_30px_rgba(0,105,145,0.15)]',
    available: true,
  },
];

const comingSoon = [
  { title: 'Szkolenia grupowe', desc: 'Warsztaty AI dla zespolow — teoria i praktyka w jeden dzien' },
  { title: 'Kursy online', desc: 'Platforma e-learningowa z kursami AI i intralogistyki' },
];

function PricingCard({ offer, index, inView }: { offer: typeof offers[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        'relative group',
        (offer as any).featured && 'md:-mt-4 md:mb-4',
      )}
    >
      {/* Animated border gradient for featured */}
      {(offer as any).featured && (
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#4ADBC8]/40 via-[#006991]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
      )}

      <div className={cn(
        'relative h-full flex flex-col overflow-hidden rounded-2xl',
        'bg-gradient-to-b from-zinc-950/80 to-zinc-900/60',
        'backdrop-blur-xl border border-white/[0.08]',
        'hover:border-white/[0.15] transition-all duration-500',
        offer.borderGlow,
      )}>
        {/* Top gradient accent */}
        <div className={cn('h-1 w-full bg-gradient-to-r', offer.gradient)} />

        <div className="p-7 md:p-8 flex flex-col flex-grow">
          {/* Badge */}
          <span className={cn(
            'inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider mb-6',
            'bg-gradient-to-r text-[#030303]',
            offer.gradient,
          )}>
            {offer.badge}
          </span>

          <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:text-[#4ADBC8] transition-colors duration-300">
            {offer.title}
          </h3>
          <p className="text-white/40 font-body text-sm leading-relaxed mb-6 flex-grow">
            {offer.desc}
          </p>

          <ul className="space-y-3 mb-8">
            {offer.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-white/60 text-sm font-body">
                <div className="w-5 h-5 rounded-full bg-[#4ADBC8]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-[#4ADBC8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#kontakt"
            className={cn(
              'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm transition-all duration-300',
              (offer as any).featured
                ? 'bg-gradient-to-r from-[#4ADBC8] to-[#00E9F4] text-[#030303] hover:shadow-[0_8px_30px_rgba(74,219,200,0.3)] hover:-translate-y-0.5'
                : 'border border-white/[0.12] text-white hover:bg-white/[0.06] hover:border-white/[0.2] hover:-translate-y-0.5',
            )}
          >
            Umow konsultacje
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Offer() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="oferta" ref={sectionRef} className="relative bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-am-dark-lighter/20 to-[#030303] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4ADBC8]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#006991]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-narrow section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="badge-mint text-xs uppercase tracking-widest mb-6 inline-block">Oferta</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Jak mogę pomóc?
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-body">
            Trzy sciezki wspolpracy — kazda dopasowana indywidualnie do Twoich potrzeb.
          </p>
        </motion.div>

        {/* Offer cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-16 items-start">
          {offers.map((offer, i) => (
            <PricingCard key={offer.title} offer={offer} index={i} inView={inView} />
          ))}
        </div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-white/20 text-sm font-heading uppercase tracking-widest mb-6">Wkrótce</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {comingSoon.map((item) => (
              <div key={item.title} className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 opacity-50 cursor-default">
                <h4 className="font-heading font-semibold text-white/50 mb-2">{item.title}</h4>
                <p className="text-white/25 text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-sm font-body mt-8 italic">
            "Kazde wdrozenie jest indywidualne — porozmawiajmy"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
