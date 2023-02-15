import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getLinks } from "~/models/link.server";

export const loader = async () => {
  return json({
    links: await getLinks(),
  });
};

export default function AppIndex() {
  const { links } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Short links</h1>
      <ul>
        {links.map((link) => (
          <li key={link.slug}>
            <Link to={link.slug} className="text-blue-600 underline">
              {link.url}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
