import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const capabilities = [
  { title: 'Lead Generation', desc: 'Automatyczna budowa baz, scraping, enrichment danych', icon: '🎯' },
  { title: 'Pipeline CRM', desc: 'Pipedrive, automatyczne follow-upy, scoring leadów', icon: '📊' },
  { title: 'Content Marketing AI', desc: 'Posty, artykuły, newsletter — generowane przez AI', icon: '✍️' },
  { title: 'Cold Outreach', desc: 'Sekwencje email i LinkedIn, personalizacja na skale', icon: '📧' },
  { title: 'Automatyzacja raportów', desc: 'Dashboardy, analizy, raporty generowane automatycznie', icon: '📈' },
  { title: 'Scoring leadów', desc: 'Inteligentny scoring oparty na danych i zachowaniach', icon: '⚡' },
  { title: 'Strony i landing pages', desc: 'Budowa stron internetowych z AI, od koncepcji po deploy', icon: '🌐' },
  { title: 'Generowanie ofert', desc: 'Automatyczne tworzenie spersonalizowanych ofert', icon: '📋' },
  { title: 'Social Media', desc: 'Planowanie, tworzenie i publikacja treści na social media', icon: '📱' },
  { title: 'SEO & Content Strategy', desc: 'Strategia treści oparta na danych i analizie konkurencji', icon: '🔍' },
  { title: 'Chatboty i asystenci', desc: 'AI chatboty na strony, asystenci głosowi, boty sprzedażowe', icon: '🤖' },
  { title: 'Integracje', desc: 'n8n, Zapier, Make — łączenie narzędzi w jeden ekosystem', icon: '🔗' },
  { title: 'Voice AI', desc: 'Transkrypcje, voice notes, automatyczne notatki ze spotkań', icon: '🎙️' },
  { title: 'Analiza konkurencji', desc: 'Monitoring rynku, benchmarking, alerty o zmianach', icon: '🏆' },
  { title: 'Dashboard operacyjny', desc: 'Centralny panel do zarządzania całym procesem', icon: '🖥️' },
];

export default function AIExpert() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="ai-expert" ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-am-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-am-mint/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="container-narrow section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="badge bg-am-mint/10 text-am-primary border border-am-primary/20 text-xs uppercase tracking-widest mb-6 inline-block">
            Filar 2
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-am-dark mb-4">
            AI Expert
          </h2>
          <p className="text-xl md:text-2xl text-am-primary font-heading font-medium mb-6">
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
          <div className="bg-am-dark/5 rounded-2xl p-8 md:p-10 border border-am-dark/10">
            <p className="text-am-dark/80 font-body text-lg leading-relaxed mb-4">
              Po COVID-zie szukalem sposobu na zwiekszenie przychodu bez rozbudowy dzialu sprzedazy.
              Przyjaciel pokazal mi ChatGPT — i to zmienilo wszystko.
            </p>
            <p className="text-am-dark/80 font-body text-lg leading-relaxed mb-4">
              Setki godzin eksploracji pozniej zbudowalem <strong className="text-am-primary">JARVIS</strong> —
              kompletny system AI, ktory automatyzuje caly proces sprzedazy i zarzadzania.
              Dziala jak 20-osobowy zespol sprzedazowy.
            </p>
            <p className="text-am-dark/60 font-body text-base">
              Teraz wdrazam te same rozwiazania u klientow — indywidualnie, face-to-face.
            </p>
          </div>
        </motion.div>

        {/* JARVIS label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-am-dark mb-2">
            Co potrafi system JARVIS?
          </h3>
          <p className="text-am-dark/50 font-body">
            Kompletny ekosystem AI — od leada po zamkniecie dealu
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="card-elevated p-5 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </span>
                <div>
                  <h4 className="font-heading font-semibold text-am-dark text-sm mb-1 group-hover:text-am-primary transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-am-dark/50 text-xs font-body leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-am-primary/10 via-am-mint/10 to-am-primary/10 rounded-2xl p-8 md:p-12 border border-am-primary/10">
            <p className="text-lg md:text-xl font-heading font-bold text-am-dark mb-3">
              Szukamy duzych klientów na wdrozenia face-to-face
            </p>
            <p className="text-am-dark/50 font-body mb-6">
              Kazde wdrozenie jest indywidualne — dopasowane do Twojej firmy i procesów
            </p>
            <a href="#kontakt" className="btn-primary text-base group">
              Porozmawiajmy
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
