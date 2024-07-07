import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { emailReg } from "@/utils/constant";

import User from "@/models/User";
import Invoice from "@/models/Invoice";
import connectDB from "@/config/database";

export async function POST(req: any) {
  try {
    const data = await req.formData();

    const email = data.get("email");
    const password = data.get("password");
    const password2 = data.get("password2");

    const hashPassword = await bcrypt.hash(password, 10);
    if (email === "" || password === "" || password2 === "") {
      return NextResponse.json({
        message: "Inputs can't be empty",
        status: 500,
      });
    } else if (!emailReg.test(email)) {
      return NextResponse.json({
        message: "Inavlid email address",
        status: 500,
      });
    } else if (password.trim().length <= 8 || password2.trim().length <= 8) {
      return NextResponse.json({
        message: "Password is too short",
        status: 500,
      });
    } else if (password !== password2) {
      return NextResponse.json({
        message: "Passwords doesn't match",
        status: 500,
      });
    } else {
      await connectDB();

      const userExist = await User.findOne({ email }).select("_id");

      if (userExist) {
        return NextResponse.json({
          message: "User already exist",
          status: 500,
        });
      }

      const newUser = await User.create({
        email,
        name: email.split("@")[0],
        password: hashPassword,
      });

      const initialInvoices = {
        _id: newUser._id,
        invoices: [],
        address: null,
      };

      await Invoice.create(initialInvoices);

      return NextResponse.json({
        message: "User registered",
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
