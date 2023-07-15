/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prim': '#F1F7ED',
        'sec': '#243E36',
        'thr': '#7CA982'
      },
      cursor: {
        'fancy': 'url("/cpblog/assets/circle-regular.svg") 32 32, pointer',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
