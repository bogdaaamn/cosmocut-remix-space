import { getDetabase } from "./deta.server";

export type Analytics = {
  id: string;
  url: string;
  createdAt: string;
  country: string;
  referrer: string;
  device: string;
  browser: string;
};

function getCountryFromHeaders(headers: Headers): string {
  // Get locale and language from headers
  const languageHeader = headers.get("Accept-Language");

  // Return country code from locale: en-US => US
  if (languageHeader) {
    const userLocale = languageHeader.split(",")[0];
    return userLocale.split("-")[1];
  }

  return "Space";
}

function getReferrer(headers: Headers): string {
  // Get referrer from headers
  const referrer = headers.get("Referer");

  // Extract the domain from the referrer URL
  if (referrer) {
    const domain = referrer.match(/:\/\/(.[^/]+)/);
    return domain ? domain[1] : "direct";
  } else {
    return "direct";
  }
}

function getDevice(headers: Headers): string {
  const userAgent = headers.get("User-Agent");

  const devices = [
    {
      name: "mobile",
      regex:
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    },
    {
      name: "tablet",
      regex: /Tablet|iPad|PlayBook|Silk|Kindle|Nexus 7|Nexus 10/i,
    },
    { name: "desktop", regex: /Windows NT|Macintosh|X11|Linux|CrOS/ },
  ];

  if (userAgent) {
    const device = devices.find((device) => device.regex.test(userAgent)) || {
      name: "unknown",
    };

    return device.name;
  }

  return "unknown";
}

function getBrowser(headers: Headers): string {
  const userAgent = headers.get("User-Agent") || "";

  const browsers = [
    { name: "chrome", regex: /Chrome|CriOS/ },
    { name: "firefox", regex: /Firefox/ },
    { name: "safari", regex: /Safari/ },
    { name: "opera", regex: /Opera|OPR/ },
    { name: "edge", regex: /Edge/ },
    { name: "ie", regex: /MSIE|Trident/ },
  ];

  if (userAgent) {
    const browser = browsers.find((browser) =>
      browser.regex.test(userAgent)
    ) || {
      name: "unknown",
    };

    return browser.name;
  }

  return "unknown";
}

// TODO: Please add better types to all these functions
export async function createAnalytics(url: string, headers: Headers) {
  const country = getCountryFromHeaders(headers);
  const referrer = getReferrer(headers);
  const device = getDevice(headers);
  const browser = getBrowser(headers);

  console.log("country", country);

  const db = await getDetabase("analytics");
  await db.put({
    url,
    created_at: new Date().toISOString(),
    country,
    referrer,
    device,
    browser,
  });
}

export async function getAnalytics(id: string): Promise<Analytics[]> {
  const db = await getDetabase("analytics");
  const data = await db.fetch({ url: id });

  return data.items.map((item) => ({
    id: item.key as string,
    url: item.url as string,
    createdAt: item.created_at as string,
    country: item.country as string,
    referrer: item.referrer as string,
    device: item.device as string,
    browser: item.browser as string,
  }));
}

export async function getAnalyticClicks(id: string): Promise<number> {
  const db = await getDetabase("analytics");
  const data = await db.fetch({ url: id });

  return data.count;
}
