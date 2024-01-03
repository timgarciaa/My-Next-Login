import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "@/lib/dbUtils";
import { verifyPassword } from "@/lib/authUtils";
import { User } from "@/types/user.type";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req): Promise<any> {
        const user: User = getUser({ username: credentials.username });

        if (!user) {
          return null;
        }

        const isValid = await verifyPassword(
          credentials.password as string,
          user.password as string
        );

        if (!isValid) {
          return null;
        }

        return { username: user.username } as any;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
