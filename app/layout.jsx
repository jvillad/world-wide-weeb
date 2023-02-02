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
         </body>
      </html>
   );
}
