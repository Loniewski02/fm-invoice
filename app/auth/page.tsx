import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Register from "@/components/auth/register/Register";
import Login from "@/components/auth/login/Login";
import Reset from "@/components/auth/reset/Reset";

const AuthPage = async ({
  searchParams,
}: {
  searchParams: { mode: string };
}) => {
  const session = await getServerSession();
  const mode = searchParams.mode;
  const defaultMode = !mode || mode === "" ? "login" : mode;
  const isLogin = defaultMode === "login";
  const isRegister = defaultMode === "register";
  const isReset = defaultMode === "reset";

  if (session) {
    redirect("/");
  }

  return (
    <main className="grid min-h-[100dvh] w-full justify-center md:place-content-center">
      {isLogin && <Login />}
      {isRegister && <Register />}
      {isReset && <Reset />}
    </main>
  );
};

export default AuthPage;
