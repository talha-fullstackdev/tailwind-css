/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            screens: {
        '2xl-custom': '2100px', // custom breakpoint for min-width 2100px
      },
    },
  },
  plugins: [],
}

