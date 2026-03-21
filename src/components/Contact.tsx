import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
};

export default function Contact() {
  return (
    <section id="kontakt" className="section-padding bg-myzer-dark">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — CTA */}
          <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-myzer-orange/10 text-myzer-orange font-heading font-semibold text-sm rounded-full mb-6">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Porozmawiajmy o Twoim projekcie
            </h2>
            <p className="text-grey-cool leading-relaxed mb-8">
              Szukasz szkolenia AI dla zespołu? Planujesz wdrożenie AGV/AMR?
              A może potrzebujesz konsultacji intralogistycznej?
              Napisz — odpowiadam w ciągu 24h.
            </p>

            <div className="space-y-4 mb-10">
              <a href="mailto:artur.myziak@myzer.pl" className="flex items-center gap-3 text-white hover:text-myzer-orange transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-myzer-orange/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span>artur.myziak@myzer.pl</span>
              </a>
              <a href="https://www.linkedin.com/in/arturmyzer/" target="_blank" rel="noopener" className="flex items-center gap-3 text-white hover:text-myzer-orange transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-myzer-orange/10 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span>LinkedIn — Artur Myzer</span>
              </a>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-grey-cool">
                <strong className="text-white">Preferuję konkretne zapytania:</strong> opisz swój problem,
                cel projektu i budżet orientacyjny. Dzięki temu mogę przygotować się do rozmowy
                i zaproponować najlepsze rozwiązanie od pierwszego kontaktu.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <form
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              action="https://formspree.io/f/placeholder"
              method="POST"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-heading font-medium text-grey-cool mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-grey-cool/50
                             focus:outline-none focus:ring-2 focus:ring-myzer-orange/50 focus:border-myzer-orange/50 transition-colors"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-heading font-medium text-grey-cool mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-grey-cool/50
                             focus:outline-none focus:ring-2 focus:ring-myzer-orange/50 focus:border-myzer-orange/50 transition-colors"
                    placeholder="jan@firma.pl"
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-heading font-medium text-grey-cool mb-2">
                    Temat
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white
                             focus:outline-none focus:ring-2 focus:ring-myzer-orange/50 focus:border-myzer-orange/50 transition-colors"
                  >
                    <option value="szkolenie-ai" className="bg-myzer-dark">Szkolenie AI dla zespołu</option>
                    <option value="wdrozenie-ai" className="bg-myzer-dark">Wdrożenie AI w firmie</option>
                    <option value="agv-amr" className="bg-myzer-dark">Konsultacja AGV/AMR</option>
                    <option value="intralogistyka" className="bg-myzer-dark">Audyt intralogistyczny</option>
                    <option value="inne" className="bg-myzer-dark">Inny temat</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-heading font-medium text-grey-cool mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-grey-cool/50
                             focus:outline-none focus:ring-2 focus:ring-myzer-orange/50 focus:border-myzer-orange/50 transition-colors resize-none"
                    placeholder="Opisz swój projekt lub zapytanie..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary justify-center text-center"
                >
                  Wyślij wiadomość
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
