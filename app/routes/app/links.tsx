import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import formatDistance from "date-fns/formatDistance";

import { Layout } from "~/components/Layout";
import { LinkCard } from "~/components/LinkCard";

import { getAnalyticClicks } from "~/models/analytics.server";
import { getLinks } from "~/models/link.server";

function getRelativeTime(dateISOString: string): string {
  const now = new Date();
  const createdAt = new Date(dateISOString);

  const relativeTime = formatDistance(createdAt, now, {
    addSuffix: true,
  });
  return relativeTime
    .replace("minute", "min")
    .replace("about", "")
    .replace("less than", "");
}

async function getClicksNumber(id: string): Promise<string> {
  const clicks = await getAnalyticClicks(id);
  return `${clicks} clicks`;
}

export async function loader() {
  const links = await getLinks();

  // Sort links by created_at
  const sortedLinks = links.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  // Generate metadata for each link
  const completeLinks = await Promise.all(
    sortedLinks.map(async (link) => {
      return {
        ...link,
        time: getRelativeTime(link.createdAt),
        clicks: await getClicksNumber(link.id),
      };
    })
  );

  return json({
    links: completeLinks,
  });
}

export default function AppIndex() {
  const { links } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <main className="grid grid-cols-3 gap-4 grow h-full">
        <div className="overflow-scroll bg-white shadow rounded-xl">
          <ul className="divide-y divide-gray-200 last:border-b">
            {links.map((link) => (
              <li key={link.id}>
                <LinkCard
                  id={link.id}
                  url={link.url}
                  clicks={link.clicks}
                  time={link.time}
                />
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
