module.exports = {
  content: ["*"],
  theme: {
    screens: {

      usm: { max: "420px" },

      sm: { max: "720px" },
      // => @media (min-width: 576px) { ... }

      xy: { max: "912px" },
      // 'min': '721px',

      md: { max: "1150px" },
      // => @media (min-width: 960px) { ... }
      // 'min': '913px',

      lg: { max: "1440px" },
      // => @media (min-width: 1440px) { ... }
      // 'min' : '1151px',
    },
    extend: {},
  },
  plugins: [],
};
