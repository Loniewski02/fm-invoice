import { DefaultSession } from "next-auth";
declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    picture: string;
  }

  interface Session {
    user: User & DefaultSession["user"];
    expires: string;
    error: string;
  }
}
