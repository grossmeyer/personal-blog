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
        synthgrape: {
          50: '#F4F1F8',
          100: '#DFD6EA',
          200: '#BFAED6',
          300: '#9F85C1',
          400: '#7F5CAD',
          500: '#624488',
          600: '#4E376D',
          700: '#3B2951',
          800: '#312244',
          900: '#1D1529',
          1000: '#140E1B',
        },
        synthpurple: {
          50: '#EED3E7',
          100: '#E8C5DF',
          200: '#E2B6D7',
          300: '#DCA7CF',
          400: '#D08ABF',
          500: '#C46BAE',
          600: '#B9509F',
          700: '#A04088',
          800: '#833470',
          900: '#662957',
          1000: '#3A1732',
        },
        synthpink: {
          50: '#FADCEE',
          100: '#F7CAE6',
          200: '#F2A6D5',
          300: '#EB7BC0',
          400: '#E75FB3',
          500: '#E23CA2',
          600: '#D52090',
          700: '#B11B78',
          800: '#8E1560',
          900: '#6A1048',
          1000: '#470B30',
        },
        synthblue: {
          50: '#C6EEFA',
          100: '#A1E3F7',
          200: '#7BD8F4',
          300: '#68D2F3',
          400: '#4CC9F0',
          500: '#1DBCED',
          600: '#11A3D0',
          700: '#0E85AA',
          800: '#0B6884',
          900: '#084A5E',
          1000: '#052C39',
        },
        synthgreen: {
          50: '#EFFBF6',
          100: '#CEF3E4',
          200: '#A1E8CC',
          300: '#8CE3C0',
          400: '#6BDBAE',
          500: '#3ACF94',
          600: '#2CB57E',
          700: '#249467',
          800: '#1C7350',
          900: '#145239',
          1000: '#0C3122',
        },
      },
      fontFamily: {
        'header': 'Rosario, Arial, sans-serif',
        'callout': 'Prompt, Arial, sans-serif',
        'typeface': 'Nunito, serif',
        'code': '"Overpass Mono", ui-monospace',
      },
    },
  },
  variants: {
    extend: {
      // boxSizing: ['hover', 'focus',], PLAY WITH THIS
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
