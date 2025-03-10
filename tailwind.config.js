/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  safelist: [
    {
      pattern: /^grid-cols-(1[0-2]|[1-9])$/,
      variants: ['md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /^col-span-(1[0-2]|[1-9])$/,
      variants: ['md', 'lg', 'xl', '2xl'],
    },
  ],
  theme: {
    extend: {
      backgroundColor: {
        'table-header': '#d0e9ff',
        'primary-action': '#002E6E',
      },
      fontFamily: {
        inter: ['Inter', 'sans'],
      },
      fontWeight: {
        'menu-title': '700',
        'form-title': '600',
        'row-title': '300',
      },
      fontSize: {
        'menu-title': '1.4rem',
        'form-title': '1.2rem',
        'row-title': '0.9rem',
      },
      textColor: {
        'menu-title': '#191919',
        'row-title': '#1D1D1D',
        'form-title': '#1D1D1D',
      },
      borderRadius: {
        'button-radius': '1.5rem',
      },
      borderColor: {
        'secondary-action': '#002E6E',
        'search-box': '#7070704D',
        'form-border': 'gray',
      },
      colors: {
        customYellow: '#F4EDB8',
      },
    },
  },
  plugins: [],
};
