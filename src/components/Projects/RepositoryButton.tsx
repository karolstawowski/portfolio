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
      className="flex items-center justify-center w-10 h-10 bg-white rounded-lg outline outline-2 outline-orange-400 hover:outline-orange-300 active:outline-orange-200"
      target="_blank"
      aria-label={`Github repository of ${name}`}
    >
      <img
        src="./assets/github.svg"
        alt="Github"
        height={32}
        width={32}
        className=""
      />
    </a>
  )
}
