import * as React from 'react'

import style from './avatar.module.css'

interface Props {
  fullname: string
  color: string
}

export default function Avatar({ fullname, color }: Props): React.ReactElement {
  const [firstName = '', lastName = ''] = fullname.split(' ')
  const firstInitial = firstName ? firstName[0] : ''
  const secondInitial = lastName ? lastName[0] : ''
  const initials = `${firstInitial}${secondInitial}`.toUpperCase()

  return (
    <div className={style.avatar} style={{ backgroundColor: color }}>
      {initials}
    </div>
  )
}
