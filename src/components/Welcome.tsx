import { Socials } from './Welcome/Socials'
import { MainText } from './Welcome/MainText'
import { Monitor } from './Welcome/Monitor'
import { Navbar } from './Welcome/NavigationBar'
import { ColorPalette } from './Welcome/ColorPalette'

export const Welcome = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className="w-11/12 h-full xs:w-10/12 md:w-3/4 xl:w-9/12 2xl:w-9/12">
        <div className="flex flex-col justify-around h-full pb-4 sm:pb-10">
          <Navbar />
          <div className="relative flex justify-center">
            <Monitor />
            <ColorPalette />
          </div>
          <div className="flex flex-col-reverse items-end justify-between gap-8 sm:flex-row">
            <Socials />
            <MainText />
          </div>
        </div>
      </div>
    </div>
  )
}
