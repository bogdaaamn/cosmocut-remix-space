import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

import type { ActionArgs } from "@remix-run/node";

import { createLink } from "~/models/link.server";
import ShortUniqueId from "short-unique-id";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const url = formData.get("url") as string;
  const slug = formData.get("slug") as string;

  const data = await createLink(url, slug);

  return redirect(`/app/links/${data.id}`);
};

export default function LinkNew() {
  function generateRandomSlug() {
    const slug = new ShortUniqueId().randomUUID(6);
    return slug;
  }

  return (
    <main className="flex flex-col w-full h-full px-16 py-8 bg-white">
      <Form method="post">
        <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4">
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Destination URL
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="url"
                id="url"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="https://deta.space/developers"
              />
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
                className="block w-full rounded-md border-gray-300 pl-14 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="dn4jem"
                defaultValue={generateRandomSlug()}
              />
            </div>
          </div>
        </div>

        <div className="pt-5">
          <button
            type="submit"
            className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create short link
          </button>
        </div>
      </Form>
    </main>
  );
}
