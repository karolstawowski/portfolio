import {
  familiarTechnologies,
  proficientTechnologies,
} from '../constants/technologies'
import { SectionTitle } from './SectionTitle'
import { TechButton } from './Technologies/TechButton'

export const Technologies = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-11/12 xs:w-10/12 md:w-3/4 xl:w-9/12 2xl:w-8/12 max-w-8xl">
        <div className="py-8 my-8" id="technologies">
          <SectionTitle>Technologies</SectionTitle>
          <div className="grid mt-8 md:grid-cols-2 gap-y-6 md:gap-y-0 md:gap-x-8">
            <div>
              <span className="block mb-3 text-lg font-medium">
                Proficient in
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
              <span className="block mb-3 text-lg font-medium">
                Familiar with
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
