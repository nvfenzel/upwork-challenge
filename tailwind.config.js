/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    extend: {
      colors: {
        'primary': '#6941C6',
        'onblur' : '#F4EBFF',
        'onfocus' : '#7F56D9',
        'grey' : '#475467',
        'grey-dark' : '#101828',
        'grey-table' : '#FCFCFD',
        'grey-700' : '#344054'
      },
      width: {
        '100px': '100px',
        '200px': '200px',
        '300px': '300px',
        '400px': '400px',
        '500px': '500px',
        '550px': '550px',
        '600px': '600px',
        '700px': '700px',
        '800px': '800px',
        '900px': '900px',
        '1000px': '1000px',
      },
    },
  },
  plugins: [],
}