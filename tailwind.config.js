const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '420px',
      ...defaultTheme.screens,
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        console: ['consolas', 'monaco', 'monospace'],
      },
      colors: {
        primary: '#00ABBD',
        secondary: '#0C2F3B',
        accent: '#3CB0D7',
        background: '#030A0D',
        text: '#D5EEF6',
        'monitor-inner-border': '#32323C',
        'monitor-side-pannel': '#0B0D14',
        'monitor-outer-border': '#393A3C',
        'monitor-bg': '#131723',
        'monitor-stand': '#323334',
        'editor-blue': '#4799EB',
        'editor-white': '#D9D9D9',
        'editor-red': '#EB5547',
        'editor-brown': '#CC9166',
        'editor-purple': '#DB75F0',
        'editor-green': '#47EB47',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      animation: {
        'fade-in-from-up': 'fade-in-from-up 0.5s ease-out 0.4s forwards',
        twist: 'twist 0.6s linear forwards infinite',
        'up-illuminate': 'up-illuminate 0.1s linear forwards',
      },
      keyframes: {
        'fade-in-from-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        twist: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(10deg)',
          },
          '50%': {
            transform: 'rotate(0deg)',
          },
          '75%': {
            transform: 'rotate(-10deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
        'up-illuminate': {
          '0%': {
            transform: 'translateY(0px)',
          },
          '100%': {
            transform: 'translateY(-5px)',
          },
        },
      },
    },
  },
}
