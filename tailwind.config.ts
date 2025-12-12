import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        // Warm Professional Palette
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        accent: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        warm: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'rotate': 'rotate 20s linear infinite',
        'border-flow': 'border-flow 3s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s linear infinite',
        'particle-float': 'particle-float 20s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(245, 158, 11, 0.4)',
        'glow-lg': '0 0 30px rgba(245, 158, 11, 0.6)',
        'glow-primary': '0 0 20px rgba(245, 158, 11, 0.25)',
        'glow-accent': '0 0 20px rgba(120, 113, 108, 0.3)',
        'glow-warm': '0 0 20px rgba(217, 119, 6, 0.3)',
        'warm': '0 0 10px rgba(245, 158, 11, 0.3), 0 0 20px rgba(217, 119, 6, 0.2), 0 0 30px rgba(180, 83, 9, 0.1)',
        'warm-strong': '0 0 15px rgba(245, 158, 11, 0.5), 0 0 30px rgba(217, 119, 6, 0.3), 0 0 45px rgba(180, 83, 9, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(245, 158, 11, 0.08)',
        '3d': '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(245, 158, 11, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(245, 158, 11, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(217, 119, 6, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(120, 113, 108, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(245, 158, 11, 0.12) 0px, transparent 50%)',
      },
      borderWidth: {
        '3': '3px',
      },
      blur: {
        '4xl': '100px',
      },
    },
  },
  plugins: [],
};

export default config;
