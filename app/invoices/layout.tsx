import Navigation from "@/components/Navigation";

export default function SubscriptonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col lg:flex-row">
      <Navigation />
      {children}
    </main>
  );
}
