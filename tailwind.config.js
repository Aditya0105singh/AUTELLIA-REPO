/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Layout.jsx"
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Dark mode colors (existing)
        background: 'hsl(222.2 84% 4.9%)',
        foreground: 'hsl(210 40% 98%)',
        primary: {
          DEFAULT: 'hsl(217.2 91.2% 59.8%)',
          foreground: 'hsl(222.2 47.4% 11.2%)',
        },
        secondary: {
          DEFAULT: 'hsl(217.2 32.6% 17.5%)',
          foreground: 'hsl(210 40% 98%)',
        },
        accent: {
          DEFAULT: 'hsl(263.4 70% 50.4%)',
          foreground: 'hsl(210 40% 98%)',
        },
        muted: {
          DEFAULT: 'hsl(217.2 32.6% 17.5%)',
          foreground: 'hsl(215 20.2% 65.1%)',
        },
        card: {
          DEFAULT: 'hsl(224 71.4% 4.1%)',
          foreground: 'hsl(210 40% 98%)',
        },
        border: 'hsl(217.2 32.6% 17.5%)',
        input: 'hsl(217.2 32.6% 17.5%)',
        ring: 'hsl(224.3 76.3% 48%)',
        // Light/Dark theme colors
        light: {
          bg: '#FFFFFF',
          surface: '#F9FAFB',
          panel: '#F3F4F6',
          text: {
            primary: '#1A1A1A',
            secondary: '#4B5563',
            muted: '#6B7280',
          },
          border: '#E5E7EB',
        },
        dark: {
          bg: '#0A0F19',
          surface: '#1A2332',
          panel: '#242B3D',
          text: {
            primary: '#F0F4F8',
            secondary: '#B8C5D1',
            muted: '#94A3B8',
          },
          border: 'rgba(255,255,255,0.12)',
        },
        brand: {
          purple: {
            light: '#9333EA',
            DEFAULT: '#6D28D9',
            dark: '#5B21B6',
          },
          gradient: {
            from: '#6D28D9',
            to: '#9333EA',
          },
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Cal Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        // Consistent typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],     // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px (base)
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
        '8xl': ['6rem', { lineHeight: '1' }],           // 96px
        '9xl': ['8rem', { lineHeight: '1' }],           // 128px
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      spacing: {
        // 8px spacing system
        1: '0.125rem', // 2px
        2: '0.25rem',  // 4px
        3: '0.375rem', // 6px
        4: '0.5rem',   // 8px (base)
        5: '0.625rem', // 10px
        6: '0.75rem',  // 12px
        8: '1rem',     // 16px (2x base)
        10: '1.25rem', // 20px
        12: '1.5rem',  // 24px (3x base)
        16: '2rem',    // 32px (4x base)
        18: '2.25rem', // 36px
        20: '2.5rem',  // 40px (5x base)
        22: '2.75rem', // 44px
        24: '3rem',    // 48px (6x base)
        28: '3.5rem',  // 56px (7x base)
        30: '3.75rem', // 60px
        32: '4rem',    // 64px (8x base)
        36: '4.5rem',  // 72px (9x base)
        40: '5rem',    // 80px (10x base)
        44: '5.5rem',  // 88px
        48: '6rem',    // 96px (12x base)
        52: '6.5rem',  // 104px
        56: '7rem',    // 112px (14x base)
        60: '7.5rem',  // 120px
        64: '8rem',    // 128px (16x base)
        72: '9rem',    // 144px (18x base)
        80: '10rem',   // 160px (20x base)
        96: '12rem',   // 192px (24x base)
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
