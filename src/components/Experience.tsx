import {
  ExperienceListElement,
  ExperienceListElementProps,
} from './Experience/ExperienceListElement'
import { SectionTitle } from './SectionTitle'

const experienceList: Array<ExperienceListElementProps> = [
  {
    position: 'Frontend Developer',
    company: 'Night Woods, Wrocław',
    since: new Date(2022, 3),
    to: new Date(2022, 10),
  },
  {
    position: 'Trainee Junior Frontend Developer',
    company: 'Tom&Co, Katowice',
    since: new Date(2021, 8),
    to: new Date(2021, 9),
  },
]

const educationList: Array<ExperienceListElementProps> = [
  {
    position: 'University of Economics in Katowice',
    company: 'Computer Science, Databases and Data Engineering specialisation',
    since: new Date(2020, 10),
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
            key={experience.company}
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
            key={experience.company}
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
