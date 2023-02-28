import { describe } from 'vitest'
import { ContactButton, ContactButtonProps } from './ContactButton'
import { render, screen } from '@testing-library/react'

const emailButtonProps: ContactButtonProps = {
  title: 'email',
  imgName: 'email',
  linkTo: 'page',
}

describe(ContactButton.name, () => {
  it('displays image', () => {
    render(
      <ContactButton
        title={emailButtonProps.title}
        imgName={emailButtonProps.imgName}
        linkTo={emailButtonProps.linkTo}
      />
    )

    expect(screen.getByRole('img')).toHaveProperty('alt')
    expect(screen.getByRole('img')).toHaveAttribute('src')
  })

  it('displays title text', () => {
    render(
      <ContactButton
        title={emailButtonProps.title}
        imgName={emailButtonProps.imgName}
        linkTo={emailButtonProps.linkTo}
      />
    )

    expect(screen.getByText(emailButtonProps.title)).toBeInTheDocument()
  })

  it('has link', () => {
    render(
      <ContactButton
        title={emailButtonProps.title}
        imgName={emailButtonProps.imgName}
        linkTo={emailButtonProps.linkTo}
      />
    )

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      emailButtonProps.linkTo
    )
  })
})
