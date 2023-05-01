import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMusic } from "~/models/music.server";
import invariant from "tiny-invariant";
import type { Music } from "@prisma/client";

type LoaderData = {
  music: Music;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  invariant(slug, 'slug is required');

  const music = await getMusic(slug)

  invariant(music, `music is not fund: ${slug}`)
  return json<LoaderData>({ music });
}

export default function PostRoute() {
  const { music } = useLoaderData();

  return (
    <main className="w-full bg-indigo-200">
      <h1 className="my-6 border-b-2 text-center text-3xl">{music?.title}</h1>
      <div>{music?.description}</div>
    </main>
  );
}
