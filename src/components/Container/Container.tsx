import * as React from 'react'

import style from './container.module.css'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export default function Container({ children }: Props) {
  return <div className={style.container}>{children}</div>
}
