type TechButtonProps = {
  name: string
  imageName: string
}

export const TechButton = ({
  name,
  imageName,
}: TechButtonProps): JSX.Element => {
  return (
    <div className="card flex flex-wrap items-center justify-center w-[84px] h-[84px] rounded-md bg-button text-black">
      <img
        src={`./assets/${imageName}.svg`}
        height="32"
        width="32"
        alt={name}
        className="z-10 w-8 h-8"
      />
      <span className="z-10 w-full text-sm text-center">{name}</span>
    </div>
  )
}
