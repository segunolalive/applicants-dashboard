import * as React from 'react'
import { Link } from 'react-router-dom'

import Icon from 'components/Icon'
import IconButton from 'components/IconButton'
import SRText from 'components/SRText'
import Container from 'components/Container'
import { ReactComponent as Logo } from 'assets/svg/logo.svg'
import { IconType } from 'models/types'

import style from './header.module.css'

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const toggleSidebar = React.useCallback(() => setOpen((open) => !open), [])

  return (
    <Container>
      <header className={style.mobile}>
        <nav aria-label="primary">
          <ul className={style.nav}>
            <IconButton type={IconType.Menu} onClick={toggleSidebar}>
              <SRText>{open ? 'close' : 'open'} sidebar</SRText>
            </IconButton>
            <Link to="/" className={style.logo}>
              <Logo />
              <SRText>McMakler</SRText>
            </Link>
            <Link to="#">
              <Icon type={IconType.Chat} />
              <SRText>messages</SRText>
            </Link>
          </ul>
        </nav>
      </header>
      <header className={style.desktop}>
        <nav aria-label="primary" className={style.nav}>
          <div className={style.drawer}>
            <IconButton type={IconType.Menu} onClick={toggleSidebar}>
              <SRText>{open ? 'close' : 'open'} sidebar</SRText>
            </IconButton>
            <Link to="/" className={style.logo}>
              <Logo />
              <SRText>McMakler</SRText>
            </Link>
          </div>
          <ul>
            <Link to="#" className={style.support}>
              <Icon type={IconType.Support} />
              <span>Contact Support</span>
            </Link>
            <Link to="#">
              <Icon type={IconType.Chat} />
              <SRText>messages</SRText>
            </Link>
            <Link to="#">
              <Icon type={IconType.Profile} />
              <SRText>profile</SRText>
            </Link>
            <Link to="#">
              <Icon type={IconType.Power} />
              <SRText>logout</SRText>
            </Link>
          </ul>
        </nav>
      </header>
    </Container>
  )
}
