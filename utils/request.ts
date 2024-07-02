"use server";
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function fetchDemoInvoices() {
  try {
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/invoices/demo`);

    if (!res.ok) {
      throw new Error("Failed to fetch ");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}