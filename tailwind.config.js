const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
