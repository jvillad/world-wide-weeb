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
      screens: {
         xs: '320px',
         // => @media (min-width: 320px) { ... }
         sm: '645px',
         // => @media (min-width: 640px) { ... }
         md: '768px',
         // => @media (min-width: 768px) { ... }
         lg: '1024px',
         // => @media (min-width: 1024px) { ... }
         xl: '1280px',
         // => @media (min-width: 1280px) { ... }
         '2xl': '1536px',
         // => @media (min-width: 1536px) { ... }
      },
   },
   plugins: [],
};
