module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#00f470',
      secondary: '#04062A',
      second: '#0038dd',
      text: '#828282',
      danger: '#003EDC',
      success: '#4BB543',
      white: '#ffffff',
      black: '#000000',
      purple: '#EF00D7',
      gray: '#FFF5F5',
      yellow: '#F4B000'
    }
  }, 
  variants: {
    extend: {},
  },
  plugins: [],
};
