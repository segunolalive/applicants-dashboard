import * as React from 'react'

// import { ReactComponent as SearchIcon } from 'assets/svg/search.svg'

import style from './button.module.css'

interface Props {
  onClick: (event: React.SyntheticEvent) => void
  children?: React.ReactNode
  className?: string
}

export default function Button({ children , ...props}: Props) {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  )
}
