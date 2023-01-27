import { Ubuntu, Roboto, Fira_Sans } from '@next/font/google';

export const ubuntu = Ubuntu({
   subsets: ['latin'],
   weight: ['400', '700'],
   variable: '--font-ubuntu',
});

export const roboto = Roboto({
   subsets: ['latin'],
   weight: ['400', '700'],
   variable: '--font-roboto',
});

export const firaSans = Fira_Sans({
   subsets: ['latin'],
   weight: ['400', '700'],
   variable: '--font-firaSans',
});
