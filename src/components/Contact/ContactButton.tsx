export type ContactButtonProps = {
  title: string
  linkTo: string
  element: string
}

export const ContactButton = ({
  title,
  linkTo,
  element,
}: ContactButtonProps): JSX.Element => {
  return (
    <a
      href={linkTo}
      className="block h-12 w-36 md:w-40 md:h-14"
      target="_blank"
      aria-label={title}
    >
      <div className="flex items-center h-full rounded-lg shadow justify-evenly bg-primary hover:shadow-lg hover:bg-blue-400 active:bg-blue-300">
        {element}
        <span>{title}</span>
      </div>
    </a>
  )
}
