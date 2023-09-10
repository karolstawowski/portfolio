import { openSourceProjectsList, projectsList } from '../utils/projectsList'
import { OpenSourceProjectCard } from './Projects/OpenSourceProjectCard'
import { ProjectCard } from './Projects/ProjectCard'
import { SectionTitle } from './SectionTitle'

export const Projects = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="w-11/12 px-4 rounded-lg xs:w-10/12 md:w-3/4 xl:w-9/12 2xl:w-8/12 max-w-8xl bg-secondary xs:px-8">
        <div className="flex flex-col gap-16 py-4 sm:py-8 " id="projects">
          <div className="flex flex-col gap-6">
            <div className="flex items-center w-full gap-4">
              <div className="flex-auto h-[2px] bg-accent" />
              <SectionTitle>Selected projects</SectionTitle>
              <div className="flex-auto h-[2px] bg-accent" />
            </div>
            <div className="grid gap-4 sm:gap-8 lg:grid-cols-2 3xl:grid-cols-3 lg:gap-6 2xl:gap-8">
              {projectsList.map((project) => (
                <div
                  className="flex even:justify-end odd:justify-start"
                  key={project.name}
                >
                  <ProjectCard
                    name={project.name}
                    imgName={project.imageName}
                    description={project.description}
                    technologies={project.technologies}
                    repositoryUrl={project.repositoryUrl}
                    livePreviewUrl={project.livePreviewUrl}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center w-full gap-4 mt-8">
              <div className="flex-auto h-[2px] bg-accent" />
              <SectionTitle>
                Open source projects I participated in
              </SectionTitle>
              <div className="flex-auto h-[2px] bg-accent" />
            </div>
            <div className="flex flex-col gap-2 rounded-md lg:gap-x-4 lg:grid md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 lg:flex-row">
              {openSourceProjectsList.map((project) => (
                <OpenSourceProjectCard
                  key={project.repositoryUrl}
                  project={project}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
