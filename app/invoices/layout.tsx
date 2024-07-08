import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Navigation from "@/components/ui/Navigation";
import InvoicesProvider from "../_providers/InvoicesContext";

export default async function InvoicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth");
  }

  return (
    <main className="flex grid-cols-[auto,1fr] flex-col lg:grid">
      <Navigation />
      <InvoicesProvider>
        <div className="h-max">{children}</div>
      </InvoicesProvider>
    </main>
  );
}
