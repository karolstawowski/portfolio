import { Link } from './NavigationBar/Link'

export const Navbar = (): JSX.Element => {
  return (
    <div className="flex items-baseline justify-center w-full h-12 rounded-lg text-text sm:justify-between">
      <h1 className="h-8 my-2 text-2xl select-none ">{'<KarolStawowski/>'}</h1>
      <div className="hidden text-lg lg:block">
        {linkTitles.map((title) => (
          <Link key={title} title={title} />
        ))}
      </div>
    </div>
  )
}

const linkTitles: Array<string> = [
  'About',
  'Technologies',
  'Projects',
  'Experience',
  'Contact',
]
