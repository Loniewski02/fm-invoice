import { signIn } from "next-auth/react";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function FormRegisterAction(prevState: any, formData: any) {
  const res = await fetch(`${apiDomain}/auth/register`, {
    method: "POST",
    body: formData,
  });
  return await res.json();
}

export async function FormLoginAction(prevState: any, formData: any) {
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await fetch(`${apiDomain}/auth/login`, {
    method: "POST",
    body: formData,
  });

  const response = await res.json();

  if (response.status === 200) {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  }

  return response;
}
