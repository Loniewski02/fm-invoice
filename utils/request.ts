const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function fetchInvoices(uid: string) {
  try {
    const res = await fetch(`${apiDomain}/invoices?uid=${uid}`);

    if (!res.ok) {
      console.log(res);
      throw new Error("Failed to fetch");
    }

    return await res.json();
  } catch (error) {
    console.error("An error occured:", { error });
    return [];
  }
}

export async function fetchInvoice(uid: string, id: string) {
  try {
    const res = await fetch(`${apiDomain}/invoices/${id}?uid=${uid}`);

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return await res.json();
  } catch (error) {
    console.error("An error occured:", { error });
    return null;
  }
}

export async function gettinStartedAction(prevState: any, formData: any) {
  try {
    const res = await fetch(`${apiDomain}/invoices/gettin-started`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return await res.json();
  } catch (error) {
    console.error("An error occured:", { error });
    return null;
  }
}
