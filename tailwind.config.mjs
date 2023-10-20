/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F0F5FF",
          100: "#E5F1FF",
          200: "#CCE4FF",
          300: "#B2D6FF",
          400: "#80BAFF",
          500: "#417AFF",
          600: "#2F55CC",
          700: "#244AA8",
          800: "#1A3480",
          900: "#0F2355"
        },
        brandRed: {
          500: "#00b23b",
          600: "#00a338",
          700: "#009235",
          800: "#008232",
          900: "#007230",
          400: "#00c23b"
        }
      },
      fontFamily: {
        sans: ["Abhaya Libre", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
