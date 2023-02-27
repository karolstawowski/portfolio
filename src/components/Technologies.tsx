import {
  familiarTechnologies,
  proficientTechnologies,
} from '../utils/technologiesList'
import { SectionTitle } from './SectionTitle'
import { TechButton } from './Technologies/TechButton'

export const Technologies = (): JSX.Element => {
  return (
    <div className="py-8 my-8" id="technologies">
      <SectionTitle>Technologies</SectionTitle>
      <div className="grid md:grid-cols-2 gap-y-6 md:gap-y-0 md:gap-x-8">
        <p className="py-4">
          With my dedication to staying current with the latest frontend
          technologies, I am eager to apply my skills to exciting projects in
          the field of mainly - but not only - frontend development.
        </p>
        <div />
        <div>
          <span className="block mb-3 font-semibold">
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
          <span className="block mb-3 font-semibold">
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
  )
}
