import connectDB from "@/config/database";
import Invoice from "@/models/Invoice";
import { NextRequest } from "next/server";

export const GET = async (
  req: Request | NextRequest,
  { params }: { params: { uid: string } },
) => {
  try {
    const uid = params.uid;

    await connectDB();
    const invoices = await Invoice.findById(uid);

    return new Response(JSON.stringify(invoices.invoices), { status: 200 });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};
