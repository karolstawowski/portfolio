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
      className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-2xl outline outline-2 outline-secondary hover:outline-text"
      target="_blank"
      aria-label={`Github repository of ${name}`}
    >
      <Github width={32} height={32} />
    </a>
  )
}
