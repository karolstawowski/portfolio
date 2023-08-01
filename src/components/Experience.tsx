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
    company:
      'Bachelor of Computer Science, Databases and Data Engineering specialisation',
    since: new Date(2020, 9),
    to: new Date(2023, 6),
  },
]

export const Experience = (): JSX.Element => {
  return (
    <div
      id="experience"
      className="grid-flow-col gap-6 py-8 my-8 md:grid md:grid-cols-2"
    >
      <div>
        <SectionTitle>Experience</SectionTitle>
        {experienceList.map((experience) => (
          <ExperienceListElement
            key={experience.id}
            id={experience.id}
            company={experience.company}
            position={experience.position}
            since={experience.since}
            to={experience.to}
          />
        ))}
      </div>
      <div>
        <SectionTitle>Education</SectionTitle>
        {educationList.map((experience) => (
          <ExperienceListElement
            key={experience.id}
            id={experience.id}
            company={experience.company}
            position={experience.position}
            since={experience.since}
            to={experience.to}
          />
        ))}
      </div>
    </div>
  )
}
