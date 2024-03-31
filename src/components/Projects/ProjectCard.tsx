import { Technology } from '../../constants/technologies'
import { LivePreviewButton } from './LivePreviewButton'
import { RepositoryButton } from './RepositoryButton'
import { TechIcon } from './TechIcon'

type ProjectCardProps = {
  name: string
  imgName: string
  technologies: Technology[]
  description: string
  repositoryUrl?: string
  livePreviewUrl?: string
}

export const ProjectCard = ({
  name,
  imgName,
  description,
  technologies,
  repositoryUrl,
  livePreviewUrl,
}: ProjectCardProps): JSX.Element => {
  return (
    <div className="box-content flex flex-col p-6 transition-shadow duration-300 ease-in-out rounded-lg shadow text-background xs:p-8 background-gradient">
      <h4 className="w-full text-xl font-semibold">{name}</h4>
      <div className="w-10 h-[2px] bg-button mt-2" />
      <img
        src={`./assets/projects/${imgName}.png`}
        className="object-cover w-full my-4 rounded-md"
        height="236"
        width="420"
        alt={name}
      />
      <p className="mb-6 text-md">{description}</p>
      <div className="flex justify-between w-full mt-auto justify-self-end">
        <div
          className={`flex flex-wrap gap-x-1 gap-y-3 ${
            repositoryUrl ? 'w-3/4' : 'w-full'
          }`}
        >
          {technologies.map((technology) => (
            <TechIcon
              key={technology.name}
              name={technology.name}
              imageName={technology.imageName}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {livePreviewUrl && (
            <LivePreviewButton name={name} url={livePreviewUrl} />
          )}
          {repositoryUrl && (
            <RepositoryButton name={name} url={repositoryUrl} key={name} />
          )}
        </div>
      </div>
    </div>
  )
}
