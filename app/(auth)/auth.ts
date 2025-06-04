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
      if (!user?.email || !account?.provider) return false;

      if (user.email && user.name) {
        const existingUser = await prisma.user.findMany({
          where: { email: user.email },
        });

        const userCount = existingUser.length;
        const userProvider = existingUser.filter(
          (user) => user.provider === account.provider,
        );

        if (!userProvider.length) {
          const userTags = user.email.split('@')[0];
          await prisma.user.create({
            data: {
              email: user.email,
              name: userTags + `-${userCount + 1}`,
              profileImg: user.image,
              provider: account.provider,
            },
          });
        }

        const nowUser = await prisma.user.findFirst({
          where: {
            email: user.email,
            provider: account.provider,
          },
        });

        if (nowUser) {
          user.id = nowUser.id;
          user.name = nowUser.name;
        }
      }

      return true;
    },

    async jwt({ token, account, user, trigger, session }) {
      if (trigger === 'update') {
        if (session?.name) token.name = session.name;
        if (session?.image) token.image = session.image;
      }

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
      session.user.image = token.image as string;
      return session;
    },
  },
});
