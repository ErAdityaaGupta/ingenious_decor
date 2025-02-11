// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // This includes all your component files
//   ],
//   theme: {
//     extend: {
//       colors: {
//         lightcream: "#F5F3E7",
//       },

//       width: {
//         "custom-logo": "300px",
//         "custom-logo2": "550px"
//       },

//       height: {
//         background: "800px",
//         images: "400px",
//         portfolio: "600px",
//       },
//       fontFamily: {
//         montserrat: ["Montserrat", "sans-serif"],
//         poppins: ["Poppins", "sans-serif"],
//         playfair: ["Playfair Display", "serif"],
//       },
//     },
//   },
//   plugins: [],
// };


export default {
  theme: {
    extend: {
      screens: {
        xs: '375px', // Small mobile screens
        sm: '640px', // Default small screen
        md: '768px', // Tablets
        lg: '1024px', // Laptops
        xl: '1280px', // Desktops
      },
    },
  },
  plugins: [],
};
