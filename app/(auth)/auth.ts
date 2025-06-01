import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import prisma from '@/shared/lib/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Oauth에서 제공자가 없다면 로그인 불가
      if (!account) return false;

      // 새로운 사용자일경우 db에 값저장
      if (user.email && user.name) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email, provider: account.provider },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              id: user.id,
              email: user.email,
              name: user.name,
              profileImg: user.image,
              provider: account.provider,
            },
          });
        }
        user.id = existingUser ? existingUser.id : user.id;
      }

      return true;
    },

    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.provider = account.provider;
        token.userId = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.provider = token.provider;
      session.user.id = token.userId as string;
      return session;
    },
  },
});
