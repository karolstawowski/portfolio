import { technologiesList } from '../utils/technologiesList'
import { SectionTitle } from './SectionTitle'
import { TechButton } from './Technologies/TechButton'

export const Technologies = (): JSX.Element => {
  return (
    <div className="py-8 my-8" id="technologies">
      <SectionTitle>Technologies</SectionTitle>
      <p className="py-4">
        With my dedication to staying current with the latest frontend
        technologies, I am eager to apply my skills to exciting projects in the
        field of frontend development.
      </p>
      <div className="flex flex-wrap gap-3">
        {technologiesList.map((technology) => (
          <TechButton
            key={technology.name}
            name={technology.name}
            imageName={technology.imageName}
          />
        ))}
      </div>
    </div>
  )
}
