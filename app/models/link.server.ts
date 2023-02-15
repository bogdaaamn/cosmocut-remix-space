type Link = {
  slug: string;
  url: string;
};

export async function getLinks(): Promise<Array<Link>> {
  return [
    {
      slug: "js1h3fm",
      url: "https://github.com/envless/envless",
    },
    {
      slug: "mi44sge",
      url: "https://github.com/bogdan/saluty",
    },
  ];
}

export async function getLinkData(slug: string): Promise<Link> {
  return {
    slug,
    url: `https://github.com/envless/${slug}`,
  };
}
