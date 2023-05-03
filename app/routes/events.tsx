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

export default function EventsRoute() {
  // const { music } = useLoaderData() as LoaderData;

  return (
    <div className="flex flex-col items-center p-4 w-full">
      <div className="p-4 text-2xl md:text-3xl flex flex-col">
        <div className="pb-4 md:pb-8">
          Belli to belli are back!!
        </div>
        <img src="../events/1.jpg" alt="event" width="700"/>
      </div>
      <div className="w-full m-0 md:m-8 border"></div>
      <div className="p-4 text-2xl md:text-3xl flex flex-col">
        <div className="pb-4 md:pb-8">
          New release 🎉
        </div>
        <img src="../events/2.jpg" alt="event" width="700"/>
      </div>
      <div className="w-full m-0 md:m-8 border"></div>
      <div className="p-4 text-2xl md:text-3xl flex flex-col">
        <div className="pb-4 md:pb-8">
          La Bomba presents Ritmo Del Barrio 💿
        </div>
        <img src="../events/3.jpg" alt="event" width="700"/>
      </div>
    </div>
  )
}

