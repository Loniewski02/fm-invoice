"use client";
import Login from "@/components/auth/Login";
import { useSearchParams } from "next/navigation";

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
      {isRegister && <Login />}
      {isReset && <Login />}
    </main>
  );
};

export default AuthPage;
