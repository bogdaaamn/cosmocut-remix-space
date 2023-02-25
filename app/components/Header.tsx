import { Link } from "@remix-run/react";

export function Header() {
  return (
    <div className="flex items-center justify-between bg-white shadow rounded-xl h-16 px-6">
      <div className="w-48">
        <img src="/logo.svg" alt="CosmoCut logo" aria-hidden />
      </div>
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
  );
}
