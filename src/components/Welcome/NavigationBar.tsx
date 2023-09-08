import { Link } from './NavigationBar/Link'

export const Navbar = (): JSX.Element => {
  return (
    <div className="flex items-baseline justify-center w-[calc(100%-4rem)] h-12 mx-4 my-8 rounded-lg sm:justify-between sm:px-8 sm:mx-8 lg:mx-12 bg-slate-100">
      <h1 className="h-8 my-2 text-2xl select-none">{'<KarolStawowski/>'}</h1>
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
