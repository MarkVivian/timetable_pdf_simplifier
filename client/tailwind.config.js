/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/**/*"
  ],
  theme: {   
    extend: {
      colors : {
        navbar : {
           borderLight : "#F3EFEF"
        }
      }
      }
  },
  plugins: [],
}

