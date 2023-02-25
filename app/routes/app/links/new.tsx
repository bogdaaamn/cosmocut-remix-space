import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

import type { ActionArgs } from "@remix-run/node";

import { createLink } from "~/models/link.server";
import ShortUniqueId from "short-unique-id";
import { AddonInput, Input } from "~/components/Input";

// Regex to allow https://*.* and https://*.*/*
export const urlRegex = /^(https:\/\/)(.*)\.[0-9a-zA-Z]+(\/)?(.*)$/;

// Regex to allow only letters and numbers and - and _
export const slugRegex = /^[a-zA-Z0-9_-]+$/;

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const url = formData.get("url") as string;
  const slug = formData.get("slug") as string;

  // Validate url and slug
  const errors = {
    url: url && urlRegex.test(url) ? null : "Please enter a valid URL",
    slug:
      slug && slugRegex.test(slug)
        ? null
        : "Please enter only letters, numbers and hyphens",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  if (hasErrors) {
    return json(errors);
  }

  const data = await createLink(url, slug);

  return redirect(`/app/links/${data.id}`);
}

export default function LinkNew() {
  const errors = useActionData<typeof action>();

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
            error={errors?.url}
          />
          <AddonInput
            id="slug"
            title="Short link"
            placeholder="nej3sm"
            value={generateRandomSlug()}
            error={errors?.slug}
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
