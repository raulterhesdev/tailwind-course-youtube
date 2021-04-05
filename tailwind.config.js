module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'dog-img': "url('/dog.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
