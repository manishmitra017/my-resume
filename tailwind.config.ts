import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        // Geometric Theme Palette (Shelby Kay inspired)
        cream: {
          50: '#FFFDF9',
          100: '#FDF8F0',
          200: '#F9F0E3',
          300: '#F5E8D8',
          400: '#EFD9C4',
          500: '#E8CAB0',
          600: '#D4B193',
          700: '#B89472',
          800: '#8C6B4E',
          900: '#5C432E',
        },
        teal: {
          50: '#E8F7F6',
          100: '#D0EFED',
          200: '#A3E0DC',
          300: '#7DD1CC',
          400: '#5CBDB9',
          500: '#4AA9A5',
          600: '#3D8F8C',
          700: '#317472',
          800: '#255957',
          900: '#193D3C',
        },
        coral: {
          50: '#FDF2EF',
          100: '#FCE5DE',
          200: '#F9CBBD',
          300: '#F3A898',
          400: '#E8846B',
          500: '#DC6B50',
          600: '#C5533A',
          700: '#A3412D',
          800: '#7E3224',
          900: '#59241A',
        },
        navy: {
          50: '#E8EDEE',
          100: '#D1DBDD',
          200: '#A3B7BB',
          300: '#759399',
          400: '#4A6F77',
          500: '#234E52',
          600: '#1D4044',
          700: '#173336',
          800: '#112528',
          900: '#0B181A',
        },
        golden: {
          50: '#FEFAED',
          100: '#FDF5DB',
          200: '#FBEAB7',
          300: '#F8DF93',
          400: '#F5C35C',
          500: '#E8AF3A',
          600: '#C9932A',
          700: '#A57622',
          800: '#7D5A1B',
          900: '#553E14',
        },
        // Text colors for light theme
        text: {
          primary: '#2D2D2D',
          secondary: '#666666',
          muted: '#999999',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'drift': 'drift 15s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(45, 45, 45, 0.08)',
        'soft-lg': '0 8px 30px rgba(45, 45, 45, 0.12)',
        'card': '0 2px 12px rgba(45, 45, 45, 0.06)',
        'card-hover': '0 8px 24px rgba(45, 45, 45, 0.1)',
        'teal': '0 4px 20px rgba(92, 189, 185, 0.25)',
        'coral': '0 4px 20px rgba(232, 132, 107, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};

export default config;
