import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Console } from './Console'

describe(Console.name, () => {
  it('displays paragraph with text', () => {
    render(<Console />)

    expect(screen.getByText('Karol@PC')).toBeInTheDocument()
    expect(screen.getByText('main')).toBeInTheDocument()
    expect(screen.getByText('~/src')).toBeInTheDocument()
  })
})
