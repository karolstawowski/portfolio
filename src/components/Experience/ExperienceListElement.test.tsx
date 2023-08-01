import { render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import {
  ExperienceListElement,
  ExperienceListElementProps,
} from './ExperienceListElement'

const elementProps: ExperienceListElementProps = {
  id: 1,
  company: 'MyCompany',
  position: 'Worker',
  since: new Date(2000, 1, 1),
  to: new Date(2010, 11, 31),
}

describe(ExperienceListElement.name, () => {
  it('formats date correctly', () => {
    render(
      <ExperienceListElement
        id={elementProps.id}
        company={elementProps.company}
        position={elementProps.position}
        since={elementProps.since}
        to={elementProps.to}
      />
    )

    expect(
      screen.getByText('February 2000 - December 2010')
    ).toBeInTheDocument()
  })

  it('does not display end date if undefined', () => {
    render(
      <ExperienceListElement
        id={elementProps.id}
        company={elementProps.company}
        position={elementProps.position}
        since={elementProps.since}
      />
    )

    expect(screen.getByText('February 2000 - now')).toBeInTheDocument()
  })

  it('displays position and company', () => {
    render(
      <ExperienceListElement
        id={elementProps.id}
        company={elementProps.company}
        position={elementProps.position}
        since={elementProps.since}
      />
    )

    expect(screen.getByText(elementProps.company)).toBeInTheDocument()
    expect(screen.getByText(elementProps.position)).toBeInTheDocument()
  })
})
