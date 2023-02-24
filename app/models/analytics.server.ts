import { getClientIPAddress } from "remix-utils";

import { getDetabase } from "./deta.server";

async function getCountry(ip: string | null) {
  const res = await fetch(`https://ipapi.co/${ip}/country_name/`);
  const data = await res.text();

  if (data == "Undefined") return "Space";

  return data;
}

async function getReferrer(referrer: string) {
  // Get domain of referrer url or return direct
  const domain = referrer.match(/:\/\/(.[^/]+)/);
  return domain ? domain[1] : "direct";
}

async function getUserAgent(userAgent: string) {
  // Get device type from user agent
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
  const device = devices.find((device) => device.regex.test(userAgent)) || {
    name: "unknown",
  };

  // Get browser type from user agent
  const browsers = [
    { name: "chrome", regex: /Chrome|CriOS/ },
    { name: "firefox", regex: /Firefox/ },
    { name: "safari", regex: /Safari/ },
    { name: "opera", regex: /Opera|OPR/ },
    { name: "edge", regex: /Edge/ },
    { name: "ie", regex: /MSIE|Trident/ },
  ];
  const browser = browsers.find((browser) => browser.regex.test(userAgent)) || {
    name: "unknown",
  };

  return { device: device.name, browser: browser.name };
}

// TODO: Please add better types to all these functions
export async function createAnalytics(url: string, headers: Headers) {
  // Get country from ip address
  const ipAddress = getClientIPAddress(headers);
  const country = await getCountry(ipAddress);

  // Get referrer from headers, get domain
  const referrer = headers.get("Referer") || "direct";
  const referrerDomain = await getReferrer(referrer);

  // Get user agent from headers, get device and browser
  const userAgent = headers.get("User-Agent") || "unknown";
  const { device, browser } = await getUserAgent(userAgent);

  // Save analytics data to detabase
  const db = await getDetabase("analytics");
  await db.put({
    url,
    created_at: new Date().toISOString(),
    country,
    referrer: referrerDomain,
    device,
    browser,
  });
}
