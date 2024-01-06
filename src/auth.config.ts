import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { User } from '@/types/user.type';
import { verifyPassword } from '@/lib/authUtils';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        // const user: User = getUser({ username: credentials.username as string });

        // if (!user) {
        //   return null;
        // }

        // const isValid = await verifyPassword(
        //   credentials.password as string,
        //   user.password as string
        // );

        // if (!isValid) {
        //   return null;
        // }

        // return { username: user.username } as any;

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
