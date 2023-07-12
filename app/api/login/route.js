import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
   try {
      const { email, password } = await request.json();
      const existingUser = await prisma.user.findUnique({
         where: {
            email: email,
         },
      });

      if (!existingUser) {
         return NextResponse.json(
            { error: `User does not exist` },
            { status: 404 }
         );
      }

      // hash password
      const validPassword = await bcrypt.compare(
         password,
         existingUser.password
      );

      if (!validPassword) {
         return NextResponse.json(
            { error: `Invalid email or password` },
            { status: 400 }
         );
      }

      //  if valid create token
      const tokenData = {
         name: existingUser.name,
         email: existingUser.email,
      };

      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
         expiresIn: '1h',
      });

      const response = NextResponse.json({
         message: 'Login successful',
         success: true,
      });

      response.cookies.set('token', token, { httpOnly: true, path: '/' });

      return response;
   } catch (error) {
      console.error(error);
      return NextResponse.error('Internal Server Error', 500);
   } finally {
      await prisma.$disconnect();
   }
}
