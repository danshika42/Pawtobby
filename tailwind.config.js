/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('/src/images/Group 41 (1).svg')",
        'mobile-banner-bg': "url('/src/images/mobilebanner.svg')",
      },
      colors: {
        'blue-light': '#C6EAFF',
        'orange-dark':'#FEAD54',
        'blue-dark':'#6BA4F3',
        'orange-light':'#FFBD78'
      },
    },
  },
  plugins: [],
}

