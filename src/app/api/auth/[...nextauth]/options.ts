import type { NextAuthOptions, RequestInternal } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    process.env.VERCEL_ENV === 'preview'
      ? CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: {
              label: 'Username',
              type: 'text',
              placeholder: 'jsmith',
            },
            password: { label: 'Password', type: 'password' },
          },
          async authorize(
            credentials: Record<'username' | 'password', string> | undefined,
            req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>
          ) {
            return {
              id: '1',
              name: 'J Smith',
              email: 'jsmith@example.com',
              image: 'https://i.pravatar.cc/150?u=jsmith@example.com',
            };
          },
        })
      : GithubProvider({
          clientId: process.env.GITHUB_ID!,
          clientSecret: process.env.GITHUB_SECRET!,
        }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn({ user, account }) {
      console.log(account);
      if (
        process.env.VERCEL_ENV !== 'preview' &&
        user.name !== process.env.USER_NAME
      ) {
        return Promise.resolve(false);
      }
      return Promise.resolve(true);
    },
  },
  theme: {
    logo: '/favicon.ico',
  },
};
