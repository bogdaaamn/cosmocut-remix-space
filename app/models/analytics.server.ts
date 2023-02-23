import { getDetabase } from "./deta.server";

export async function createAnalytics(headers: any) {
  const db = await getDetabase("analytics");
  await db.put(headers);
}
