/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "#f0f0f0",
        "dark": "#303030",
        "sh-light": "#ff000030",
        "sh-dark": "#00000030",
      },
    },
  },
  plugins: [],
};
