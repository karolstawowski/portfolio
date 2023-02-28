import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Console } from './Console'

describe(Console.name, () => {
  it('displays paragraph with text', () => {
    const { container } = render(<Console />)

    const paragraph = container.querySelector('p')

    expect(paragraph).toBeInTheDocument()
  })
})
