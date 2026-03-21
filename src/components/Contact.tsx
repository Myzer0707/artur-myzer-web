import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="kontakt" ref={sectionRef} className="relative bg-am-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-am-dark via-am-dark-lighter/30 to-am-dark pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-am-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-am-mint/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-narrow section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="badge-mint text-xs uppercase tracking-widest mb-6 inline-block">Kontakt</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Porozmawiajmy o{' '}
            <span className="text-gradient">Twoim projekcie</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg font-body">
            Szukasz wdrozenia AI? Planujesz automatyzacje? Potrzebujesz konsultacji AGV?
            Napisz — odpowiadam w ciagu 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact info + Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Avatar with effects */}
            <div className="relative flex justify-center mb-10">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-am-mint to-am-primary blur-xl opacity-30 animate-pulse-glow scale-110" />
                {/* Avatar */}
                <motion.img
                  src="/images/avatar-ai.png"
                  alt="Artur Myzer AI Avatar"
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-am-mint/30 shadow-[0_0_40px_rgba(74,219,200,0.2)]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>

            {/* Speech bubble */}
            <div className="card-glass p-5 mb-8 relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/5 border-l border-t border-white/10 rotate-45" />
              <p className="text-white/70 text-sm font-body text-center leading-relaxed">
                "Chcesz porozmawiać o AI? Napisz do Artura — odpowiada w ciągu 24h"
              </p>
            </div>

            {/* Contact links */}
            <div className="space-y-4">
              <a href="mailto:artur@arturmyzer.ai" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 bg-am-primary/20 rounded-xl flex items-center justify-center group-hover:bg-am-primary group-hover:text-white text-am-primary transition-all shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/40 font-heading uppercase tracking-wider">Email</div>
                  <div className="text-white font-heading font-semibold">artur@arturmyzer.ai</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/arturmyzer/" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 bg-[#0A66C2]/20 rounded-xl flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white text-[#0A66C2] transition-all shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/40 font-heading uppercase tracking-wider">LinkedIn</div>
                  <div className="text-white font-heading font-semibold">Artur Myzer</div>
                </div>
              </a>
            </div>

            {/* Info box */}
            <div className="mt-8 p-5 card-glass">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-am-mint shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <p className="text-sm text-white/50 leading-relaxed font-body">
                  <strong className="text-white/80">Preferuję konkretne zapytania:</strong> opisz swój problem,
                  cel projektu i budżet orientacyjny. Dzięki temu przygotuję się do rozmowy.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              className="card-glass p-8 md:p-10"
              action="https://myzer.app.n8n.cloud/webhook/contact-form"
              method="POST"
            >
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-heading font-medium text-white/80 mb-2">Imię i nazwisko</label>
                    <input
                      type="text" id="name" name="name" required
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30
                                 focus:outline-none focus:ring-2 focus:ring-am-mint/30 focus:border-am-mint/50 transition-all"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-heading font-medium text-white/80 mb-2">Email</label>
                    <input
                      type="email" id="email" name="email" required
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30
                                 focus:outline-none focus:ring-2 focus:ring-am-mint/30 focus:border-am-mint/50 transition-all"
                      placeholder="jan@firma.pl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-heading font-medium text-white/80 mb-2">Firma</label>
                  <input
                    type="text" id="company" name="company"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30
                               focus:outline-none focus:ring-2 focus:ring-am-mint/30 focus:border-am-mint/50 transition-all"
                    placeholder="Nazwa firmy"
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-heading font-medium text-white/80 mb-2">Temat</label>
                  <select
                    id="topic" name="topic"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white
                               focus:outline-none focus:ring-2 focus:ring-am-mint/30 focus:border-am-mint/50 transition-all"
                  >
                    <option value="wdrozenie-ai" className="bg-am-dark">Wdrożenie AI w firmie</option>
                    <option value="sesja-1-na-1" className="bg-am-dark">Sesja 1-na-1</option>
                    <option value="agv-amr" className="bg-am-dark">Konsultacja AGV/AMR</option>
                    <option value="intralogistyka" className="bg-am-dark">Audyt intralogistyczny</option>
                    <option value="proces-sprzedazy" className="bg-am-dark">Proces sprzedaży AI</option>
                    <option value="inne" className="bg-am-dark">Inny temat</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-heading font-medium text-white/80 mb-2">Wiadomość</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30
                               focus:outline-none focus:ring-2 focus:ring-am-mint/30 focus:border-am-mint/50 transition-all resize-none"
                    placeholder="Opisz swój projekt lub zapytanie..."
                  />
                </div>

                <button type="submit" className="w-full btn-gradient justify-center text-center group text-base">
                  Wyślij wiadomość
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
