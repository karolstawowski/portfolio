type TechButtonProps = {
  name: string
  imageName: string
}

export const TechButton = ({
  name,
  imageName,
}: TechButtonProps): JSX.Element => {
  return (
    <div className="flex flex-wrap items-center justify-center w-20 h-20 rounded-md shadow-xl bg-sky-100 hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.2)]">
      <img
        src={`./assets/${imageName}.svg`}
        height="32"
        width="32"
        alt={name}
        className="w-8 h-8"
      />
      <span className="w-full text-sm text-center">{name}</span>
    </div>
  )
}
