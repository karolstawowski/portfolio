import { SectionTitle } from './SectionTitle'

export const About = (): JSX.Element => {
  return (
    <div
      className="px-6 py-8 my-8 text-lg md:grid-cols-5 md:grid bg-sky-200 xs:px-12 md:px-20 lg:px-28 xl:px-36 2xl:px-72"
      id="about"
    >
      <div className="md:col-span-3 md:mr-8">
        <SectionTitle>About me</SectionTitle>
        <p className="py-4">
          Hi, my name is <b>Karol</b>. As a junior frontend developer, I have
          honed my programming skills for the past 7 years, acquiring expertise
          in multiple programming languages. My passion for creating beautiful,
          user-friendly, and responsive web applications has driven me to make
          projects in various areas of the IT industry.
        </p>
      </div>
      <div className="mt-2 ml-auto rounded-md h-80 xs:h-56 md:h-80 2xl:h-72 bg-console-bg lg:w-11/12 md:ml-0 md:col-span-2">
        <div className="flex items-center justify-end w-full h-8 gap-1 px-1 rounded-t-md bg-console-menu-bar">
          <div className="w-5 h-5 rounded-full bg-console-action"></div>
          <div className="w-5 h-5 rounded-full bg-console-action"></div>
          <div className="w-5 h-5 rounded-full bg-console-exit"></div>
        </div>
        <p className="mx-6 my-4 text-slate-200">
          Alongside my programming experience, I am pursuing a degree in
          computer science to supplement my practical knowledge with theoretical
          understanding.
        </p>
      </div>
    </div>
  )
}
