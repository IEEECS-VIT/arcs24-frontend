/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#01061b",
          "200": "rgba(0, 0, 0, 0.15)",
        },
        white: "#fff",
        gainsboro: "rgba(217, 217, 217, 0.18)",
        cornflowerblue: "#9f9dff",
        "bright-pink": "#B31AD6",
        "dull-pink": "#8E4497",
        blurple: "#9F9DFF",
        background: "#01061B",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        rugen: "Rugen",
        jost: "Jost",
        nunito: ["Nunito Sans", "sans-serif"],
        "source-serif": ['"Source Serif 4"', "serif"],
        "pt-sans": ["PT Sans", "sans-serif"],
        neuton: ["Neuton", "serif"],
      },
      borderRadius: {
        xl: "20px",
      },
      fontSize: {
        "6xl": "1.563rem",
        "41xl": "3.75rem",
        inherit: "inherit",
      },
    },
    plugins: [],
    corePlugins: {
      preflight: false,
    },
  },
};
