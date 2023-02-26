import { Link } from './NavigationBar/Link'

export const Navbar = (): JSX.Element => {
  return (
    <div className="items-baseline justify-between hidden h-12 px-4 mx-4 my-8 rounded-lg shadow-lg lg:px-8 lg:mx-12 bg-slate-100 md:flex ">
      <h1 className="h-8 my-2 text-2xl select-none">{'<KarolStawowski/>'}</h1>
      <div className="text-lg">
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
