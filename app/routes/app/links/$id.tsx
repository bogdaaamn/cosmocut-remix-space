import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { LoaderArgs } from "@remix-run/node";

import { getLinkData } from "~/models/link.server";

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.id) {
    throw new Error("Missing link ID");
  }

  const linkData = await getLinkData(params.id);

  return json({ link: linkData });
};

export default function PostSlug() {
  const { link } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Link: {link.id}</h1>
      <p>Slug: {link.slug}</p>
      <p>Created at: {link.createdAt}</p>
      <p>URL: {link.url}</p>
    </main>
  );
}
