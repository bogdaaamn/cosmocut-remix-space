import { getDetabase } from "./deta.server";

export type Link = {
  id: string;
  slug: string;
  url: string;
  createdAt: string;
};

export async function getLinks(): Promise<Array<Link>> {
  const db = await getDetabase();
  const data = await db.fetch();

  return data.items.map((item) => ({
    id: item.key as string,
    slug: item.slug as string,
    url: item.url as string,
    createdAt: item.created_at as string,
  }));
}

export async function getLinkData(id: string): Promise<Link> {
  const db = await getDetabase();
  const data = await db.get(id);

  if (!data) {
    throw new Error("Link not found");
  }

  return {
    id: data.key as string,
    slug: data.slug as string,
    url: data.url as string,
    createdAt: data.created_at as string,
  };
}
