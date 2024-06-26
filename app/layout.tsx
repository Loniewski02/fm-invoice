import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import ThemeProviders from "./theme-provider";
import "./globals.css";

const fontSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400"],
  display: "block",
  variable: "--font-spartan",
});

export const metadata: Metadata = {
  title: "My App",
  description: "My App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hidden" suppressHydrationWarning>
      <body className={`${fontSpartan.variable} min-h-[100dvh] font-spartan`}>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
