import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe } from 'vitest'
import { TechIcon, TechIconProps } from './TechIcon'

const techIconProps: TechIconProps = {
  imageName: 'reactjs',
  name: 'React',
}

describe(TechIcon.name, () => {
  it('displays tooltip on icon hover', async () => {
    render(
      <TechIcon imageName={techIconProps.imageName} name={techIconProps.name} />
    )

    fireEvent.mouseOver(screen.getByRole('img'))

    await waitFor(() => screen.getByText(techIconProps.name))

    expect(screen.getByText(techIconProps.name)).toBeInTheDocument()
  })
})
