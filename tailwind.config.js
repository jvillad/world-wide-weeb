/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',

      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         fontFamily: {
            ubuntu: ['var(--font-ubuntu)'],
            roboto: ['var(--font-roboto)'],
            firaSans: ['var(--font-firaSans)'],
         },
         gridTemplateColumns: {
            fluid: 'repeat(auto-fit,minmax(15rem,1fr))',
         },
      },
   },
   plugins: [],
};
