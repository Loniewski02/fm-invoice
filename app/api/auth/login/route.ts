import { NextResponse } from "next/server";

import { emailReg } from "@/utils/constant";

import User from "@/models/User";
import connectDB from "@/config/database";

export async function POST(req: any) {
  try {
    const data = await req.formData();

    const email = data.get("email");
    const password = data.get("password");

    if (email === "" || password === "") {
      return NextResponse.json({
        message: "Inputs can't be empty",
        status: 500,
      });
    } else if (!emailReg.test(email)) {
      return NextResponse.json({
        message: "Inavlid email address",
        status: 500,
      });
    } else if (password.trim().length <= 8) {
      return NextResponse.json({
        message: "Password is too short",
        status: 500,
      });
    } else {
      await connectDB();

      const userExist = await User.findOne({ email }).select("email");

      if (!userExist) {
        return NextResponse.json({
          message: "No user found. Please check credentials",
          status: 500,
        });
      }

      return NextResponse.json({
        message: "Logged In",
        status: 200,
      });
    }
  } catch (e) {
    return NextResponse.json({
      message: `An error occured: ${e}`,
      status: 500,
    });
  }
}
