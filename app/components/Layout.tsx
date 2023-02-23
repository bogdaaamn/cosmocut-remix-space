import { Link } from "@remix-run/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col gap-4 h-full container mx-auto px-4 py-8">
        <div className="flex items-center justify-between bg-white shadow rounded-xl h-16 px-6">
          <p className="text-xl font-bold">de.ta</p>
          <div className="flex gap-2">
            <Link
              to="/#"
              className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              to="/#"
              className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
              Links
            </Link>
            <Link
              to="/#"
              className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
              Settings
            </Link>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
