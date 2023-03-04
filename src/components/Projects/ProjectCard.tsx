import { Technology } from '../../utils/technologiesList'
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
    <div className="min-w-[228px] box-content  ease-in-out duration-300 transition-shadow p-6 xs:p-8 md:p-12 bg-sky-100 rounded-lg lg:w-[420px] flex flex-col shadow-md hover:shadow-2xl">
      <h4 className="w-full text-xl font-semibold">{name}</h4>
      <div className="w-10 h-[2px] bg-sky-600 mt-2" />
      <a href={livePreviewUrl} target="_blank">
        <img
          src={`./assets/projects/${imgName}.png`}
          className="object-cover w-full my-4 rounded-md shadow-md"
          height="236"
          width="420"
          alt={name}
        />
      </a>
      <p className="mb-4 text-md text-slate-800">{description}</p>
      <div className="flex justify-between w-full mt-auto justify-self-end">
        <div
          className={`flex flex-wrap gap-1 ${
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

        {repositoryUrl ? (
          <div className="flex items-center justify-center w-10 h-10 ml-auto rounded-lg bg-sky-100">
            <a
              href={repositoryUrl}
              className="flex items-center justify-center w-full h-full"
              target="_blank"
            >
              <img
                src="./assets/github.svg"
                height="32"
                width="32"
                className="w-8 h-8"
                alt={`Github repository of ${name}`}
              />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}
