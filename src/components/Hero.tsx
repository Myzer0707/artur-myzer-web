import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-myzer-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(235,93,48,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-myzer-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-myzer-navy/10 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10 section-padding pt-32 md:pt-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-2 bg-myzer-orange/10 text-myzer-orange font-heading font-semibold text-sm rounded-full mb-8">
              AI Expert &bull; Intralogistics Consultant
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Łączę{' '}
            <span className="text-myzer-orange">sztuczną inteligencję</span>
            {' '}z 18-letnim doświadczeniem w{' '}
            <span className="text-blue-grey">intralogistyce</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-grey-cool max-w-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Pomagam firmom B2B wdrażać AI w codziennych procesach i optymalizować
            intralogistykę metodami Lean, DMAIC i AGV/AMR. Konkretne wyniki,
            nie puste obietnice.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#szkolenia" className="btn-primary text-center">
              Szkolenia AI
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#o-mnie" className="btn-secondary !border-white/20 !text-white hover:!bg-white hover:!text-myzer-dark text-center">
              Poznaj mnie
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-myzer-orange">18+</div>
              <div className="text-sm text-grey-cool mt-1">lat w intralogistyce</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-myzer-orange">50+</div>
              <div className="text-sm text-grey-cool mt-1">wdrożeń AGV/AMR</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-myzer-orange">AI</div>
              <div className="text-sm text-grey-cool mt-1">szkolenia dla firm B2B</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
