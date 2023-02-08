import Nav from '@/components/Nav';

import { roboto } from '@/lib/fonts.js';

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head />
         <body className={`${roboto.className}`}>
            <>
               <Nav />
            </>
            <div>{children}</div>
            <div className="text-xs text-center my-10 mx-10 text-gray-600">
               AnimeDB - 🫥{' '}
            </div>
            ;
         </body>
      </html>
   );
}
