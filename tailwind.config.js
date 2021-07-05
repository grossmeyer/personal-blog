module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
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
