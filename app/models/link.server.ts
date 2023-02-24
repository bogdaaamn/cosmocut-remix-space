import { getDetabase } from "./deta.server";

export type Link = {
  id: string;
  url: string;
  createdAt: string;
};

export async function getLinks(): Promise<Array<Link>> {
  const db = await getDetabase("links");
  const data = await db.fetch();

  return data.items.map((item) => ({
    id: item.key as string,
    url: item.url as string,
    createdAt: item.created_at as string,
  }));
}

export async function getLinkData(id: string): Promise<Link> {
  const db = await getDetabase("links");
  const data = await db.get(id);

  if (!data) {
    throw new Error("Link not found");
  }

  return {
    id: data.key as string,
    url: data.url as string,
    createdAt: data.created_at as string,
  };
}

export async function createLink(url: string, slug: string): Promise<Link> {
  const db = await getDetabase("links");
  const data = await db.put(
    {
      url,
      created_at: new Date().toISOString(),
    },
    slug
  );

  if (!data) {
    throw new Error("Link not created");
  }

  return {
    id: data.key as string,
    url: data.url as string,
    createdAt: data.created_at as string,
  };
}
