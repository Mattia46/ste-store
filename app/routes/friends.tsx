import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getList } from '~/models/music.server';
import { ListView } from '@components/ListView';

type LoaderData = {
  music: Awaited<ReturnType<typeof getList>>
}

export const loader: LoaderFunction = async() => {
  const music = await getList();

  return json<LoaderData>({ music });
}

export default function FriendsRoute() {
  const { music } = useLoaderData() as LoaderData;

  return (
    <main className="w-full bg-indigo-200">
      {music.map((music) => (
        <li key={music.slug}>
          <Link
            to={`/music/${music.slug}`}
            // Prefetch intent triggers api request when hovering
            prefetch="intent"
            className="text-blue-600 underline"
          >
            <ListView music={music} />
          </Link>
        </li>
      ))}
    </main>
  )
}

