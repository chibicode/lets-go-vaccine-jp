const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./pages/*.js']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['DotGothic16', 'sans-serif']
    },
    screens: {
      xs: '400px',
      ...defaultTheme.screens
    },
    extend: {
      fontSize: {
        xxs: '0.65rem'
      },
      height: {
        '1em': '1em'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
