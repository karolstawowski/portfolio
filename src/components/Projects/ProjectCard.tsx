import { Play } from '../../icons/Play'
import { Technology } from '../../utils/technologiesList'
import { LivePreviewButton } from './LivePreviewButton'
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
    <div className="min-w-[228px] box-content ease-in-out duration-300 transition-shadow p-6 xs:p-8 bg-blue-100 rounded-lg flex flex-col shadow">
      <h4 className="w-full text-xl font-semibold">{name}</h4>
      <div className="w-10 h-[2px] bg-accent mt-2" />
      <img
        src={`./assets/projects/${imgName}.png`}
        className="object-cover w-full my-4 rounded-md"
        height="236"
        width="420"
        alt={name}
      />
      <p className="mb-6 text-black text-md">{description}</p>
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
        {livePreviewUrl ? (
          <LivePreviewButton name={name} url={livePreviewUrl} />
        ) : null}
        {repositoryUrl ? (
          <a
            href={repositoryUrl}
            className="flex items-center justify-center w-10 h-10 bg-white rounded-lg outline outline-2 outline-blue-600 hover:outline-blue-300 active:outline-blue-400"
            target="_blank"
            aria-label={`Github repository of ${name}`}
          >
            <img
              src="./assets/github.svg"
              height="32"
              width="32"
              className="w-8 h-8"
              alt={`Github repository of ${name}`}
            />
          </a>
        ) : null}
      </div>
    </div>
  )
}
