const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export type ExperienceListElementProps = {
  id: number
  position: string
  company: string
  more?: string
  since: Date
  to?: Date
}

export const ExperienceListElement = ({
  company,
  position,
  more,
  since,
  to,
}: ExperienceListElementProps): JSX.Element => {
  const startDate =
    monthNames[since.getMonth()] + ' ' + since.getFullYear().toString()

  const endDate = to
    ? monthNames[to.getMonth()] + ' ' + to.getFullYear().toString()
    : undefined

  return (
    <div className="my-6">
      <h4 className="text-lg font-semibold md:text-2xl">{position}</h4>
      <h5 className="italic">
        {company} {more ? '-' : ''} {more}
      </h5>
      <p>
        {startDate}
        {' - ' + (endDate ?? 'now')}
      </p>
    </div>
  )
}
