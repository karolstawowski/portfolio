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
    <div className="min-w-[228px] box-content ease-in-out duration-300 transition-shadow p-6 xs:p-8 md:p-10 bg-sky-100 rounded-lg lg:w-[420px] flex flex-col shadow-md hover:shadow-2xl">
      <h4 className="w-full text-xl font-semibold">{name}</h4>
      <div className="w-10 h-[2px] bg-sky-600 mt-2" />
      <img
        src={`./assets/projects/${imgName}.png`}
        className="object-cover w-full my-4 rounded-md"
        height="236"
        width="420"
        alt={name}
      />
      <p className="mb-6 text-md text-slate-800">{description}</p>
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
          <a
            href={livePreviewUrl}
            target="_blank"
            className="relative flex flex-wrap mr-1 group"
            aria-label={`Live ${name} project preview`}
          >
            <span className="block p-1 text-green-600 bg-green-300 rounded-md shadow-md fill-current hover:shadow-[0_4px_16px_-1px_rgba(0,0,0,0.2)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="absolute z-20 px-2 py-1 m-4 mx-auto text-xs text-center transition-opacity -translate-x-1/2 translate-y-8 rounded-md opacity-0 text-sky-100 bg-sky-900 group-hover:opacity-100 left-1/2">
              Live preview
            </span>
          </a>
        ) : null}
        {repositoryUrl ? (
          <a
            href={repositoryUrl}
            className="relative group flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-md hover:shadow-[0_4px_16px_-1px_rgba(0,0,0,0.2)]"
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
            <span className="absolute z-20 px-2 py-1 m-4 mx-auto text-xs transition-opacity -translate-x-1/2 translate-y-10 rounded-md opacity-0 text-sky-100 bg-sky-900 group-hover:opacity-100 left-1/2">
              Github
            </span>
          </a>
        ) : null}
      </div>
    </div>
  )
}
