/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'am-bg': '#0d0d0d',
        'am-bg-card': '#141414',
        'am-bg-elevated': '#1a1a1a',
        'am-orange': '#eb790e',
        'am-orange-deep': '#973700',
        'am-orange-light': '#f59332',
        'am-amber': '#f0a500',
        'am-white': '#ffffff',
        'am-grey': '#888888',
        'am-grey-light': '#aaaaaa',
        'am-border': 'rgba(255,255,255,0.08)',
        'am-border-hover': 'rgba(255,255,255,0.15)',
      },
      fontFamily: {
        heading: ['Manrope', 'Inter', 'sans-serif'],
        body: ['Inter', 'Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'blob': 'blob 8s infinite',
        'blob-reverse': 'blob 8s infinite reverse',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'orange-glow': 'radial-gradient(ellipse at center, rgba(235,121,14,0.15) 0%, transparent 70%)',
        'orange-glow-strong': 'radial-gradient(ellipse at center, rgba(235,121,14,0.25) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
};
