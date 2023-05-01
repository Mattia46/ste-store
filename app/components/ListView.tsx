import { Link } from "@remix-run/react";

export const ListView = ({ music }: any) => {
  return (
    <div className="p-8 flex flex-col items-center">
      <img width="250" alt="avatar" className="rounded-full" src={music.image} />
        <p className="text-gray text-xl my-4">{ music.title }</p>
      <Link
        to={`/music/${music.slug}`}
        className="rounded w-48 bg-slate-600 text-center px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600">More Info</Link>
    </div>
  )
};
