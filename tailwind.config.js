module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        lightBg: {
          DEFAULT: '#FBE8A6'
        },
        darkBg: {
          DEFAULT: '#F4976C'
        },
        darkAccent: {
          DEFAULT: '#303C6C'
        },
        lightAccent: {
          DEFAULT: '#B4DFE5',
          lighter: '#D2FDFF'
        },
      },
      fontFamily: {
        'heading': 'Rosario, Arial, sans-serif',
        'typeface': '"Crimson Text", serif',
        'code': '"Overpass Mono", ui-monospace',
      },
    },
  },
  variants: {
    extend: {
      // boxSizing: ['hover', 'focus',], PLAY WITH THIS
    },
  },
  plugins: [],
}
