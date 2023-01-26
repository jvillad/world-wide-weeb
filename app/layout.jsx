import './globals.css';
import { Ubuntu, Roboto, Fira_Sans } from '@next/font/google';

const ubuntu = Ubuntu({
   subsets: ['latin'],
   weight: ['400', '700'],
   variable: '--font-ubuntu',
});

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['400', '700'],
   variable: '--font-roboto',
});

const firaSans = Fira_Sans({
   subsets: ['latin'],
   weight: ['400', '700'],
   variable: '--font-firaSans',
});

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head />
         <body className={`${firaSans.className} mx-24 py-14`}>{children}</body>
      </html>
   );
}
