import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <section id="o-mnie" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div {...fadeInUp}>
            <div className="relative">
              <div className="aspect-[4/5] bg-myzer-grey rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-myzer-orange/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl font-heading font-bold text-myzer-orange">AM</span>
                    </div>
                    <p className="text-grey-cool text-sm">Zdjęcie profilowe</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-myzer-orange/5 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-myzer-orange/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              className="inline-block px-3 py-1 bg-myzer-orange/10 text-myzer-orange font-heading font-semibold text-sm rounded-full mb-6"
              {...fadeInUp}
            >
              O mnie
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl font-heading font-bold text-myzer-dark mb-6"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Praktyk, nie teoretyk
            </motion.h2>

            <motion.div
              className="space-y-4 text-grey-medium leading-relaxed"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Nazywam się <strong className="text-myzer-dark">Artur Myzer</strong>.
                Od 18 lat działam w branży intralogistycznej — od systemów rurowych
                przez AGV/AMR po kompletne projekty automatyzacji magazynów i linii produkcyjnych.
              </p>
              <p>
                Równolegle rozwijam ekspertyzę w sztucznej inteligencji.
                Szkolę firmy B2B z praktycznego wdrażania AI w codziennych procesach —
                od automatyzacji raportów przez generowanie treści po inteligentne systemy CRM.
              </p>
              <p>
                Moje podejście? <strong className="text-myzer-dark">Konkretne liczby, nie slogany.</strong>{' '}
                Czas montażu: 2h. ROI wdrożenia: 6 miesięcy. Oszczędność: 40% czasu na raportowaniu.
                Tak rozmawiam z klientami i tak prowadzę projekty.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {['Lean Manufacturing', 'DMAIC', 'AGV/AMR', 'AI dla B2B', 'Six Sigma', 'Value Stream Mapping'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-myzer-grey text-grey-medium text-sm font-medium rounded-lg">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
