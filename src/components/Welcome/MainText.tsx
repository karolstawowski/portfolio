export const MainText = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-2 opacity-0 animate-fade-in-from-up">
      <h1 className="text-3xl text-right xs:text-4xl md:text-5xl lg:text-6xl">
        Hi, I'm Karol
      </h1>
      <h2 className="text-xl text-right">Frontend Developer</h2>
      <h3 className="text-xl text-right">Software Engineer</h3>
      <h3 className="text-right">Based in Katowice, Poland</h3>
      <h2 className="hidden mt-6 text-xl text-right xs:text-2xl md:text-3xl lg:text-4xl xs:mt-12 md:mt-16">
        Karol Stawowski
      </h2>
    </div>
  )
}
