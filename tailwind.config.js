const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx,vue}', './components/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        sky: colors.sky,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/forms')],
}
