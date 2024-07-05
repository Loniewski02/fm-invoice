import connectDB from "@/config/database";
import User from "@/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      image?: string;
      name?: string;
    };
  }

  interface User {
    id: string;
  }
}
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          await connectDB();

          const user = await User.findOne({
            email: credentials!.email,
          });

          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(
            credentials!.password,
            user.password,
          );

          if (!passwordsMatch) return null;

          return user;
        } catch (e) {
          console.log("Error: " + e);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        return session;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
