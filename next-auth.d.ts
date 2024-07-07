import { DefaultSession } from "next-auth";
declare module "next-auth" {
  interface User {
    name: string;
    email: string;
    id: string;
    image: string;
    role: string;
    address: {
      street: string;
      city: string;
      postCode: string;
      country: string;
    };
  }

  interface Session {
    user: User & DefaultSession["user"];
    expires: string;
  }
}
