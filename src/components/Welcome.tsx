import { Socials } from './Welcome/Socials'
import { MainText } from './Welcome/MainText'
import { Monitor } from './Welcome/Monitor'

export const Welcome = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full h-[calc(100vh-112px)]">
      <div className="w-11/12 h-full xs:w-10/12 md:w-3/4 xl:w-9/12 2xl:w-8/12 max-w-8xl">
        <div className="flex flex-col justify-around h-full pb-4 sm:pb-10">
          <Monitor />
          <div className="flex flex-col-reverse items-end justify-between gap-8 sm:flex-row">
            <Socials />
            <MainText />
          </div>
        </div>
      </div>
    </div>
  )
}
