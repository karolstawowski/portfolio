import { Console } from './About/Console'
import { SectionTitle } from './SectionTitle'

export const About = (): JSX.Element => {
  return (
    <div
      className="px-6 py-12 my-8 bg-primary md:grid-cols-5 md:grid xs:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-80"
      id="about"
    >
      <div className="md:col-span-3 md:mr-24 2xl:mr-44">
        <SectionTitle>About me</SectionTitle>
        <p className="py-4 text-black md:text-lg">
          Hi, my name is <b>Karol</b>. As a frontend developer, I have sharpened
          my programming skills for the past{' '}
          <b>{new Date().getFullYear() - 2016} years</b> (
          {new Date().getFullYear() - 2020} years as a frontend developer),
          acquiring expertise in multiple programming languages. My passion for
          creating beautiful, user-friendly, and responsive web applications has
          driven me to make and participate in various projects.
        </p>
      </div>
      <Console />
    </div>
  )
}
