import { Link } from '@remix-run/react';

export function MusicItem({ music }: any) {
  if (!music) return null;

  return (
    <div className="p-4 md:p-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-between">
      <div className="border-2 md:w-1/2 p-8 rounded-lg">
        <img width="250" alt="avatar" className="rounded-full" src={music.image} />
        <p className="text-gray text-3xl my-4">{ music.title }</p>
        <p className="text-gray text-xl my-4">{ music.description }</p>
      </div>
      <div className="border-2 md:w-1/2 h-80 p-8 rounded-lg">
        <div className="text-gray text-3xl my-4">{ music.title }</div>
        <div className="text-gray text-xl mt-8 my-4 flex"><div className="font-medium pr-2">Format:</div> 7-inch</div>
        <div className="text-gray text-xl my-4 flex"><div className="font-medium pr-2">Price:</div> £15.99</div>
        <Link className="rounded mr-4 bg-blue-600 px-4 py-2 text-blue-100 hover:bg-blue-500" to={music.link} target="_blank" rel="noopener noreferrer">Buy</Link>
      </div>
    </div>
  );
}
