import { NextResponse, NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';
// import { auth } from '@/app/(auth)/auth';

export async function middleware(request: NextRequest) {
  //   const token = await getToken({
  //     req: request,
  //     secret: process.env.AUTH_SECRET,
  //   });
  //   const session = await auth();
  //   const pathname = request.nextUrl.pathname;
  //   if(pathname.startsWith('/api/member')){
  //     if(!token){
  //       return NextResponse.json({status:401, message:'Unauthorized'})
  //     }
  //     return NextResponse.next();
  //   }
  //   if (!session) {
  //     const url = new URL('/', request.url);
  //     return NextResponse.redirect(url);
  //   }
  //   return NextResponse.next();
}

// export const config = { matcher: ['/member(.*)','/api/member(.*)'] };
