import connectDB from "@/config/database";
import User from "@/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

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
        token.picture = user.picture;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          id: token.id as string,
          picture: token.picture as string,
          email: token.email as string,
        },
        error: token.error,
      };
    },
  },
});

export { handler as GET, handler as POST };
