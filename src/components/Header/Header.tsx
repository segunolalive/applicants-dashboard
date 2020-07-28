import * as React from 'react'
import { Link } from 'react-router-dom'

import Icon from 'components/Icon'
import IconButton from 'components/IconButton'
import SRText from 'components/SRText'
import Container from 'components/Container'
import { ReactComponent as Logo } from 'assets/svg/logo.svg'
import { IconType } from 'models/types'

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const toggleSidebar = React.useCallback(() => setOpen((open) => !open), [])

  return (
    <Container>
      <header>
        <IconButton type={IconType.Menu} onClick={toggleSidebar}>
          <SRText>{open ? 'close' : 'open'} sidebar</SRText>
        </IconButton>
        <Logo />
        <nav aria-label="main">
          <Link to="#">
            <Icon type={IconType.Menu} />
            Contact Support
          </Link>
          <Link to="#">
            <Icon type={IconType.Menu} />
            <SRText>messages</SRText>
          </Link>
          <Link to="#">
            <Icon type={IconType.Menu} />
            <SRText>profile</SRText>
          </Link>
          <Link to="#">
            <Icon type={IconType.Menu} />
            <SRText>logout</SRText>
          </Link>
        </nav>
      </header>
    </Container>
  )
}
