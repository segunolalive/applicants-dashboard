import * as React from 'react'

import style from './container.module.css'

interface Props {
  className?: string
  children: React.ReactNode | React.ReactNode[]
}

export default function Container({ className = '', children }: Props) {
  return <div className={`${style.container} ${className}`}>{children}</div>
}
