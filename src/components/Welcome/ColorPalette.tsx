const colorPalette = ['#00ABBD', '#0C2F3B', '#3CB0D7', '#030A0D']

export const ColorPalette = (): JSX.Element => {
  const bgColor = {
    '#00ABBD': 'bg-[#00ABBD]',
    '#0C2F3B': 'bg-[#0C2F3B]',
    '#3CB0D7': 'bg-[#3CB0D7]',
    '#030A0D': 'bg-[#030A0D]',
  }

  return (
    <div className="absolute top-0 right-0 flex-col items-end hidden gap-3 lg:flex">
      {colorPalette.map((color) => (
        <div className="flex items-center gap-3">
          <p className="font-extralight opacity-80">{color}</p>
          <div
            className={`${
              bgColor[color as keyof typeof bgColor]
            } w-8 h-6 rounded outline outline-text outline-2 outline-offset-1`}
          ></div>
        </div>
      ))}
    </div>
  )
}
