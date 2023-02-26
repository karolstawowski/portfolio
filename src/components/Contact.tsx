import { ContactButton } from './Contact/ContactButton'

const contactButtons: { title: string; linkTo: string; imgName: string }[] = [
  {
    title: 'LinkedIn',
    imgName: 'linkedin',
    linkTo: 'https://www.linkedin.com/in/karolstawowski/',
  },
  { title: 'Email', imgName: 'email', linkTo: 'mailto:karol_stawowski@wp.pl' },
]

export const Contact = (): JSX.Element => {
  return (
    <div className="pb-4 my-8" id="contact">
      <div className="flex flex-wrap justify-center gap-8 my-8">
        <h6 className="w-full text-xl font-bold text-center">
          Feel free to contact me!
        </h6>
        <div className="flex gap-4 sm:gap-10 md:gap-16 xl:gap-20">
          {contactButtons.map((contact) => (
            <ContactButton
              key={contact.title}
              title={contact.title}
              imgName={contact.imgName}
              linkTo={contact.linkTo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
