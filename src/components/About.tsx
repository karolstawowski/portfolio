import { Console } from './About/Console'
import { SectionTitle } from './SectionTitle'

export const About = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-11/12 px-4 rounded-lg xs:w-10/12 md:w-3/4 xl:w-9/12 2xl:w-8/12 max-w-8xl background-gradient xs:px-8">
        <div className="py-4 my-8 sm:py-8 md:grid-cols-5 md:grid" id="about">
          <div className="md:col-span-3 md:mr-24 2xl:mr-44 text-background">
            <SectionTitle>About me</SectionTitle>
            <p className="py-4 text-black md:text-lg">
              Hi, my name is <b>Karol</b>. As a frontend developer, I have
              sharpened my programming skills for the past{' '}
              <b>{new Date().getFullYear() - 2016} years</b> (
              {new Date().getFullYear() - 2020} years as a frontend developer),
              acquiring expertise in multiple programming languages. My passion
              for creating beautiful, user-friendly, and responsive web
              applications has driven me to make and participate in various
              projects.
            </p>
          </div>
          <Console />
        </div>
      </div>
    </div>
  )
}
