import { NextRequest } from "next/server";

import Invoice from "@/models/Invoice";
import connectDB from "@/config/database";

export const GET = async (req: Request | NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const uid = searchParams.get("uid");

    await connectDB();
    const invoices = await Invoice.findById(uid);

    return new Response(JSON.stringify(invoices.invoices), { status: 200 });
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};
