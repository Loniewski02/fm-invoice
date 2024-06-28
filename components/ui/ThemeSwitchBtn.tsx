"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Moon from "@/public/assets/icon-moon.svg";
import Sun from "@/public/assets/icon-sun.svg";

const ThemeSwitchBtn = () => {
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
    <div className="flex items-center gap-4 text-GraylishBlue06 transition hover:text-White11 active:scale-95">
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
      >
        {isDark && <Sun />}
        {!isDark && <Moon />}
      </button>
    </div>
  );
};

export default ThemeSwitchBtn;
