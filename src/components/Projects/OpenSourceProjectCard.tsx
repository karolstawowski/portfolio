import { StarFilled } from '../../icons/StarFilled'
import { OpenSourceProjectEntry } from '../../constants/projects'
import { RepositoryButton } from './RepositoryButton'

type OpenSourceProjectCardProps = {
  project: OpenSourceProjectEntry
}

export const OpenSourceProjectCard = ({
  project,
}: OpenSourceProjectCardProps): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-between w-full h-full gap-1 p-4 rounded-md shadow text-background bg-primary xl:h-[6.5rem]">
      <h5 className="text-lg">
        <span>{project.name}</span>/
        <span className="text-sm">{project.author}</span>
      </h5>
      <p className="flex items-baseline gap-1">
        <span className="text-yellow-500">
          <StarFilled width={16} height={16} />
        </span>
        <span>
          {project.stars.toLocaleString('en', {
            notation: 'compact',
            maximumFractionDigits: 1,
          })}
        </span>
      </p>
      <div className="absolute bottom-4 right-4">
        <RepositoryButton name={project.name} url={project.repositoryUrl} />
      </div>
    </div>
  )
}
