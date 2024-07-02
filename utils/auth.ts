const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function FormRegister(prevState: any, formData: any) {
  const res = await fetch(`${apiDomain}/auth/register`, {
    method: "POST",
    body: formData,
  });

  const data = await res;
  if (!data) return prevState;

  if (!process.env.EMAIL || !process.env.PASS) return prevState;

  return data;
}
