import Navigation from "@/components/ui/Navigation";

export default function SubscriptonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex grid-cols-[auto,1fr] flex-col lg:grid">
      <Navigation />
      <div className="h-max">{children}</div>
    </main>
  );
}
