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
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
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
        'glow': '0 0 20px rgba(14, 165, 233, 0.5)',
        'glow-lg': '0 0 30px rgba(14, 165, 233, 0.8)',
        'glow-primary': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.4)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
        'neon': '0 0 10px rgba(14, 165, 233, 0.5), 0 0 20px rgba(168, 85, 247, 0.3), 0 0 30px rgba(6, 182, 212, 0.2)',
        'neon-strong': '0 0 15px rgba(14, 165, 233, 0.7), 0 0 30px rgba(168, 85, 247, 0.5), 0 0 45px rgba(6, 182, 212, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(14, 165, 233, 0.1)',
        '3d': '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(14, 165, 233, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(14, 165, 233, 0.2) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.2) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(14, 165, 233, 0.2) 0px, transparent 50%)',
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
