"use client";
import { useSearchParams } from "next/navigation";

import Register from "@/components/auth/register/Register";
import Login from "@/components/auth/login/Login";
import Reset from "@/components/auth/reset/Reset";

const AuthPage = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const defaultMode = !mode || mode === "" ? "login" : mode;
  const isLogin = defaultMode === "login";
  const isRegister = defaultMode === "register";
  const isReset = defaultMode === "reset";

  return (
    <main>
      {isLogin && <Login />}
      {isRegister && <Register />}
      {isReset && <Reset />}
    </main>
  );
};

export default AuthPage;
