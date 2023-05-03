// import { Link, useLoaderData } from "@remix-run/react";
// import type { LoaderFunction } from '@remix-run/node';
// import { json } from '@remix-run/node';
// import { getList } from '~/models/music.server';
import { ListView } from '@components/ListView';
import { music } from '@constants';

// type LoaderData = {
//   music: Awaited<ReturnType<typeof getList>>
// }

// export const loader: LoaderFunction = async() => {
//   const music = await getList();

//   return json<LoaderData>({ music });
// }

export default function RitmoRoute() {
  // const { music } = useLoaderData() as LoaderData;

  return (
    <main className="md:w-2/3 flex flex-wrap flex-col md:flex-row ml-auto mr-auto">
      {music.map((music) => (
        <div key={music.slug} className="border-2 md:m-2 rounded-2xl m-6">
          <ListView music={music} />
        </div>
      ))}
    </main>
  )
}


