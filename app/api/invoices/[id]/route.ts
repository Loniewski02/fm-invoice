import { NextRequest } from "next/server";

import Invoice from "@/models/Invoice";
import connectDB from "@/config/database";

export const GET = async (
  req: Request | NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const id = params.id;
    const { searchParams } = new URL(req.url);
    const uid = searchParams.get("uid");
    await connectDB();
    const invoice = await Invoice.findOne({
      uid: uid,
      "invoices.id": id,
    }).select("invoices.$");

    return new Response(JSON.stringify(invoice.invoices[0]), { status: 200 });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};
