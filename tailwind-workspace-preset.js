const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: {
        max: 'max-content',
      },
      colors: {
        darkIcon: colors.slate[500],
        lightIcon: colors.slate[400],
        darkBg: colors.slate[900],
        lightBg: colors.slate[200],
        darkBoxBg: colors.slate[800],
        darkText: colors.slate[100],
        lightText: colors.slate[900],
        darkBorder: colors.slate[500],
        lightBorder: colors.slate[900],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
