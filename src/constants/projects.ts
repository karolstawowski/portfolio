import { iconsList, Technology } from './technologies'

type ProjectEntry = {
  name: string
  imageName: string
  technologies: Technology[]
  description: string
  repositoryUrl?: string
  livePreviewUrl?: string
}

export type OpenSourceProjectEntry = {
  name: string
  author: string
  stars: number
  repositoryUrl: string
}

const filterIcons = (
  iconNames: Array<string>,
  sourceIconsList: Technology[]
): Technology[] => {
  return sourceIconsList.filter((el) => iconNames.includes(el.name))
}

export const projectsList: ProjectEntry[] = [
  {
    name: 'Formula 1 Standings Website',
    imageName: 'formula1',
    description:
      'Web application presenting official Formula 1 driver and team standings. Application displays informations about previous and upcoming F1 races. Written fully in pure JavaScript. Uses external APIs.',
    technologies: filterIcons(['JavaScript', 'SASS', 'Vite'], iconsList),
    repositoryUrl:
      'https://github.com/karolstawowski/Formula_1_Standings_Website',
    livePreviewUrl:
      'https://karolstawowski.github.io/Formula_1_Standings_Website/',
  },
  {
    name: 'Zefir',
    imageName: 'weather_station',
    description:
      'Air quality station based on Raspberry Pi 4B with integrated frontend, backend and database server. It measures, stores and presents air condition parameters. Measuring unit contains of various air quality sensors.',
    technologies: filterIcons(
      [
        'React.js',
        'TypeScript',
        'Tailwind',
        'RTL',
        'Vitest',
        'Node.js',
        'Express.js',
        'tRPC',
        'PostgreSQL',
        'Vite',
        'i18next',
        'React Router',
        'Docker',
      ],
      iconsList
    ),
  },

  {
    name: 'OxiZip',
    imageName: 'oxizip',
    description:
      'A file archiver for Windows operating system. Program allows you to create and unpack ZIP archives. Created with .NET Windows Forms framework.',
    technologies: filterIcons(['C#'], iconsList),
    repositoryUrl: 'https://github.com/karolstawowski/OxiZip',
  },
  {
    name: 'EuroSAT',
    imageName: 'eurosat',
    description:
      'Set of neural networks to perform satelitte image land cover classification. Sentinel-2 satelitte images as training dataset. Best accuracy: DenseNet121 - 95,30%',
    technologies: filterIcons(['Tensorflow', 'Python', 'Keras'], iconsList),
    repositoryUrl: 'https://github.com/karolstawowski/EuroSAT',
  },
  {
    name: 'MinesweeperTS',
    imageName: 'minesweeper',
    description:
      'React and TypeScript implementation of popular old-school single person game Minesweeper. The player must uncover a grid of tiles, some of which contain mines.',
    technologies: filterIcons(
      ['React.js', 'TypeScript', 'Tailwind', 'Vite'],
      iconsList
    ),
    repositoryUrl: 'https://github.com/karolstawowski/MinesweeperTS',
    livePreviewUrl: 'https://karolstawowski.github.io/MinesweeperTS',
  },
  {
    name: 'False Bravery',
    imageName: 'false_bravery',
    description:
      'A Discord Bot for League of Legends players which creates images with random champion, summoner spells, items and skill orders - then sends it to the selected Discord channel.',
    technologies: filterIcons(['Python'], iconsList),
    repositoryUrl: 'https://github.com/karolstawowski/false_bravery',
  },
]

export const openSourceProjectsList: OpenSourceProjectEntry[] = [
  {
    name: 'storybook',
    author: 'storybookjs',
    repositoryUrl: 'https://github.com/storybookjs/storybook/pull/25931',
    stars: 82500,
  },
  {
    name: 'grafana',
    author: 'grafana',
    repositoryUrl: 'https://github.com/grafana/grafana/pull/72175',
    stars: 60000,
  },
  {
    name: 'tldraw',
    author: 'tldraw',
    repositoryUrl: 'https://github.com/tldraw/tldraw/pull/1143',
    stars: 32100,
  },
  {
    name: 'vitest',
    author: 'vitest-dev',
    repositoryUrl: 'https://github.com/vitest-dev/vitest/pull/2948',
    stars: 11600,
  },
  {
    name: 'DreamBerd',
    author: 'TodePond',
    repositoryUrl: 'https://github.com/TodePond/nDreamBerd/pull/48',
    stars: 9600,
  },
  {
    name: 'particle-life-app',
    author: 'tom-mohr',
    repositoryUrl: 'https://github.com/tom-mohr/particle-life-app/pull/16',
    stars: 685,
  },
]
