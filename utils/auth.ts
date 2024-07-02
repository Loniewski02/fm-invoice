import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function FormRegister(prevState: any, formData: any) {
  const res = await fetch(`${apiDomain}/auth/register`, {
    method: "POST",
    body: formData,
  });

  const data = await res;
  if (!data) return prevState;

  return data;
}

export async function FormLoginAction(prevState: any, formData: any) {
  const email = formData.get("email");
  const pass = formData.get("password");

  const response = await signIn("credentials", {
    email: email,
    password: pass,
    redirect: false,
  });

  if (!response?.error) {
    redirect("/invoices");
  }

  return response;
}