import { PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";

export default function LinkIndex() {
  return (
    <div className="text-center flex flex-col justify-center h-full">
      <h3 className="mt-2 text-sm font-medium text-gray-900">
        No link selected
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Select a link from the left panel or create a new one.
      </p>
      <div className="mt-6">
        <Link
          to="/app/links/new"
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <PlusIcon className="-ml-0.5 mr-1 h-4 w-4" aria-hidden="true" />
          Create new
        </Link>
      </div>
    </div>
  );
}
