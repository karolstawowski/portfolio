import { FC, SVGProps } from 'react'

export const ArrowNarrowRight: FC<SVGProps<SVGSVGElement>> = ({
  ...props
}): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-narrow-right"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l14 0"></path>
      <path d="M15 16l4 -4"></path>
      <path d="M15 8l4 4"></path>
    </svg>
  )
}
