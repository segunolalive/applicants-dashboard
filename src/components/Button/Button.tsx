import * as React from 'react'

// import { ReactComponent as SearchIcon } from 'assets/svg/search.svg'

import style from './button.module.css'

interface Props {
  onClick: (event: React.SyntheticEvent) => void
  children?: React.ReactNode
}

export default function Button({ onClick, children }: Props) {
  return (
    <button className={style.button} onClick={onClick}>{children}</button>
  )
}
