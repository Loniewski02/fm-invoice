import connectDB from "@/config/database";
import User from "@/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        await connectDB();
        const user = await User.findOne({
          email: credentials?.email,
        });

        if (user) {
          if (user.password === credentials?.password) {
            console.log("logged in");
            return { id: user._id, email: user.email };
          } else {
            console.log("invalid password");
          }
        } else {
          console.log("find no user");
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
