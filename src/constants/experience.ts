import { ExperienceListElementProps } from '../components/Experience/ExperienceListElement'

export const experienceList: Array<ExperienceListElementProps> = [
  {
    id: 1,
    position: 'Frontend developer',
    company: 'INELO Poland',
    since: new Date(2024, 1),
  },
  {
    id: 2,
    position: 'Full Stack Developer',
    company: 'Night Woods',
    since: new Date(2023, 3),
    to: new Date(2024, 0),
  },
  {
    id: 3,
    position: 'Frontend Developer',
    company: 'Night Woods',
    since: new Date(2022, 2),
    to: new Date(2022, 9),
  },
  {
    id: 4,
    position: 'Intern Junior Frontend Developer',
    company: 'Tom&Co',
    since: new Date(2021, 7),
    to: new Date(2021, 8),
  },
]
