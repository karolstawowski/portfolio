import { SectionTitle } from './SectionTitle'

export const About = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-11/12 px-4 rounded-lg xs:w-10/12 md:w-3/4 xl:w-9/12 2xl:w-8/12 max-w-8xl background-gradient xs:px-8">
        <div
          className="py-10 text-background md:py-12 xl:px-4 2xl:px-8"
          id="about"
        >
          <SectionTitle>About me</SectionTitle>
          <div className="py-4 leading-7 whitespace-pre-wrap md:grid-cols-2 md:grid md:gap-x-16 lg:gap-x-20 2xl:gap-x-24">
            <p>
              Hi, my name is <b>Karol</b>. As a software developer, I have been
              sharpening my programming skills for the past{' '}
              <span className="font-semibold">
                {new Date().getFullYear() - 2016} years
              </span>
              .{'\n\n'}The tools I specialize in are{' '}
              <span className="font-semibold text-black">React</span> and{' '}
              <span className="font-semibold text-black">TypeScript</span>
              {'. '}My passion for creating beautiful, user-friendly, and
              responsive web applications has driven me to make and participate
              in various projects.
            </p>
            <p>
              <span className="md:hidden">{'\n'}</span>My goal is to learn
              something new every day and improve my skills.{'\n\n'}To have
              knowledge in various fields of computer science, I am pursuing a
              master's degree at{' '}
              <span className="font-bold text-black">
                University of Economics in Katowice
              </span>{' '}
              majoring{' '}
              <span className="italic font-medium text-black">
                Computer Science
              </span>{' '}
              with specialization in{' '}
              <span className="italic font-medium text-black">
                Programming of Intelligent Systems
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
