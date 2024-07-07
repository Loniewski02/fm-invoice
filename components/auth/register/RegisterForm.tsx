"use client";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import Link from "next/link";

import { FormRegisterAction } from "@/utils/auth";
import { MessagesContext } from "@/app/_providers/MessagesContext";
import { REGISTER_INPUTS } from "@/utils/constant";

import DemoButton from "../DemoButton";
import FormBox from "@/components/ui/FormBox";
import Submit from "@/components/ui/Submit";

const initialState = {
  message: null,
  status: null,
  data: { id: "", email: "", password: "", password2: "" },
};

const RegisterForm = () => {
  const { setIsShown, setInitial, setMessage, setStatus } =
    useContext(MessagesContext);

  const { replace, refresh } = useRouter();
  const [state, action] = useFormState<RegisterData, FormData>(
    FormRegisterAction,
    initialState,
  );

  useEffect(() => {
    if (state.status && state.message) {
      setMessage(state.message);
      setStatus(state.status);
    }
  }, [state]);

  useEffect(() => {
    if (state.status == 200) {
      replace("/auth");
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
      {REGISTER_INPUTS.map((input) => (
        <FormBox key={input.id} input={input} />
      ))}
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
