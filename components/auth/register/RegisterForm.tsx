"use client";
import connectDB from "@/config/database";
import User from "@/models/User";
import { FormRegister } from "@/utils/auth";
import Link from "next/link";
import { useFormState } from "react-dom";
import Submit from "../Submit";
import DemoButton from "../DemoButton";

const initialState = {
  email: "",
  password: "",
  password2: "",
};

const RegisterForm = () => {
  const [state, action] = useFormState<RegisterData, FormData>(
    FormRegister,
    initialState,
  );

  return (
    <form action={action} className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-[12px] font-light tracking-wide text-Black08 dark:text-PureWhite"
        >
          Email Address
        </label>
        <input
          id="email"
          type="text"
          name="email"
          className="rounded-md border border-GraylishBlue06 bg-PureWhite p-11 py-3 text-15 dark:border-Blue07 dark:bg-LightBlack12"
          placeholder="e.g. alex@email.com"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="pass"
          className="text-[12px] font-light tracking-wide text-Black08 dark:text-PureWhite"
        >
          Password
        </label>
        <input
          id="pass"
          type="password"
          name="password"
          className="rounded-md border border-GraylishBlue06 bg-PureWhite p-11 py-3 text-15 dark:border-Blue07 dark:bg-LightBlack12"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="pass2"
          className="text-[12px] font-light tracking-wide text-Black08 dark:text-PureWhite"
        >
          Password
        </label>
        <input
          id="pass2"
          type="password"
          name="password2"
          className="rounded-md border border-GraylishBlue06 bg-PureWhite p-11 py-3 text-15 dark:border-Blue07 dark:bg-LightBlack12"
          placeholder="Enter your password"
        />
      </div>
      <p className="text-15 text-GraylishBlue06 dark:text-VeryLightBlue05">
        Password must contain at least 8 characters
      </p>
      <div className="grid grid-cols-3 gap-x-4">
        <DemoButton />
        <Submit>Create account</Submit>
      </div>
      <p className="text-15 text-GraylishBlue06 dark:text-VeryLightBlue05">
        Already have an account?{" "}
        <Link
          href={"/auth?mode=login"}
          className="text-Violet01 underline dark:text-LightViolet02"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
