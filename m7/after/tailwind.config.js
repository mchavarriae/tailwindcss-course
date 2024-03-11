const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  //prefix: "my-",
  //separator: "_",
  //important: "#container",
  darkMode: "class",
  content: ["./src/*.{html,js}", "./public/index.html"],
  corePlugins: {
    preflight: false,
    accentColor: false
  },
  theme: {
    // spacing: {
    //   thin: "2px",
    //   thick: "8px",
    // },
    // colors: {},
    // screens: {},

    extend: {
      fontSize: {
        normal: "14px",
        small: "12px",
        large: "24px",
      },
      spacing: {
        thin: "2px",
        thick: "8px",
        30: "7.5rem",
        15: "3.75rem",
        standard: "1.25rem",
      },
      screens: {
        "2xl": "2560px",
        huge: "4000px",
      },
      
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  presets: [
    require("./src/bechdel.theme")
  ]
};
