"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const DemoButton = () => {
  const router = useRouter();

  async function demoHandler() {
    const response = await signIn("credentials", {
      email: process.env.NEXT_PUBLIC_DEMO_EMAIL,
      password: process.env.NEXT_PUBLIC_DEMO_PASSWORD,
      redirect: false,
    });

    if (!response?.error) {
      router.push("/");
    }
  }

  return (
    <button
      type="button"
      onClick={demoHandler}
      className="rounded-md bg-Violet01 px-6 py-3 text-15 font-bold text-PureWhite transition hover:bg-LightViolet02 active:scale-95 "
    >
      Try Now
    </button>
  );
};

export default DemoButton;
