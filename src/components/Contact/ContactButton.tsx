export type ContactButtonProps = {
  title: string
  linkTo: string
  element: JSX.Element
}

export const ContactButton = ({
  title,
  linkTo,
  element,
}: ContactButtonProps): JSX.Element => {
  return (
    <a
      href={linkTo}
      className="block h-12 w-36 md:w-40 md:h-14 hover:animate-up-illuminate text-background"
      target="_blank"
      aria-label={title}
    >
      <div className="flex items-center h-full px-4 rounded-lg gap-x-4 bg-primary hover:bg-accent hove">
        {element}
        <span>{title}</span>
      </div>
    </a>
  )
}
