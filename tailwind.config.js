/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "shades-white": "#fff",
        "base-color-primary-color": "#08b783",
        mediumseagreen: {
          "100": "#1edb9f",
          "200": "#09ba82",
        },
        "primary-100": "#b9e5d1",
        "neutral-gray400": "#a0a0a0",
        "text-color-contentsecondary": "#414141",
        darkgray: "#b5afaf",
        "default-systemblue-light": "#007aff",
        "primary-700": "#008955",
        "border-divider-border": "#d0d0d0",
        "text-and-icon-contentdisbaled": "#b8b8b8",
        dimgray: "#726b6b",
        "text-color-contenttertiary": "#5a5a5a",
        "text-and-icon-contentoninverse": "#121212",
        "primary-800": "#007848",
        "primary-50": "#e2f5ed",
        mediumaquamarine: {
          "100": "#8ad4b5",
          "200": "rgba(49, 202, 154, 0.75)",
        },
        seagreen: "#05613e",
        "neutral-gray-900": "#141414",
        "drafting-secondary": "rgba(194, 204, 222, 0.25)",
      },
      spacing: {},
      fontFamily: {
        "subhead-sm-sh-sm-medium": "Poppins",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      base: "16px",
      lg: "18px",
      xs: "12px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
