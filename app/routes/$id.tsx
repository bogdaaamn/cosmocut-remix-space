import { json, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";

import type { LoaderArgs } from "@remix-run/node";

import { getLinkData } from "~/models/link.server";
import { createAnalytics } from "~/models/analytics.server";

export const loader = async ({ params, request }: LoaderArgs) => {
  if (!params.id) {
    throw new Error("Missing link ID");
  }

  try {
    const data = await getLinkData(params.id);
    await createAnalytics(params.id, request.headers);

    return redirect(data.url);
  } catch (e) {
    return json({ id: params.id });
  }
};

export default function RedirectSlug() {
  return (
    <div className="bg-dots h-full w-full">
      <div className="text-center flex flex-col justify-center h-full">
        <p className="mt-2 text-3xl font-medium text-gray-900">
          Short link not found
        </p>
        <p className="mt-1 text-xl text-gray-500">
          Go back to{" "}
          <Link to="https://deta.space" className="font-medium">
            de.ta
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
