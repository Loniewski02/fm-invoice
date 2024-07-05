import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["var(--font-spartan)"],
      },
      colors: {
        Violet01: "#7C5DFA",
        LightViolet02: "#9277FF",
        VeryDarkBlue03: "#1E2139",
        DarkBlue04: "#252945",
        VeryLightBlue05: "#DFE3FA",
        GraylishBlue06: "#888EB0",
        Blue07: "#7E88C3",
        Black08: "#0C0E16",
        Red09: "#EC5757",
        LightRed10: "#9277FF",
        White11: "#F8F8FB",
        PureWhite: "#ffffff",
        LightBlack12: "#141625",
      },
      fontSize: {
        "13": ["13px", "15px"],
        "15": ["15px", "15px"],
      },
      keyframes: {
        show: {
          from: { right: "-150%" },
          to: { right: "32px" },
        },
        hide: {
          from: { right: "32px" },
          to: { right: "-150%" },
        },
      },
      animation: {
        show: "show .5s ease-in-out forwards",
        hide: "hide .5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
