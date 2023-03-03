export type Technology = {
  name: string
  imageName: string
}

export const proficientTechnologies: Array<Technology> = [
  { name: 'JavaScript', imageName: 'js' },
  { name: 'TypeScript', imageName: 'ts' },
  { name: 'React.js', imageName: 'reactjs' },
  { name: 'HTML5', imageName: 'html5' },
  { name: 'CSS3', imageName: 'css3' },
  { name: 'Tailwind', imageName: 'tailwind' },
  { name: 'MaterialUI', imageName: 'materialui' },
  { name: 'RTL', imageName: 'rtl' },
  { name: 'Git', imageName: 'git' },
  { name: 'Remix', imageName: 'remix' },
  { name: 'PostgreSQL', imageName: 'postgresql' },
  { name: 'MySQL', imageName: 'mysql' },
  { name: 'MS SQL Server', imageName: 'microsoftsqlserver' },
  {
    name: 'C#',
    imageName: 'c-sharp',
  },
  { name: 'Power BI', imageName: 'powerbi' },
]

export const familiarTechnologies: Array<Technology> = [
  { name: 'SASS', imageName: 'sass' },
  { name: 'Jest', imageName: 'jest' },
  { name: 'Vitest', imageName: 'vitest' },
  { name: 'Node.js', imageName: 'nodejs' },
  { name: 'Express.js', imageName: 'expressjs' },
  { name: 'tRPC', imageName: 'trpc' },
  { name: 'Docker', imageName: 'docker' },
  { name: 'Vite', imageName: 'vite' },
  { name: 'Python', imageName: 'python' },
  { name: 'PHP', imageName: 'php' },
  { name: 'Tensorflow', imageName: 'tensorflow' },
  { name: 'R', imageName: 'r' },
]

export const iconsList: Array<Technology> =
  proficientTechnologies.concat(familiarTechnologies)
