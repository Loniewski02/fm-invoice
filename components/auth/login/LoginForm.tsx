"use client";
import Link from "next/link";
import Submit from "../Submit";
import DemoButton from "../DemoButton";
import { FormLoginAction } from "@/utils/auth";
import { useFormState } from "react-dom";
import FormBox from "../FormBox";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { MessagesContext } from "@/app/_providers/MessagesContext";
import { LOGIN_INPUTS } from "@/utils/constant";

const initialState = {
  message: null,
  status: null,
  data: { id: "", email: "", password: "" },
};

const LoginForm = () => {
  const { setInitial, setIsShown, setStatus, setMessage } =
    useContext(MessagesContext);
  const { replace, refresh } = useRouter();
  const [state, action] = useFormState<LoginData, FormData>(
    FormLoginAction,
    initialState,
  );

  useEffect(() => {
    if (state.status && state.message) {
      setMessage(state.message);
      setStatus(state.status);
    }
  }, [state]);

  useEffect(() => {
    if (state.status === 200) {
      replace("/invoices");
      refresh();
    }
  }, [state.status]);

  return (
    <form
      action={(formData) => {
        action(formData);
        setInitial(false);
        setIsShown(true);
      }}
      className="flex flex-col gap-6"
    >
      {LOGIN_INPUTS.map((input) => (
        <FormBox key={input.id} input={input} />
      ))}
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
