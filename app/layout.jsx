import Nav from '@/components/Nav';

import { ubuntu } from '@/lib/fonts.js';

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head />
         <body className={`${ubuntu.className}`}>
            <>
               <Nav />
            </>
            <div className="mx-20 py-14">{children}</div>
         </body>
      </html>
   );
}
