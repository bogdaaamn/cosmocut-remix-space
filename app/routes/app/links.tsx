import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { Layout } from "~/components/Layout";

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
                <Link
                  to={`${link.id}`}
                  prefetch="intent"
                  className="block hover:bg-gray-50"
                >
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm font-medium text-indigo-600">
                        de.ta/{link.slug}
                      </p>
                      <div className="ml-2 flex flex-shrink-0">
                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          3 clicks
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex ">
                      <p
                        title={link.url}
                        className="truncate text-sm text-gray-500"
                      >
                        {link.url}
                      </p>
                      <div className="ml-2 flex flex-shrink-0">
                        <p className="text-sm text-gray-500">5 min ago</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-scroll col-span-2 bg-dots shadow rounded-xl flex items-center justify-center">
          <Outlet />
        </div>
      </main>
    </Layout>
  );
}
