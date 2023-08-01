export type ContactButtonProps = {
  title: string
  linkTo: string
  imgName: string
}

export const ContactButton = ({
  title,
  linkTo,
  imgName,
}: ContactButtonProps): JSX.Element => {
  return (
    <a
      href={linkTo}
      className="block h-12 w-36 md:w-40 md:h-14"
      target="_blank"
      aria-label={title}
    >
      <div className="flex items-center h-full rounded-lg shadow justify-evenly bg-primary hover:shadow-lg hover:bg-blue-400 active:bg-blue-300">
        <img
          src={`./assets/${imgName}.svg`}
          height="32"
          width="32"
          className="w-8 h-8"
          alt={title}
        />
        <span>{title}</span>
      </div>
    </a>
  )
}
