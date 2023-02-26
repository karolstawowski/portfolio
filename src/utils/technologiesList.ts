export type Technology = {
  name: string
  imageName: string
}

export const technologiesList: Array<Technology> = [
  { name: 'JavaScript', imageName: 'js' },
  { name: 'TypeScript', imageName: 'ts' },
  { name: 'React.js', imageName: 'reactjs' },
  { name: 'HTML5', imageName: 'html5' },
  { name: 'CSS3', imageName: 'css3' },
  { name: 'SASS', imageName: 'sass' },
  { name: 'Tailwind', imageName: 'tailwind' },
  { name: 'MaterialUI', imageName: 'materialui' },
  { name: 'RTL', imageName: 'rtl' },
  { name: 'Node.js', imageName: 'nodejs' },
  { name: 'Express.js', imageName: 'expressjs' },
  { name: 'tRPC', imageName: 'trpc' },
  { name: 'Git', imageName: 'git' },
  { name: 'Docker', imageName: 'docker' },
  { name: 'Vite', imageName: 'vite' },
  { name: 'Remix', imageName: 'remix' },
  { name: 'PostgreSQL', imageName: 'postgresql' },
  { name: 'MySQL', imageName: 'mysql' },
  { name: 'Python', imageName: 'python' },
  {
    name: 'C#',
    imageName: 'c-sharp',
  },
]

export const iconsList: Array<Technology> = technologiesList.concat([
  { name: 'Tensorflow', imageName: 'tensorflow' },
])
