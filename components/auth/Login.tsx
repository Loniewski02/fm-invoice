import Logo from "@/public/assets/logo.svg";
import Link from "next/link";
import AuthSection from "./AuthSection";

const Login = () => {
  return (
    <AuthSection>
      <div className="mb-16 flex items-start gap-2 md:mx-auto md:mb-12 md:w-max">
        <div className="relative grid h-8 w-8 place-content-center overflow-hidden rounded-md bg-Violet01">
          <Logo width={20} height={20} className="z-10" />
          <span className="absolute bottom-0 left-0 right-0 h-5 rounded-tl-xl bg-LightViolet02" />
        </div>
        <h1 className="text-3xl font-bold text-Black08 first-letter:uppercase dark:text-PureWhite">
          invoices
        </h1>
      </div>
      <div className="mb-10 flex flex-col gap-2">
        <p className="text-2xl font-bold text-Black08 dark:text-PureWhite">
          Login
        </p>
        <p className="text-15 text-GraylishBlue06 dark:text-VeryLightBlue05">
          Add your details below to get back into the app
        </p>
      </div>
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
            className="rounded-md border border-GraylishBlue06 bg-PureWhite py-3 pl-11 text-15 dark:border-Blue07 dark:bg-LightBlack12"
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
            className="rounded-md border border-GraylishBlue06 bg-PureWhite py-3 pl-11 text-15 dark:border-Blue07 dark:bg-LightBlack12"
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
          <button className="rounded-md bg-Violet01 px-6 py-3 text-15 font-bold text-PureWhite transition hover:bg-LightViolet02 active:scale-95 ">
            Demo
          </button>
          <button className="col-span-2 rounded-md bg-Violet01 px-6 py-3 text-15 font-bold text-PureWhite transition hover:bg-LightViolet02 active:scale-95 ">
            Login
          </button>
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
    </AuthSection>
  );
};

export default Login;
