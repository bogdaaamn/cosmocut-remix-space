import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

import type { ActionArgs } from "@remix-run/node";

import { createLink } from "~/models/link.server";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const url = formData.get("url") as string;
  const slug = formData.get("slug") as string;

  const data = await createLink(url, slug);

  return redirect(`/app/links/${data.id}`);
};

export default function LinkNew() {
  return (
    <Form method="post">
      <p>
        <label>
          Link URL: <input type="text" name="url" />
        </label>
      </p>
      <p>
        <label>
          Link Slug: <input type="text" name="slug" />
        </label>
      </p>
      <p className="text-right">
        <button type="submit">Create Short Link</button>
      </p>
    </Form>
  );
}
