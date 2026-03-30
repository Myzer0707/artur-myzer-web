import React from 'react';
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  currency?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: 'primary' | 'secondary';
}

const PricingCard = ({
  planName, description, price, currency = "PLN", features, buttonText, isPopular = false, buttonVariant = 'primary'
}: PricingCardProps) => {
  const cardClasses = `
    backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col transition-all duration-300
    from-white/10 to-white/5 border border-white/10 backdrop-brightness-[0.91]
    ${isPopular ? 'scale-105 relative ring-2 ring-[#1B6B7D]/40 from-white/20 to-white/10 border-[#1B6B7D]/30 shadow-2xl' : ''}
  `;
  const buttonClasses = `
    mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition font-sans
    ${buttonVariant === 'primary'
      ? 'bg-[#1B6B7D] hover:bg-[#2A8A9E] text-white'
      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
    }
  `;

  return (
    <div className={cardClasses.trim()}>
      {isPopular && (
        <div className="absolute -top-4 right-4 px-3 py-1 text-[12px] font-semibold rounded-full bg-[#1B6B7D] text-white">
          Najpopularniejszy
        </div>
      )}
      <div className="mb-3">
        <h2 className="text-[36px] font-extralight tracking-[-0.03em] text-white font-display">{planName}</h2>
        <p className="text-[14px] text-white/70 mt-1 font-sans">{description}</p>
      </div>
      <div className="my-6 flex items-baseline gap-2">
        <span className="text-[42px] font-extralight text-white font-display">{price}</span>
        <span className="text-[14px] text-white/70 font-sans">{currency}</span>
      </div>
      <div className="w-full mb-5 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)]"></div>
      <ul className="flex flex-col gap-2 text-[14px] text-white/90 mb-6 font-sans">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon className="text-[#1B6B7D] w-4 h-4" /> {feature}
          </li>
        ))}
      </ul>
      <RippleButton className={buttonClasses.trim()}>{buttonText}</RippleButton>
    </div>
  );
};

const plans: PricingCardProps[] = [
  {
    planName: 'Starter',
    description: 'Protokół 01 — zacznij od fundamentów',
    price: '799',
    features: [
      'Google Workspace setup',
      'Domena + emaile firmowe',
      'Konfiguracja Drive i Calendar',
      'Integracja z ChatGPT / Claude',
      'Przewodnik krok po kroku',
    ],
    buttonText: 'Kup Protokół 01',
    buttonVariant: 'secondary',
  },
  {
    planName: 'Bundle',
    description: 'Protokoły 01–03 — fundament + sprzedaż + automatyzacja',
    price: '2 499',
    features: [
      'Wszystko ze Startera',
      'CRM Pipedrive — pełna konfiguracja',
      'Baza danych klientów (email + telefon)',
      'Automatyzacje n8n',
      'Pipeline sprzedażowy',
      'Lead generation z LinkedIn',
    ],
    buttonText: 'Kup Bundle — oszczędzasz 298 PLN',
    isPopular: true,
    buttonVariant: 'primary',
  },
  {
    planName: 'Full Stack',
    description: 'Wszystkie 5 Protokołów — pełny system AI',
    price: '3 999',
    features: [
      'Wszystko z Bundle',
      'AI Governance zespołowy',
      'Polityka danych i ROI',
      'Własny JARVIS — AI operator firmy',
      'Dostęp do aktualizacji',
      'Społeczność i wsparcie',
    ],
    buttonText: 'Kup Full Stack — oszczędzasz 2 297 PLN',
    buttonVariant: 'primary',
  },
];

export function PricingProtocols() {
  return (
    <section className="py-32 section-dark relative overflow-hidden">
      <main className="relative w-full flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-5xl mx-auto text-center mb-14">
          <h2 className="text-display-md text-white">
            Wybierz swój <span className="text-[#1B6B7D]">plan wdrożenia</span>
          </h2>
          <p className="mt-3 text-lg text-white/60 max-w-2xl mx-auto">
            Zacznij od jednego protokołu lub weź cały system. Bez abonamentu — płacisz raz, masz na zawsze.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center w-full max-w-4xl">
          {plans.map((plan) => <PricingCard key={plan.planName} {...plan} />)}
        </div>
      </main>
    </section>
  );
}

export default PricingProtocols;
