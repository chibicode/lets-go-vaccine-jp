const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      safelist: ['text-3xl', 'md:mb-3', 'md:text-xl', 'py-4']
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['DotGothic16', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    screens: {
      xs: '400px',
      ...defaultTheme.screens
    },
    extend: {
      fontSize: {
        xxs: '0.65rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
