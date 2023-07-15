import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
   try {
      const userInfo = await request.json();
      const { name, email, password } = userInfo;
      console.log(name, email, password);
      const existingUser = await prisma.user.findUnique({
         where: {
            email: email,
         },
      });

      if (existingUser) {
         return NextResponse.json(
            { error: `User already exist` },
            { status: 409 }
         );
      }

      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
         data: {
            name,
            email,
            password: hashedPassword,
         },
      });

      return NextResponse.json(
         { message: `${user.name} created successfully` },
         { status: 201 }
      );
   } catch (error) {
      console.error(error);
      return NextResponse.error('Internal Server Error', 500);
   } finally {
      await prisma.$disconnect();
   }
}
