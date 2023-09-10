import {
  ExperienceListElement,
  ExperienceListElementProps,
} from './Experience/ExperienceListElement'
import { SectionTitle } from './SectionTitle'

const experienceList: Array<ExperienceListElementProps> = [
  {
    id: 1,
    position: 'Full Stack Developer',
    company: 'Night Woods',
    since: new Date(2023, 3),
  },
  {
    id: 2,
    position: 'Frontend Developer',
    company: 'Night Woods',
    since: new Date(2022, 2),
    to: new Date(2022, 9),
  },
  {
    id: 3,
    position: 'Trainee Junior Frontend Developer',
    company: 'Tom&Co',
    since: new Date(2021, 7),
    to: new Date(2021, 8),
  },
]

const educationList: Array<ExperienceListElementProps> = [
  {
    id: 4,
    position: 'University of Economics in Katowice',
    company: 'Bachelor of Computer Science',
    more: 'Databases and Data Engineering specialisation',
    since: new Date(2020, 9),
    to: new Date(2023, 6),
  },
]

export const Experience = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className=" w-11/12 xs:w-10/12 md:w-3/4 xl:w-9/12 2xl:w-8/12 max-w-8xl">
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
