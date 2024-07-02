"use client";
import { signOut } from "next-auth/react";

const Logout = () => {
  return <button onClick={() => signOut()}>logout</button>;
};

export default Logout;
