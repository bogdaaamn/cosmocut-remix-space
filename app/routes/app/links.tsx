import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { Layout } from "~/components/Layout";
import { LinkCard } from "~/components/LinkCard";

import { getLinks } from "~/models/link.server";

export const loader = async () => {
  return json({
    links: await getLinks(),
  });
};

export default function AppIndex() {
  const { links } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <main className="grid grid-cols-3 gap-4 grow">
        <div className="overflow-scroll bg-white shadow rounded-xl">
          <ul className="divide-y divide-gray-200 last:border-b">
            {links.map((link) => (
              <li key={link.id}>
                <LinkCard data={link} />
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-scroll col-span-2 bg-dots shadow rounded-xl">
          <Outlet />
        </div>
      </main>
    </Layout>
  );
}
