/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      theme: "#0000FF",
      white: "#FFFFFF",
      secondary: "#C2C2C2",
    },
  },
  plugins: [],
};
