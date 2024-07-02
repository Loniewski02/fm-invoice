"use client";
import Link from "next/link";
import Submit from "../Submit";
import DemoButton from "../DemoButton";
import { FormLoginAction } from "@/utils/auth";
import { useFormState } from "react-dom";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [state, action] = useFormState<any, FormData>(
    FormLoginAction,
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
      <p className="text-15 text-GraylishBlue06 dark:text-VeryLightBlue05">
        Forget password?{" "}
        <Link
          href={"/auth?mode=reset"}
          className="text-Violet01 underline dark:text-LightViolet02"
        >
          Reset Here.
        </Link>
      </p>
      <div className="grid grid-cols-3 gap-x-4">
        <DemoButton />
        <Submit>Login</Submit>
      </div>
      <p className="text-15 text-GraylishBlue06 dark:text-VeryLightBlue05">
        Don't have an account?{" "}
        <Link
          href={"/auth?mode=register"}
          className="text-Violet01 underline dark:text-LightViolet02"
        >
          Create account.
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
