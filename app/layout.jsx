import Nav from '@/components/Nav';
import Head from './head';
import { roboto } from '@/lib/fonts.js';

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <Head />

         <body className={`${roboto.className}`}>
            <>
               <Nav />
            </>
            <div>{children}</div>
            <div className="text-xs text-center my-10 mx-10 text-gray-600">
               World Wide Weeb
            </div>
         </body>
      </html>
   );
}
