// import type { LoaderFunction } from "@remix-run/node";
// import { json } from "@remix-run/node";
import { useLoaderData, useParams, useNavigate } from "@remix-run/react";
// import { getMusic } from "~/models/music.server";
// import invariant from "tiny-invariant";
// import type { Music } from "@prisma/client";
import { music as musicList } from '@constants';

// type LoaderData = {
//   music: Music;
// };

// export const loader: LoaderFunction = async ({ params }) => {
//   const { slug } = params;
//   invariant(slug, 'slug is required');

//   const music = await getMusic(slug)

//   invariant(music, `music is not fund: ${slug}`)
//   return json<LoaderData>({ music });
// }

export default function MusicDescriptionRoute() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const music = musicList.find(x => x.slug === slug);
  // const { music } = useLoaderData();
  if (!music) return navigate('/');

  return (
    <div className="p-4 md:p-8 flex flex-col h-full md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-between">
      <div className="border-2 md:w-1/2 p-8">
        <img width="250" alt="avatar" className="rounded-full" src={music.image} />
        <p className="text-gray text-3xl my-4">{ music.title }</p>
        <p className="text-gray text-xl my-4">{ music.description }</p>
      </div>
      <div className="border-2 md:w-1/2 h-80 p-8">
        <div className="text-gray text-3xl my-4">{ music.title }</div>
        <div className="text-gray text-xl mt-8 my-4 flex"><div className="font-medium pr-2">Format:</div> 7-inch</div>
        <div className="text-gray text-xl my-4 flex"><div className="font-medium pr-2">Price:</div> £15.99</div>
        <button className="rounded mr-4 bg-blue-600 px-4 py-2 text-blue-100 hover:bg-blue-500">Buy</button>
      </div>
    </div>
  );
}
