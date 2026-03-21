import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  return (
    <section
      id="kontakt"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#111111' }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(151,55,0,0.2) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="flex justify-center mb-6">
          <span className="badge-orange">Kontakt</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white text-center mb-4 max-w-3xl mx-auto"
          style={{ letterSpacing: '-0.02em' }}
        >
          Zacznijmy{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #eb790e, #f59332)' }}
          >
            rozmowę
          </span>
        </motion.h2>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="text-lg text-white/45 text-center max-w-xl mx-auto mb-16 font-body leading-relaxed"
        >
          Wypełnij formularz lub napisz bezpośrednio. Odpowiadam w ciągu 24 godzin.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — info */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div className="space-y-4 mb-8">
              {/* Email */}
              <a
                href="mailto:artur.myziak@myzer.pl"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(235,121,14,0.1)', color: '#eb790e' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/35 font-body mb-0.5">Email</p>
                  <p className="font-heading font-semibold text-white text-[15px] group-hover:text-[#eb790e] transition-colors">
                    artur.myziak@myzer.pl
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/arturmyzer/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/35 font-body mb-0.5">LinkedIn</p>
                  <p className="font-heading font-semibold text-white text-[15px] group-hover:text-[#eb790e] transition-colors">
                    linkedin.com/in/arturmyzer
                  </p>
                </div>
              </a>

              {/* Website */}
              <div
                className="flex items-center gap-4 p-5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/35 font-body mb-0.5">Strona</p>
                  <p className="font-heading font-semibold text-white text-[15px]">arturmyzer.ai</p>
                </div>
              </div>
            </div>

            {/* JARVIS note */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'rgba(235,121,14,0.07)',
                border: '1px solid rgba(235,121,14,0.18)',
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(235,121,14,0.15)', color: '#eb790e' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm mb-1">Szybka odpowiedź</p>
                  <p className="text-white/40 text-xs font-body leading-relaxed">
                    JARVIS monitoruje skrzynkę 24/7 i klasyfikuje wiadomości.
                    Odpiszę do 24h w dni robocze.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(235,121,14,0.12)', color: '#eb790e' }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl mb-2">Wiadomosc wyslana!</h3>
                  <p className="text-white/45 text-sm font-body">Odpisze do Ciebie w ciagu 24 godzin.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold text-white/40 mb-2 uppercase tracking-wider">
                        Imie i nazwisko
                      </label>
                      <input type="text" required placeholder="Jan Kowalski" className="input-glass" />
                    </div>
                    <div>
                      <label className="block text-xs font-heading font-semibold text-white/40 mb-2 uppercase tracking-wider">
                        Firma
                      </label>
                      <input type="text" placeholder="Nazwa firmy" className="input-glass" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-white/40 mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input type="email" required placeholder="jan@firma.pl" className="input-glass" />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-white/40 mb-2 uppercase tracking-wider">
                      Temat
                    </label>
                    <select className="input-glass" style={{ appearance: 'none' }}>
                      <option value="" className="bg-[#1a1a1a]">Wybierz temat...</option>
                      <option value="jarvis" className="bg-[#1a1a1a]">JARVIS as a Service</option>
                      <option value="ai" className="bg-[#1a1a1a]">Konsultacja AI</option>
                      <option value="intra" className="bg-[#1a1a1a]">Intralogistyka</option>
                      <option value="wspolpraca" className="bg-[#1a1a1a]">Wspolpraca</option>
                      <option value="inne" className="bg-[#1a1a1a]">Inne</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-white/40 mb-2 uppercase tracking-wider">
                      Wiadomosc *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Opisz krotko czego szukasz i jakie masz wyzwania w firmie..."
                      className="input-glass resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base"
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Wysylam...
                      </>
                    ) : (
                      <>
                        Wyslij wiadomosc
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/25 text-center font-body">
                    Wysylajac formularz wyrazasz zgode na przetwarzanie danych osobowych w celu odpowiedzi.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
