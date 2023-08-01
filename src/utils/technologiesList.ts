export type Technology = {
  name: string
  imageName: string
}

export const proficientTechnologies: Array<Technology> = [
  { name: 'TypeScript', imageName: 'ts' },
  { name: 'JavaScript', imageName: 'js' },
  { name: 'React.js', imageName: 'reactjs' },
  { name: 'HTML5', imageName: 'html5' },
  { name: 'CSS3', imageName: 'css3' },
  { name: 'Tailwind', imageName: 'tailwind' },
  { name: 'Prisma', imageName: 'prisma' },
  { name: 'MaterialUI', imageName: 'materialui' },
  { name: 'Remix', imageName: 'remix' },
  { name: 'RTL', imageName: 'rtl' },
  { name: 'Jest', imageName: 'jest' },
  { name: 'Vitest', imageName: 'vitest' },
  { name: 'Git', imageName: 'git' },
  { name: 'ESLint', imageName: 'eslint' },
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
  { name: 'Node.js', imageName: 'nodejs' },
  { name: 'Express.js', imageName: 'expressjs' },
  { name: 'React Router', imageName: 'react-router' },
  { name: 'tRPC', imageName: 'trpc' },
  { name: 'Next.js', imageName: 'nextjs' },
  { name: 'Docker', imageName: 'docker' },
  { name: 'Vite', imageName: 'vite' },
  { name: 'i18next', imageName: 'i18next' },
  { name: 'SASS', imageName: 'sass' },
  { name: 'Figma', imageName: 'figma' },
  { name: 'Python', imageName: 'python' },
  { name: 'PHP', imageName: 'php' },
  { name: 'Tensorflow', imageName: 'tensorflow' },
]

export const iconsList: Array<Technology> =
  proficientTechnologies.concat(familiarTechnologies)
