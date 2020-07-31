import * as React from 'react'

import Avatar from 'components/Avatar'

import style from './applicant.module.css'

import { applicantProps } from 'models/types'
import { formatDate } from 'utils'

export default function Applicant(props: applicantProps) {
  const {
    name,
    initials,
    phone,
    email,
    bid,
    viewedDate,
    appointmentDate,
  } = props

  const labelType = appointmentDate ? 'appointment' : 'view'
  const formattedDate = appointmentDate
    ? formatDate(appointmentDate)
    : formatDate(viewedDate)

  return (
    <article className={style.applicant}>
      <Avatar initials={initials}></Avatar>
      <div className={style.info}>
        <p className={style.name}>
          {name}
        </p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <AppointmentLabel text={formattedDate} type={labelType} />
      {bid ? <AppointmentLabel text={`Bid ${bid}`} type="bid" /> : null}
    </article>
  )
}

type labelProps = {
  text: string
  type?: string
}

function AppointmentLabel({ text, type = 'view' }: labelProps) {
  let prefix = 'viewed'
  switch (type) {
    case 'bid':
      prefix = 'bid'
      break
    case 'appointment':
      prefix = 'appointment'
      break

    default:
      break
  }
  return (
    <span className={style.label} data-label-type={type}>
      {prefix.toUpperCase()} {text}
    </span>
  )
}
