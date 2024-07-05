const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function fetchInvoices(uid: string) {
  try {
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/invoices/${uid}`);

    if (!res.ok) {
      throw new Error("Failed to fetch ");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
