import * as React from 'react'

import style from './srtext.module.css';

interface Props {
  children: React.ReactNode
}

export default function SRText ({ children }: Props) {
  return <span className={style.srText}>{children}</span>
}
