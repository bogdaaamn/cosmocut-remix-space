import { Deta } from "deta";

const { DETA_PROJECT_KEY } = process.env;

const client = Deta(DETA_PROJECT_KEY);

export async function getDetabase() {
  return client.Base("links");
}
