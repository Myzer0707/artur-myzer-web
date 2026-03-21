import { motion } from 'framer-motion';

const clients = [
  'Toyota', 'Bosch', 'BSH', 'Continental', 'Volkswagen',
  'Aklima', 'Edytor', 'Immobilia', 'Majmax', 'Dako',
];

export default function LogoCloud() {
  const doubled = [...clients, ...clients];

  return (
    <section className="relative py-16 bg-am-dark overflow-hidden border-t border-white/5">
      <div className="container-narrow mb-8">
        <motion.p
          className="text-center text-sm font-heading font-medium text-am-grey/60 uppercase tracking-[0.2em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Zaufali mi
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-am-dark to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-am-dark to-transparent" />

        <div className="flex animate-marquee">
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <span className="text-xl md:text-2xl font-heading font-bold text-white/15 hover:text-am-mint/40 transition-colors duration-500 whitespace-nowrap select-none cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
