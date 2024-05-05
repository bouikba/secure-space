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
        "light": "#f5f5f5",
        "dark": "#000000",
        "sh-light": "#00ffff30",
        "sh-dark": "#00000030",
      },
    },
  },
  plugins: [],
};
