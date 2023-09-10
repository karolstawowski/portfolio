import { Github } from '../icons/Github'
import { Linkedin } from '../icons/Linkedin'
import { Send } from '../icons/Send'
import { ContactButton } from './Contact/ContactButton'

const contactButtons: {
  title: string
  linkTo: string
  element: JSX.Element
}[] = [
  {
    title: 'LinkedIn',
    element: <Linkedin width={32} height={32} />,
    linkTo: 'https://www.linkedin.com/in/karolstawowski/',
  },
  {
    title: 'Github',
    element: <Github width={32} height={32} />,
    linkTo: 'https://github.com/karolstawowski',
  },
  {
    title: 'Email',
    element: <Send width={32} height={32} />,
    linkTo: 'mailto:karol_stawowski@wp.pl',
  },
]

export const Contact = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className=" w-11/12 xs:w-10/12 md:w-3/4 xl:w-9/12 2xl:w-8/12 max-w-8xl">
        <div className="pb-4 my-8" id="contact">
          <div className="flex flex-wrap justify-center gap-8 my-8">
            <h6 className="w-full text-xl font-bold text-center">
              Feel free to contact me!
            </h6>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-10 md:gap-16 xl:gap-20">
              {contactButtons.map((contact) => (
                <ContactButton
                  key={contact.title}
                  title={contact.title}
                  element={contact.element}
                  linkTo={contact.linkTo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
