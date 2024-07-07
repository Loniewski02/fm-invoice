import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import User from "@/models/User";
import connectDB from "@/config/database";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
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
          console.log("Error: ", e);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session?.address) {
        token.address = session.address;
      }
      //pass in user id to token
      if (user) {
        return {
          ...token,
          address: user.address,
          id: user.id,
          role: user.role,
        };
      }

      //update the user in DB

      await User.findByIdAndUpdate(
        { _id: token.id },
        { address: token.address },
      );

      return token;
    },
    async session({ session, token }) {
      //pass in user id to session
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          role: token.role as string,
          address: token.address,
        },
      };
    },
  },
});

export { handler as GET, handler as POST };
