/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        black: '#000000',
      }
    },
  },
  plugins: [flowbitePlugin,'tailwind-scrollbar']
};