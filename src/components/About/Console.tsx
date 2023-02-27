export const Console = (): JSX.Element => {
  return (
    <div className="mt-2 ml-auto rounded-md h-80 xs:h-56 md:h-80 2xl:h-72 bg-console-bg lg:w-11/12 md:ml-0 md:col-span-2">
      <div className="flex items-center justify-end w-full h-8 gap-1 px-2 rounded-t-md bg-console-menu-bar">
        <div className="w-4 h-4 rounded-full bg-console-action"></div>
        <div className="w-4 h-4 rounded-full bg-console-action"></div>
        <div className="w-4 h-4 rounded-full bg-console-exit"></div>
      </div>
      <p className="mx-6 my-4 text-base text-slate-200">
        Alongside my programming experience, I am pursuing a degree in computer
        science to acquire knowledge on how to create solutions to real-world
        problems through technology.
      </p>
    </div>
  )
}
