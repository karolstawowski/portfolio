import { ArrowNarrowRight } from '../../icons/ArrowNarrowRight'

export const Console = (): JSX.Element => {
  return (
    <div className="mt-2 ml-auto bg-gray-700 rounded-md font-console md:mt-0 h-80 xs:h-72 md:h-96 md:ml-0 lg:h-72 2xl:h-64 md:col-span-2">
      <div className="flex items-center justify-end w-full h-8 gap-1 px-2 bg-gray-500 rounded-t-md">
        <div className="w-4 h-4 bg-gray-400 rounded-full" />
        <div className="w-4 h-4 bg-gray-400 rounded-full" />
        <div className="w-4 h-4 bg-gray-200 rounded-full" />
      </div>
      <div className="mx-6 my-4 text-base text-gray-200">
        <span className="relative z-20 inline-block pl-3 pr-2 leading-5 bg-blue-600">
          <div className="absolute right-[-8px] w-0 h-0 border-l-[8px] border-l-blue-600 border-y-[10px] border-y-transparent" />
          Karol@PC
        </span>
        <span className="relative z-10 inline-block pl-4 pr-2 leading-5 bg-green-600 xs:-ml-2 xs:pl-6">
          <div className="top-0 absolute right-[-8px] w-0 h-0 border-l-[8px] border-green-600 border-y-[10px] border-y-transparent" />
          main
        </span>
        <span className="relative inline-block pl-5 pr-2 mr-3 -ml-1 leading-5 bg-red-500">
          <div className="top-0 absolute right-[-8px] w-0 h-0 border-l-[8px] border-red-500 border-y-[10px] border-y-transparent" />
          ~/src
        </span>
        <span className="inline-block leading-5 break-all">
          <span className="mr-[6px] text-green-400">
            <ArrowNarrowRight className="inline" width={20} height={20} />
          </span>
          Beyond my programming experience, I completed my bachelor's degree{' '}
          <span className="text-blue-400">
            University of Economics in Katowice
          </span>{' '}
          in the field of{' '}
          <span className="text-amber-400">Computer Science</span> with
          specialization in{' '}
          <span className="text-purple-400">
            Databases and Data Engineering
          </span>
          <span className="animate-underscore">_</span>
        </span>
      </div>
    </div>
  )
}
