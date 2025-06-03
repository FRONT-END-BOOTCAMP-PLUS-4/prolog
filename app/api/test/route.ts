import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { auth } from '@/app/(auth)/auth';

export async function GET(request: NextRequest) {

    const token = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET,
    });

    const session = await auth();
    console.log(session);
    return NextResponse.json('test')
}