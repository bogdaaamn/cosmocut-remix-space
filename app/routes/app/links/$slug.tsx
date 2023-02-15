import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { LoaderArgs } from "@remix-run/node";

import { getLinkData } from "~/models/link.server";

export const loader = async ({ params }: LoaderArgs) => {
  const linkData = await getLinkData(params.slug ?? "");
  return json({ link: linkData });
};

export default function PostSlug() {
  const { link } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Link: {link.slug}</h1>
      <p>Slug: {link.slug}</p>
      <p>URL: {link.url}</p>
    </main>
  );
}
