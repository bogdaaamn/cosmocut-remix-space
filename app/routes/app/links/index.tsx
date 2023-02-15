import { Link } from "@remix-run/react";

export default function LinkIndex() {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-medium text-gray-900">
        No link selected
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Select a link from the left panel or create a new one.
      </p>
      <div className="mt-6">
        <Link to={`/app/links/new`}>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            New short link
          </button>
        </Link>
      </div>
    </div>
  );
}
