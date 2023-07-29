import { Play } from '../../icons/Play'

type LivePreviewButtonProps = { url: string; name: string }

export const LivePreviewButton = ({
  url,
  name,
}: LivePreviewButtonProps): JSX.Element => {
  return (
    <a
      href={url}
      target="_blank"
      className="mr-2"
      aria-label={`Live ${name} project preview`}
    >
      <span className="block p-1 text-green-600 bg-green-200 rounded-md fill-current outline outline-2 outline-green-600 hover:outline-green-300 active:outline-green-400">
        <Play />
      </span>
    </a>
  )
}