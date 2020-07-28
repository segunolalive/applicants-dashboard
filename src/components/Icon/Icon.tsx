import * as React from 'react'

import { ReactComponent as BackIcon } from 'assets/icons/back.svg'
import { ReactComponent as ChatIcon } from 'assets/icons/chat.svg'
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg'
import { ReactComponent as MoreIcon } from 'assets/icons/more.svg'
import { ReactComponent as PowerIcon } from 'assets/icons/power.svg'
import { ReactComponent as ProfileIcon } from 'assets/icons/profile.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { ReactComponent as SupportIcon } from 'assets/icons/support.svg'

import { IconType } from 'models/types'

interface Props {
  type: IconType
}

export default function Icon({ type }: Props) {
  let Component = null
  switch (type) {
    case IconType.Back:
      Component = BackIcon
      break
    case IconType.Chat:
      Component = ChatIcon
      break
    case IconType.Menu:
      Component = MenuIcon
      break
    case IconType.More:
      Component = MoreIcon
      break
    case IconType.Power:
      Component = PowerIcon
      break
    case IconType.Profile:
      Component = ProfileIcon
      break
    case IconType.Search:
      Component = SearchIcon
      break
    case IconType.Support:
      Component = SupportIcon
  }

  if (Component) {
    return <Component focusable="false" aria-hidden="true" />
  }
  return null
}
