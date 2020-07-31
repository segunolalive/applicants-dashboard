import * as React from 'react'

import { colorsMap } from 'utils'

import style from './avatar.module.css'

interface Props {
  initials: string
}

export default function Avatar({ initials }: Props): React.ReactElement {
  const colorIndex = Math.floor(colorsMap.length * Math.random())
  const colors = colorsMap[colorIndex]

  return (
    <div
      className={style.avatar}
      style={{ backgroundColor: colors[0], color: colors[1] }}
    >
      {initials.toUpperCase()}
    </div>
  )
}
