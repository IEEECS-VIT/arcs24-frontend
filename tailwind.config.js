/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        "source-serif": ['"Source Serif 4"', "serif"],
        "pt-sans": ["PT Sans", "sans-serif"],
        neuton: ["Neuton", "serif"],
        rugen: ["Rugen", "sans-serif"],
      },
      colors: {
        "bright-pink": "#B31AD6",
        "dull-pink": "#8E4497",
        "blurple": "#9F9DFF",
        "dark-purple":"#01061B"
      },
    },
    plugins: [],
  },
};
