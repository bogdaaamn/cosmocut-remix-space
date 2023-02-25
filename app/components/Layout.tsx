export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col gap-4 h-full container mx-auto px-4 py-8">
        {children}
      </div>
    </>
  );
}
