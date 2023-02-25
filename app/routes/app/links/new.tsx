import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

import type { ActionArgs } from "@remix-run/node";

import { createLink } from "~/models/link.server";
import ShortUniqueId from "short-unique-id";
import { AddonInput, Input } from "~/components/Input";

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
          <Input
            id="url"
            title="Destination URL"
            placeholder="https://deta.space/developers"
          />
          <AddonInput
            id="slug"
            title="Short link"
            placeholder="nej3sm"
            value={generateRandomSlug()}
          />
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
