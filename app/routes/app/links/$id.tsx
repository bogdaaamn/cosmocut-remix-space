import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import type { LoaderArgs } from "@remix-run/node";

import { getLinkData } from "~/models/link.server";

import {
  ClipboardIcon,
  ChartPieIcon,
  ChartBarSquareIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.id) {
    throw new Error("Missing link ID");
  }

  const linkData = await getLinkData(params.id);

  return json({ link: linkData });
};

export default function LinkSlug() {
  const { link } = useLoaderData<typeof loader>();

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <main className="flex flex-col gap-8 w-full h-full px-16 py-8 bg-white">
      <Form method="post" key={link.slug}>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Destination URL
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                name="url"
                id="url"
                className="block w-full rounded-md truncate pr-9 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                defaultValue={link.url}
                disabled
                title={link.url}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  type="button"
                  className="relative m-2 p-2 rounded-md font-medium hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  onClick={() => copyToClipboard(link.url)}
                  title="Copy to clipboard"
                >
                  <ClipboardIcon
                    className="h-5 w-5 text-gray-700"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-700"
            >
              Short link
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500">de.ta/</span>
              </div>
              <input
                type="text"
                name="slug"
                id="slug"
                className="block pl-14 w-full rounded-md truncate pr-9 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                disabled
                defaultValue={link.slug}
                title={link.slug}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  type="button"
                  className="relative m-2 p-2 rounded-md font-medium hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  onClick={() => copyToClipboard(link.slug)}
                  title="Copy to clipboard"
                >
                  <ClipboardIcon
                    className="h-5 w-5 text-gray-700"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
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
