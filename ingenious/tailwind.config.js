/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This includes all your component files
  ],
  theme: {
    extend: {
      colors: {
        lightcream: "#F5F3E7", 
      },

      width: {
        "custom-logo": "650px", 
      },
    },
  },
  plugins: [],
};
