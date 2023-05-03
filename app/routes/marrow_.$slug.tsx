// import type { LoaderFunction } from "@remix-run/node";
// import { json } from "@remix-run/node";
import { useLoaderData, Link, useParams, useNavigate } from "@remix-run/react";
// import { getMusic } from "~/models/music.server";
// import invariant from "tiny-invariant";
// import type { Music } from "@prisma/client";
import { music as musicList } from '@constants';
import { MusicItem } from '@components/MusicItem';

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

  return <MusicItem music={music} />;
}
