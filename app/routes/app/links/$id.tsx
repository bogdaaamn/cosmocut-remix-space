import { json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";

import {
  ChartPieIcon,
  ChartBarSquareIcon,
  XMarkIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import { getLinkData } from "~/models/link.server";

import { ClipboardInput } from "~/components/Input";

import type { LoaderArgs } from "@remix-run/node";

export async function loader({ params }: LoaderArgs) {
  if (!params.id) {
    throw new Error("Missing link ID");
  }

  const linkData = await getLinkData(params.id);

  return json({ link: linkData });
}

export default function LinkSlug() {
  const { link } = useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col gap-8 w-full h-full px-16 py-8 bg-white">
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-red-300 px-3 py-2 text-sm font-medium leading-4 text-orange-700 shadow-sm hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed"
          disabled
        >
          <XMarkIcon className="-ml-0.5 mr-1 h-4 w-4" aria-hidden="true" />
          Remove link
        </button>
        <Link
          to="/app/links/new"
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <PlusIcon className="-ml-0.5 mr-1 h-4 w-4" aria-hidden="true" />
          Create new
        </Link>
      </div>

      <Form method="post" key={link.id}>
        <div className="grid grid-cols-2 gap-4">
          <ClipboardInput id="url" title="Destination URL" value={link.url} />
          <ClipboardInput
            id="slug"
            title="Short link"
            value={`cos.cx/${link.id}`}
          />
        </div>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-sm text-gray-500">Analytics</span>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-4">
        <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
          <ChartPieIcon className="mx-auto h-12 w-12 text-gray-400" />
          <span className="mt-2 block text-sm font-medium text-gray-600">
            Visitor analytics coming soon...
          </span>
        </div>

        <div className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
          <ChartBarSquareIcon className="mx-auto h-12 w-12 text-gray-400" />
          <span className="mt-2 block text-sm font-medium text-gray-600">
            Source analytics coming soon...
          </span>
        </div>
      </div>
    </main>
  );
}
