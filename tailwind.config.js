const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "420px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "monitor-inner-border": "#32323C",
        "monitor-side-pannel": "#0B0D14",
        "monitor-outer-border": "#393A3C",
        "monitor-bg": "#131723",
        "monitor-stand": "#323334",
        "editor-blue": "#4799EB",
        "editor-white": "#D9D9D9",
        "editor-red": "#EB5547",
        "editor-brown": "#CC9166",
        "editor-purple": "#DB75F0",
        "editor-green": "#47EB47",
        "console-bg": "#441135",
        "console-menu-bar": "#5F5F5F",
      },
    },
  },
};
