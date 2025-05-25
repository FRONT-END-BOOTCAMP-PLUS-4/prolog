import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// import { prisma } from './prisma';

/*
  1. Google로그인 버튼을 클릭시, Google form으로 리다이렉트
  2. 사용자정보를 확인한후에는 JWT token을 생성한다
  3. JWT가 생성됨가 동시에 prisma에 사용자 데이터를 저장한다

  처리해야할것은
  - 리프레쉬토큰 로테이션
  - 리프레쉬토큰 세션종료 체크
  - 로그인 성공시 DB에 데이터저장
  - 페이지 접근제한
  - 페이지 이동시 호출될 반환값?
  - pages 설정이 필요한가?
  - 서버세션접근, 클라이언트세션 접근확인 필요
*/

export const { handlers, signIn, signOut, auth } = NextAuth({
  // 세션 관리 방식을 지정
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },
  cookies: {},
  // adapter: PrismaAdapter(prisma),
  // 인증 공급자 설정
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          // prompt: "none"     // 동의 화면 없이 자동 로그인 (이미 승인된 경우)
          // prompt: "consent"  // 항상 동의 화면 표시
          // prompt: "login"    // 항상 로그인 화면 표시
          access_type: 'offline',
          // offline: 사용자가 오프라인일 때도 앱이 API에 접근할 수 있도록 refresh token 제공
          // online (기본값): Access token만 제공, refresh token 없음
          response_type: 'code',
          // code: 보안이 강화된 Authorization Code Flow 사용
          // token: 덜 안전한 Implicit Flow (SPA에서 주로 사용)
        },
      },
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  // pages: {
  //   signIn: 'member/setting'
  // },

  // 인증 및 세션 관리중 호출되는 각 핸들러
  callbacks: {
    // JWT가 생성되거나 업데이트될 때 호출됨
    async jwt({ token, user, account, profile, trigger, session }) {
      if (account) {
        token.refreshTokne = account.refresh_token;
        token.provider = account.provider;
      }
      return token;
      // name, eamil, picture
      // sub: 사용자의 고유 id
      // lat: 토큰이 발급된 시간 UNIX 타임스탬프 형식
      // exp: 토큰이 만료되는 시간
      // jti: JWT의 고유 식별자
    },

    //  JWT콜백이 반환하는 token을 받아, 세션이 확인될때마다 호출됨 반환값을 클라이언트에서
    async session({ session, token }) {
      session.user.provider = token.provider as string;
      return session;
    },

    // 페이지 이동시 호출되며 반환값은 리다이렉션될 url
    //  async redirect({url, baseUrl}){
    //   return baseUrl;
    //  }
  },
  // debug: true,
});
