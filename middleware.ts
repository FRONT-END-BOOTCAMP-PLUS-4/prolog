// import { auth } from '@/app/auth';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// const protecteRoutes = ["/member"]

// export default async function middleware(request: NextRequest) {
//     const session = await auth();
    
//     const { pathname } = request.nextUrl
//     const isProtected = protecteRoutes.some( route => pathname.startsWith(route));

//     if(isProtected && !session ){
//         return NextResponse.redirect(new URL('/', request.url))
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/member/:path*'],
//   };