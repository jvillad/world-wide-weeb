import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
   adapter: PrismaAdapter(prisma),
   providers: [
      CredentialsProvider({
         name: 'credentials',
         credentials: {
            email: { label: 'Email', type: 'email' },
            password: { label: 'Password', type: 'password' },
         },
         async authorize(credentials) {
            if (!credentials.email || !credentials.password) {
               return null;
            }

            const user = await prisma.user.findUnique({
               where: {
                  email: credentials.email,
               },
            });

            if (!user) {
               return null;
            }

            const match = await bcrypt.compare(
               credentials.password,
               user.password
            );

            if (!match) {
               console.log(match);
               return null;
            }

            return user;
         },
      }),
   ],
   session: {
      strategy: 'jwt',
   },
   secret: process.env.NEXTAUTH_SECRET,
   debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };