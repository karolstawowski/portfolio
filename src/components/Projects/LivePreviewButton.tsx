import { Link } from '../../icons/Link'

type LivePreviewButtonProps = { url: string; name: string }

export const LivePreviewButton = ({
  url,
  name,
}: LivePreviewButtonProps): JSX.Element => {
  return (
    <a href={url} target="_blank" aria-label={`Live ${name} project preview`}>
      <span className="grid text-black rounded-md shadow-lg fill-current w-11 h-11 bg-button hover:bg-button-hover place-items-center">
        <Link width={28} height={28} />
      </span>
    </a>
  )
}
