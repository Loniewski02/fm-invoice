"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Moon from "@/public/assets/icon-moon.svg";
import Sun from "@/public/assets/icon-sun.svg";

const ThemeSwitchBtn = ({ className }: { className?: string }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    document.documentElement.classList.remove("hidden");

    if (resolvedTheme === "dark") {
      setIsDark(true);
      return;
    }
    setIsDark(false);
  }, []);

  return (
    <button
      onClick={() => {
        if (resolvedTheme === "dark") {
          setTheme("light");
          setIsDark(false);
        }
        if (resolvedTheme === "light") {
          setTheme("dark");
          setIsDark(true);
        }
      }}
      aria-label="theme change btn"
      className={`${className && className} text-GraylishBlue06 transition active:scale-95`}
    >
      {isDark && <Sun />}
      {!isDark && <Moon />}
    </button>
  );
};

export default ThemeSwitchBtn;
