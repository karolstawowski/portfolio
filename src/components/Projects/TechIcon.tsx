type TechIconProps = {
  name: string
  imageName: string
}

export const TechIcon = ({ name, imageName }: TechIconProps): JSX.Element => {
  return (
    <div className="relative flex flex-wrap items-center justify-center w-10 h-10 rounded-md shadow-md bg-slate-50 group">
      <img
        src={`./assets/${imageName}.svg`}
        height="40"
        width="40"
        alt={name}
        className="w-8 h-8"
      />
      <span className="absolute z-10 px-2 py-1 m-4 mx-auto text-xs transition-opacity -translate-x-1/2 translate-y-10 rounded-md opacity-0 text-sky-100 bg-sky-900 group-hover:opacity-100 left-1/2">
        {name}
      </span>
    </div>
  )
}
