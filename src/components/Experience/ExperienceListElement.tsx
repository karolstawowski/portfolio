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
  position: string
  company: string
  since: Date
  to?: Date
}

export const ExperienceListElement = ({
  company,
  position,
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
      <h5 className="text-2xl font-semibold">{position}</h5>
      <h6 className="italic">{company}</h6>
      <p>
        {startDate}
        {' - ' + (endDate ?? 'now')}
      </p>
    </div>
  )
}
