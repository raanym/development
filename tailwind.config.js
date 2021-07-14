module.exports = {
  purge: [
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: '#008080',
        tealLight: '#BBF1F1',
        tealLighter: '#AFEEEE',
        tealShade: '#007788',
      },
      fontFamily: {
        waheed: ['MV_Waheed'],
        faseyha: ['MV_Faseyha'],
      },
      backgroundImage: {
        'thundi': "url('img/thundi.jpg')",
        'harbour': "url('img/harbour.jpg')",
        'bilhifeyshi': "url('img/bilhifeyshi.jpg')",
        'rasmee-dhandu': "url('img/rasmee-dhandu.jpg')",
        'dkilhi': "url('img/dhadimagi-kilhi.jpg')",
        'bkilhi': "url('img/Bandaara-Kilhi.jpg')",
        'scomplex': "url('img/sports-arena.jpg')",
        'dhg-arena': "url('img/dhoodigan-arena.jpg')",
        'dha-arena': "url('img/dhadimago-arena.jpg')",
        'stadium': "url('img/stadium.jpg')",
        'kandhoval': "url('img/kandhoval.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
