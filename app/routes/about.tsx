// import { Link, useLoaderData } from "@remix-run/react";
// // import type { LoaderFunction } from '@remix-run/node';
// import { json } from '@remix-run/node';
// import { getList } from '~/models/music.server';
// import { useOptionalAdminUser } from "~/utils";

// type LoaderData = {
//   music: Awaited<ReturnType<typeof getList>>
// }

// export const loader: LoaderFunction = async() => {
//   const music = await getList();

//   return json<LoaderData>({ music });
// }

export default function AboutRoute() {
  // const { music } = useLoaderData() as LoaderData;

  return (
    <main className="w-full bg-indigo-200">
      <h1>About</h1>
    </main>
  )
}

