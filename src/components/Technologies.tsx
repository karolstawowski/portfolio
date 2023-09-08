import {
  familiarTechnologies,
  proficientTechnologies,
} from '../utils/technologiesList'
import { SectionTitle } from './SectionTitle'
import { TechButton } from './Technologies/TechButton'

export const Technologies = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="min-w[330px] w-10/12 xs:w-10/12 md:w-3/4 xl:w-9/12 2xl:w-8/12 max-w-8xl">
        <div className="py-8 my-8" id="technologies">
          <SectionTitle>Technologies</SectionTitle>
          <div className="grid md:grid-cols-2 gap-y-6 md:gap-y-0 md:gap-x-8">
            <p className="py-4 md:text-lg">
              With my dedication to staying current with the latest frontend
              technologies, I am eager to apply my skills to exciting projects
              in the field of mainly - but not only - frontend development.
            </p>
            <div className="hidden md:block" />
            <div>
              <span className="block mb-3 text-lg font-semibold">
                Proficient in technologies:
              </span>
              <div className="flex flex-wrap gap-3">
                {proficientTechnologies.map((technology) => (
                  <TechButton
                    key={technology.name}
                    name={technology.name}
                    imageName={technology.imageName}
                  />
                ))}
              </div>
            </div>
            <div>
              <span className="block mb-3 text-lg font-semibold">
                Familiar with technologies:
              </span>
              <div className="flex flex-wrap gap-3">
                {familiarTechnologies.map((technology) => (
                  <TechButton
                    key={technology.name}
                    name={technology.name}
                    imageName={technology.imageName}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
