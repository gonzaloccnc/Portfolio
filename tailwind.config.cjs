/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{tsx,ts}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: '#3E7BFA',
        'blue-light': '#6395ff',
        'blue-soft': '#9cbcff',
        orange: '#ff5308',
        'orange-light': '#ff7d44',
        'orange-soft': '#ffa27a',
        night: '#24292f',
        night2: '#2d2e32',
        'night-light': '#363a3e',
        'night-soft': '#4c4d50',
        contact: '#011627',
        inputs: '#011221',
        'input-b': '#1E2D3D',
        label: '#607B96',
        'input-text': '#465E77',
        btn: '#1C2B3A',
        wordR: '#C98BDF',
        var: '#5565E8',
        char: '#607B96',
        text: '#FEA55F',
        light: '#FBFBFE'
      },
      backgroundImage: {
        wave: 'url(./assets/wave.png)',
        techsed: 'url(./assets/techsed.png)',
        dopamine: 'url(./assets/dopamine.png)',
        api: 'url(./assets/api.jpg)',
        me: 'url(./assets/me.webp)'
      },
      grayscale: {
        500: '0.5',
        600: '0.6',
        700: '0.7',
        800: '0.8',
        900: '0.9',
      },
      fontFamily: {
        ubuntu: 'Ubuntu Mono',
      },
      screens: {
        mini: '280px',
        minsm: '500px',
        minmd: '700px'
      }
    },
  },
  plugins: [],
}
