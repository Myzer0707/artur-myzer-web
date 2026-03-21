/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'am-primary': '#006991',
        'am-dark': '#0E1E2B',
        'am-mint': '#4ADBC8',
        'am-mint-light': '#8AE9C1',
        'am-cyan': '#00E9F4',
        'am-grey-dark': '#444444',
        'am-grey': '#B0B0B0',
        'am-grey-light': '#F3F3F4',
      },
      fontFamily: {
        heading: ['Red Hat Display', 'Montserrat', 'sans-serif'],
        body: ['Soleto', 'Montserrat', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
