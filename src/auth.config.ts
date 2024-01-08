import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { User } from '@/types/user.type';
import { verifyPassword } from '@/lib/authUtils';
import { getUser } from '@/lib/apiCalls';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const user: User = await getUser(credentials.username as string) as User;

        console.log('user.password: ', user.password);
        console.log('credentials.password: ', credentials.password);
        if (!user) {
          return null;
        }

        const isValid = await verifyPassword(
          credentials.password as string,
          user.password as string,
        );

        if (!isValid) {
          return null;
        }

        console.log('user: ', user);
        return { username: user.username } as any;
      },
    }),
  ],
} satisfies NextAuthConfig;
