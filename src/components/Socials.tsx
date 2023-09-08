import { Github } from '../icons/Github'
import { Linkedin } from '../icons/Linkedin'
import { Send } from '../icons/Send'

export const Socials = (): JSX.Element => {
  return (
    <div className="flex gap-4">
      {contactButtons.map((contactButton) => (
        <a
          href={contactButton.linkTo}
          key={contactButton.title}
          target="_blank"
          aria-label={contactButton.title}
        >
          <span>{contactButton.element}</span>
        </a>
      ))}
    </div>
  )
}

const contactButtons: {
  title: string
  linkTo: string
  element: JSX.Element
}[] = [
  {
    title: 'LinkedIn',
    element: (
      <Linkedin width={32} height={32} className="hover:animate-twist" />
    ),
    linkTo: 'https://www.linkedin.com/in/karolstawowski/',
  },
  {
    title: 'Github',
    element: <Github width={32} height={32} className="hover:animate-twist" />,
    linkTo: 'https://github.com/karolstawowski',
  },
  {
    title: 'Email',
    element: <Send width={32} height={32} className="hover:animate-twist" />,
    linkTo: 'mailto:karol_stawowski@wp.pl',
  },
]
