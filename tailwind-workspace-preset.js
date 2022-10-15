const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  theme: {
    screens: {
      xsm: { max: '639px' },
      xmd: { max: '767px' },
      xlg: { max: '1023px' },
      xxl: { max: '1279px' },
      x2xl: { max: '1535px' },
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: {
        max: 'max-content',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
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
        mainText: colors.sky[500],
        mainTitle: colors.sky[400],
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
