import { Socials } from './Socials'
import { MainText } from './Welcome/MainText'
import { Monitor } from './Welcome/Monitor'

export const Welcome = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full h-[calc(100vh-112px)]">
      <div className="min-w-[330px] w-10/12 xs:w-10/12 md:w-3/4 xl:w-9/12 2xl:w-8/12 max-w-8xl h-full">
        <div className="flex flex-col justify-around h-full pb-16">
          <Monitor />
          <div className="flex items-end justify-between">
            <Socials />
            <MainText />
          </div>
        </div>
      </div>
    </div>
  )
}
