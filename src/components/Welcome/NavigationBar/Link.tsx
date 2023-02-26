type LinkProps = { title: string }

export const Link = ({ title }: LinkProps): JSX.Element => {
  const linkTo = title.toLowerCase()

  const handleClickScroll = (elementId: string): void => {
    const element = document.getElementById(elementId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <span
      className="p-1 mx-2 cursor-pointer link-underline last:hidden last:lg:inline"
      onClick={(): void => handleClickScroll(linkTo)}
    >
      {title}
    </span>
  )
}
