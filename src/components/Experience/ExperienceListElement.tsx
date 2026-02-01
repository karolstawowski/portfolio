import { JSX } from 'react'

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
  displayDuration?: boolean
}

export const ExperienceListElement = ({
  company,
  position,
  more,
  since,
  to,
  displayDuration,
}: ExperienceListElementProps): JSX.Element => {
  const startDate =
    monthNames[since.getMonth()] + ' ' + since.getFullYear().toString()

  const endDate = to
    ? monthNames[to.getMonth()] + ' ' + to.getFullYear().toString()
    : undefined

  const monthDuration = monthDiff(since, to)

  const companyDescription = `${company} ${more ? `- ${more}` : ''}`

  const formatDuration = (months: number): string => {
    if (months >= 12) {
      const years = Math.floor(months / 12)
      const remainingMonths = months % 12
      const yearText = `${years} ${years > 1 ? 'years' : 'year'}`
      const monthText =
        remainingMonths > 0
          ? ` ${remainingMonths} ${remainingMonths > 1 ? 'months' : 'month'}`
          : ''
      return `${yearText}${monthText}`
    }
    return `${months} ${months > 1 ? 'months' : 'month'}`
  }

  const experienceDuration = displayDuration
    ? `(${formatDuration(monthDuration)})`
    : ''

  const datesRangeDescription = `${startDate} - ${
    endDate ?? 'now'
  } ${experienceDuration}`

  return (
    <div className="my-6">
      <h4 className="text-lg font-semibold md:text-2xl">{position}</h4>
      <h5 className="italic">{companyDescription}</h5>
      <p className="text-sm">{datesRangeDescription}</p>
    </div>
  )
}

const monthDiff = (dateFrom: Date, dateTo: Date = new Date()): number => {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  )
}
