import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import { ChartPieIcon, ChartBarSquareIcon } from "@heroicons/react/24/outline";

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
      <Form method="post" key={link.id}>
        <div className="mt-6 grid grid-cols-2 gap-4">
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
