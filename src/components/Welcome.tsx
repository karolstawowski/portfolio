import { MainText } from './Welcome/MainText'
import { Monitor } from './Welcome/Monitor'

export const Welcome = (): JSX.Element => {
  return (
    <>
      <div className="relative mt-12 xs:mt-14 md:mt-20 lg:mt-24 xl:mt-32">
        <MainText />
        <Monitor />
      </div>
    </>
  )
}
