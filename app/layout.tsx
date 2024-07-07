import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import ThemeProviders from "./theme-provider";
import AuthProvider from "./auth-provider";
import MessagesProvider from "./_providers/MessagesContext";
import "./globals.css";

import Message from "@/components/ui/Message";

const fontSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "block",
  variable: "--font-spartan",
});

export const metadata: Metadata = {
  title: "Invoices",
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
        <AuthProvider>
          <MessagesProvider>
            <ThemeProviders>
              {children}
              <Message />
            </ThemeProviders>
          </MessagesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
