import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: {
  //   ...PrismaAdapter(prisma),
  //   createUser: async (data) => {
  //     return await prisma.user.create({
  //       data: {
  //         nickname: data.name,
  //         email: data.email,
  //         profileImg: data.image
  //       }
  //     })
  //   }
  // },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },
  cookies: {},
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
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.provider = token.provider as string;
      return session;
    },
  },
});
