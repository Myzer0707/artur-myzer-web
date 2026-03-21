import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function Contact() {
  return (
    <section id="kontakt" className="section-padding bg-white relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-am-primary/20 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-am-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-am-mint/[0.03] rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <span className="badge-primary mb-6">Kontakt</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-am-dark mb-4">
            Porozmawiajmy o{' '}
            <span className="text-gradient-primary">Twoim projekcie</span>
          </h2>
          <p className="text-am-grey-dark max-w-2xl mx-auto text-lg">
            Szukasz szkolenia AI? Planujesz wdrozenie AGV/AMR?
            Napisz — odpowiadam w ciagu 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div className="lg:col-span-2" {...fadeUp}>
            <div className="space-y-6 mb-10">
              <a href="mailto:artur@arturmyzer.ai" className="flex items-center gap-4 p-4 rounded-xl hover:bg-am-grey-lighter transition-colors group">
                <div className="w-12 h-12 bg-am-primary/10 rounded-xl flex items-center justify-center group-hover:bg-am-primary group-hover:text-white text-am-primary transition-all shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-am-grey font-heading uppercase tracking-wider">Email</div>
                  <div className="text-am-dark font-heading font-semibold">artur@arturmyzer.ai</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/arturmyzer/" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-xl hover:bg-am-grey-lighter transition-colors group">
                <div className="w-12 h-12 bg-[#0A66C2]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white text-[#0A66C2] transition-all shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-am-grey font-heading uppercase tracking-wider">LinkedIn</div>
                  <div className="text-am-dark font-heading font-semibold">Artur Myzer</div>
                </div>
              </a>

              <a href="tel:+48000000000" className="flex items-center gap-4 p-4 rounded-xl hover:bg-am-grey-lighter transition-colors group">
                <div className="w-12 h-12 bg-am-mint/10 rounded-xl flex items-center justify-center group-hover:bg-am-mint group-hover:text-am-dark text-am-mint transition-all shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-am-grey font-heading uppercase tracking-wider">Telefon</div>
                  <div className="text-am-dark font-heading font-semibold">Umow rozmowe</div>
                </div>
              </a>
            </div>

            {/* Info box */}
            <div className="p-5 bg-am-grey-lighter rounded-xl border border-am-grey-light">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-am-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <p className="text-sm text-am-grey-dark leading-relaxed">
                  <strong className="text-am-dark">Preferuje konkretne zapytania:</strong> opisz swoj problem,
                  cel projektu i budzet orientacyjny. Dzieki temu przygotuje sie do rozmowy
                  i zaproponuje najlepsze rozwiazanie od pierwszego kontaktu.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div className="lg:col-span-3" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <form
              className="card-elevated p-8 md:p-10"
              action="https://myzer.app.n8n.cloud/webhook/contact-form"
              method="POST"
            >
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-heading font-medium text-am-dark mb-2">Imie i nazwisko</label>
                    <input
                      type="text" id="name" name="name" required
                      className="w-full px-4 py-3.5 bg-am-grey-lighter border border-am-grey-light rounded-xl text-am-dark placeholder-am-grey
                                 focus:outline-none focus:ring-2 focus:ring-am-primary/30 focus:border-am-primary/50 transition-all"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-heading font-medium text-am-dark mb-2">Email</label>
                    <input
                      type="email" id="email" name="email" required
                      className="w-full px-4 py-3.5 bg-am-grey-lighter border border-am-grey-light rounded-xl text-am-dark placeholder-am-grey
                                 focus:outline-none focus:ring-2 focus:ring-am-primary/30 focus:border-am-primary/50 transition-all"
                      placeholder="jan@firma.pl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-heading font-medium text-am-dark mb-2">Firma</label>
                  <input
                    type="text" id="company" name="company"
                    className="w-full px-4 py-3.5 bg-am-grey-lighter border border-am-grey-light rounded-xl text-am-dark placeholder-am-grey
                               focus:outline-none focus:ring-2 focus:ring-am-primary/30 focus:border-am-primary/50 transition-all"
                    placeholder="Nazwa firmy"
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-heading font-medium text-am-dark mb-2">Temat</label>
                  <select
                    id="topic" name="topic"
                    className="w-full px-4 py-3.5 bg-am-grey-lighter border border-am-grey-light rounded-xl text-am-dark
                               focus:outline-none focus:ring-2 focus:ring-am-primary/30 focus:border-am-primary/50 transition-all"
                  >
                    <option value="szkolenie-ai">Szkolenie AI dla zespolu</option>
                    <option value="wdrozenie-ai">Wdrozenie AI w firmie</option>
                    <option value="agv-amr">Konsultacja AGV/AMR</option>
                    <option value="intralogistyka">Audyt intralogistyczny</option>
                    <option value="inne">Inny temat</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-heading font-medium text-am-dark mb-2">Wiadomosc</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    className="w-full px-4 py-3.5 bg-am-grey-lighter border border-am-grey-light rounded-xl text-am-dark placeholder-am-grey
                               focus:outline-none focus:ring-2 focus:ring-am-primary/30 focus:border-am-primary/50 transition-all resize-none"
                    placeholder="Opisz swoj projekt lub zapytanie..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary justify-center text-center group">
                  Wyslij wiadomosc
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
