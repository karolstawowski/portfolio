import { Github } from '../../icons/Github'

type RepositoryButtonProps = {
  name: string
  url: string
}

export const RepositoryButton = ({
  name,
  url,
}: RepositoryButtonProps): JSX.Element => {
  return (
    <a
      href={url}
      className="grid rounded-lg shadow-lg place-items-center w-11 h-11 bg-button hover:bg-button-hover"
      target="_blank"
      aria-label={`Github repository of ${name}`}
    >
      <Github width={28} height={28} />
    </a>
  )
}
