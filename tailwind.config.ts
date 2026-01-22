import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1E3A8A',
          'blue-light': '#3B82F6',
          'blue-dark': '#1E40AF',
        },
        accent: {
          rose: '#EC4899',
          'rose-light': '#F472B6',
          'rose-dark': '#DB2777',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          light: '#1A1A1A',
          medium: '#2A2A2A',
        },
        light: {
          DEFAULT: '#FFFFFF',
          gray: '#F5F5F5',
          muted: '#E5E5E5',
        }
      },
      fontFamily: {
        display: ['var(--font-sora)', 'sans-serif'],
        sans: ['var(--font-nunito)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, #1E3A8A 0%, #EC4899 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
      },
    },
  },
  plugins: [],
}
export default config
