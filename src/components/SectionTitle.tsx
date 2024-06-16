import { PropsWithChildren } from 'react'

type SectionTitleProps = PropsWithChildren

export const SectionTitle = ({ children }: SectionTitleProps): JSX.Element => {
  return <h3 className="text-2xl font-semibold">{children}</h3>
}
