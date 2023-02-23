import { Link } from "@remix-run/react";

import type { Link as LinkType } from "~/models/link.server";

type PropsType = {
  data: LinkType;
};

export function LinkCard({ data: link }: PropsType) {
  return (
    <Link
      to={`${link.id}`}
      prefetch="intent"
      className="block hover:bg-gray-50"
    >
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="truncate text-sm font-medium text-indigo-600">
            de.ta/{link.slug}
          </p>
          <div className="ml-2 flex flex-shrink-0">
            <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
              3 clicks
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-between">
          <p title={link.url} className="truncate text-sm text-gray-500">
            {link.url}
          </p>
          <div className="ml-2 flex flex-shrink-0">
            <p className="text-sm text-gray-500">5 min ago</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
