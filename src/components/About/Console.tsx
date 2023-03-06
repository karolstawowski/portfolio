export const Console = (): JSX.Element => {
  return (
    <div className="mt-2 ml-auto bg-gray-700 rounded-md h-80 xs:h-56 md:h-80 2xl:h-72 lg:w-11/12 md:ml-0 md:col-span-2">
      <div className="flex items-center justify-end w-full h-8 gap-1 px-2 bg-gray-500 rounded-t-md">
        <div className="w-4 h-4 bg-gray-400 rounded-full" />
        <div className="w-4 h-4 bg-gray-400 rounded-full" />
        <div className="w-4 h-4 bg-gray-200 rounded-full" />
      </div>
      <div className="mx-6 my-4 text-base text-slate-200">
        <span className="relative z-20 hidden pl-4 pr-2 leading-5 bg-blue-600 xs:inline-block">
          <div className="absolute right-[-14px] w-0 h-0 border-l-[14px] border-l-blue-600 border-y-[10px] border-y-transparent" />
          Karol@PC
        </span>
        <span className="relative z-10 inline-block pl-4 pr-2 -ml-1 leading-5 bg-green-600 xs:pl-6">
          <div className="top-0 absolute right-[-14px] w-0 h-0 border-l-[14px] border-green-600 border-y-[10px] border-y-transparent" />
          main
        </span>
        <span className="relative inline-block pl-6 pr-2 mr-5 -ml-1 leading-5 bg-red-500">
          <div className="top-0 absolute right-[-14px] w-0 h-0 border-l-[14px] border-red-500 border-y-[10px] border-y-transparent" />
          ~/src
        </span>
        <span className="leading-5">
          Alongside my programming experience, I am pursuing a degree in
          computer science to acquire knowledge on how to create solutions to
          real-world problems through technology.
        </span>
      </div>
    </div>
  )
}
