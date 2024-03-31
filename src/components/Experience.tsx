import { educationList } from '../constants/education'
import { experienceList } from '../constants/experience'
import { ExperienceListElement } from './Experience/ExperienceListElement'
import { SectionTitle } from './SectionTitle'

export const Experience = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-11/12 xs:w-10/12 md:w-3/4 xl:w-9/12 2xl:w-8/12 max-w-8xl">
        <div
          id="experience"
          className="grid-flow-col gap-6 py-8 my-8 md:grid md:grid-cols-2"
        >
          <div>
            <SectionTitle>Experience</SectionTitle>
            {experienceList.map((experience) => (
              <ExperienceListElement key={experience.id} {...experience} />
            ))}
          </div>
          <div>
            <SectionTitle>Education</SectionTitle>
            {educationList.map((experience) => (
              <ExperienceListElement key={experience.id} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
