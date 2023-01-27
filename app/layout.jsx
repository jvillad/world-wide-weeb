import Nav from '@/components/Nav';

import { firaSans } from '@/lib/fonts.js';

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head />
         <body className={`${firaSans.className}`}>
            <>
               <Nav />
            </>
            <div className="mx-24 py-14">{children}</div>
         </body>
      </html>
   );
}
