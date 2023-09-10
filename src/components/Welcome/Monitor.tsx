export const Monitor = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-64 sm:h-72 md:h-96 xl:h-[26rem] 2xl:h-[24rem] min-w-full">
      <div className="absolute w-[800px] h-[560px] scale-[.34] xs:scale-[.4] sm:scale-[.5] md:scale-[.6] xl:scale-[0.65] 2xl:scale-[0.7] 3xl:scale-[0.75]">
        <div className="relative bg-monitor-outer-border w-full h-[466px] flex justify-center rounded-md">
          <div className="absolute w-1 h-1 bg-gray-400 bottom-2 right-12" />
          <div className="bg-monitor-bg m-4 w-full h-[418px] box-border flex flex-wrap overflow-hidden glow">
            <div className="w-full h-4 border-b-2 border-b-monitor-inner-border" />
            <div className="h-[402px] w-4 border-r-2 border-r-monitor-inner-border" />
            <div className="h-[402px] w-28 border-r-2 border-r-monitor-inner-border bg-monitor-side-pannel p-3 [&>*]:h-2 [&>*>*]:h-1 [&>*>*]:bg-gray-200 [&>*]:relative">
              <div className="animate-monitor">
                <div className="w-16" />
              </div>
              <div className="animate-monitor">
                <div className="w-10" />
              </div>
              <div className="ml-1 animate-monitor">
                <div className="w-10" />
              </div>
              <div className="ml-1 animate-monitor">
                <div className="w-6" />
              </div>
              <div className="animate-monitor">
                <div className="w-8" />
              </div>
              <div className="animate-monitor">
                <div className="w-14" />
              </div>
              <div className="ml-1 animate-monitor">
                <div className="w-12" />
              </div>
              <div className="ml-2 animate-monitor">
                <div className="w-10" />
              </div>
              <div className="ml-2 animate-monitor">
                <div className="w-8" />
              </div>
              <div className="animate-monitor">
                <div className="w-12" />
              </div>
              <div className="animate-monitor">
                <div className="w-8" />
              </div>
              <div className="animate-monitor">
                <div className="w-10" />
              </div>
              <div className="animate-monitor">
                <div className="w-14" />
              </div>
            </div>
            <div className="h-[402px] my-4 mx-5 [&>*]:h-2 [&>*]:mb-3 [&>*>*]:mr-3 relative [&>*]:flex ">
              <div className="animate-monitor-self-1">
                <div className="w-12 bg-editor-red" />
                <div className="w-14 bg-editor-white" />
                <div className="w-10 bg-editor-red" />
                <div className="w-12 bg-editor-blue" />
              </div>
              <div className="mt-5 animate-monitor-self-1">
                <div className="w-12 bg-editor-red" />
                <div className="w-16 bg-editor-white" />
                <div className="w-10 bg-editor-red" />
                <div className="w-24 bg-editor-blue" />
              </div>
              <div className="mt-[60px] animate-monitor-self-2">
                <div className="w-8 bg-editor-red" />
                <div className="w-24 bg-editor-brown" />
                <div className="w-4 bg-editor-red" />
                <div className="w-2 bg-editor-blue" />
              </div>
              <div className="ml-4 mt-[80px] animate-monitor-self-2">
                <div className="w-20 bg-editor-white" />
                <div className="w-8 bg-editor-blue" />
              </div>
              <div className="mt-[100px] ml-4 animate-monitor-self-2">
                <div className="w-28 bg-editor-white" />
                <div className="w-8 bg-editor-blue" />
              </div>
              <div className="ml-4 mt-[120px] animate-monitor-self-2">
                <div className="w-16 bg-editor-white" />
                <div className="w-10 bg-editor-blue" />
              </div>
              <div className="w-2 mt-[140px] bg-editor-blue animate-monitor-self-2" />
              <div />
              <div className="mt-[160px] animate-monitor-self-3">
                <div className="w-28 bg-editor-red" />
                <div className="w-24 bg-editor-purple" />
                <div className="w-2 bg-editor-blue" />
                <div className="w-20 bg-editor-brown" />
                <div className="w-6 bg-editor-blue" />
              </div>
              <div className="mt-[180px] ml-4 animate-monitor-self-3">
                <div className="w-12 bg-editor-red" />
                <div className="w-2 bg-editor-green" />
              </div>
              <div className="ml-8 mt-[200px] animate-monitor-self-3">
                <div className="w-6 bg-editor-green" />
                <div className="w-32 bg-editor-blue" />
              </div>
              <div className="ml-12 mt-[220px] animate-monitor-self-3">
                <div className="w-8 bg-editor-green" />
                <div className="w-16 bg-editor-blue" />
                <div className="w-14 bg-editor-brown" />
                <div className="w-8 bg-editor-green" />
              </div>
              <div className="ml-12 mt-[240px] animate-monitor-self-3">
                <div className="w-8 bg-editor-green" />
                <div className="w-8 bg-editor-blue" />
                <div className="w-14 bg-editor-purple" />
                <div className="w-16 bg-editor-brown" />
                <div className="w-8 bg-editor-green" />
              </div>
              <div className="ml-8 mt-[260px] animate-monitor-self-3">
                <div className="w-6 bg-editor-green" />
                <div className="w-32 bg-editor-blue" />
              </div>
              <div className="ml-4 mt-[280px] animate-monitor-self-3">
                <div className="w-2 bg-editor-green" />
              </div>
              <div className="mt-[300px] animate-monitor-self-3">
                <div className="w-2 bg-editor-blue" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-16 h-24 m-auto bg-gradient-to-b from-[#19191A] to-monitor-stand" />
        <div className="h-4 m-auto rounded-t-lg w-96 bg-monitor-stand" />
      </div>
    </div>
  )
}
