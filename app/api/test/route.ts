import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(request: NextRequest) {
    const token = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET,
    });
    console.log("token:",token);
    return NextResponse.json('test')
}