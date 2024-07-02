import { NextRequest } from "next/server";
import DEMO from "@/public/data.json";

// GET /api/invoices/demo
export const GET = async (req: Request | NextRequest) => {
  try {
    console.log(DEMO.find((item) => item.id === "RT3080"));
    return new Response(JSON.stringify(DEMO), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
