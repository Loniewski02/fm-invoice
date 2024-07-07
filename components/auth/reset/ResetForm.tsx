import Link from "next/link";

import DemoButton from "../DemoButton";
import Submit from "@/components/ui/Submit";

const ResetForm = () => {
  return (
    <form action="" className="flex flex-col gap-6">
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
      <div className="grid grid-cols-3 gap-x-4">
        <DemoButton />
        <Submit>Reset</Submit>
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

export default ResetForm;
