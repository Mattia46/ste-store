export const ListView = ({ music }: any) => {
  return (
    <article className="group relative flex cursor-pointer flex-col border-b border-gray-300 px-5 hover:bg-gray-50">
      <div className="my-2" />
      <div className="flex gap-3.5 my-4 ">
        <div className="flex-none">
          <img width="50" alt="avatar" className="h-12 rounded-full" src={music.image} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between text-gray-500">
            <div className="relative flex gap-2 text-lg">
              <p color="gray">{ music.title }</p>
            </div>
          </div>
          <div className="mt-8 flex justify-between text-gray-500" >
            { music.description }
          </div>
        </div>
      </div>
    </article>
  )
};
