import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { getEnv } from "../.env.server";
import { Navigation } from '@components/Navigation';

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
  ENV: ReturnType<typeof getEnv>;
};

export async function loader({ request }: LoaderArgs) {
  return json<LoaderData>({
    user: await getUser(request),
    ENV: getEnv()
  });
}

export default function App() {
  const data = useLoaderData();

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Navigation user={data?.user} />
        <ScrollRestoration />
        <Scripts />
        <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <noscript>
          <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" no-referrer-when-downgrade />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <LiveReload />
      </body>
    </html>
  );
}
