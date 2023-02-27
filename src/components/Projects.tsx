import { projectsList } from '../utils/projectsList'
import { ProjectCard } from './Projects/ProjectCard'
import { SectionTitle } from './SectionTitle'

export const Projects = (): JSX.Element => {
  return (
    <div className="py-8 my-8 bg-sky-300" id="projects">
      <div className="px-6 xs:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-80">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid gap-4 mt-4 sm:gap-8 lg:grid-cols-2 md:gap-12 lg:gap-8 2xl:gap-12">
          {projectsList.map((project) => (
            <div className="flex justify-center" key={project.name}>
              <ProjectCard
                name={project.name}
                imgName={project.imageName}
                description={project.description}
                technologies={project.technologies}
                repositoryUrl={project.repositoryUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
