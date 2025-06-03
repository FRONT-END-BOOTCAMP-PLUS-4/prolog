import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import prisma from '@/shared/lib/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,

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
      if (!account) return false;

      if (user.email && user.name) {
        
        //기존사용자들 불러옴
        const existingUser = await prisma.user.findMany({
          where: { email: user.email },
        });


        // 기존사용자들 탐색
        const userCount = existingUser.length;
        const userProvider = existingUser.filter( user => user.provider === account.provider);
        
        // 새로운 사용자일 경우
          if(!userProvider.length) {
            const userTags = user.email.split("@")[0];
            await prisma.user.create({
            data: {
              id: user.id,
              email: user.email,
              name: userTags + `-${userCount + 1}`,
              profileImg: user.image,
              provider: account.provider,
              },
            })
            user.name = userTags + `-${userCount + 1}`;
          }
        
        const nowUser = existingUser.filter( prevUser => prevUser.provider === account.provider)[0];
        user.id = nowUser.id;
        user.name = nowUser.name;
      }

      return true;
    },

    async jwt({ token, account, user }) {

      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.userId = user.id;
        token.userName = user.name;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.name = token.name;
      session.user.provider = token.provider;
      session.user.id = token.userId as string;
      return session;
    },
  },
});
