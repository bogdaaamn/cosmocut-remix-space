import { Deta } from "deta";

const { DETA_PROJECT_KEY } = process.env;

const client = Deta(DETA_PROJECT_KEY);

export type BaseId = "links" | "analytics";

export async function getDetabase(id: BaseId) {
  return client.Base(id);
}
