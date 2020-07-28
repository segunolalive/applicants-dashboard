import * as React from 'react'

import Avatar from 'components/Avatar'

import style from './appointment.module.css'

import { appointmentProps } from 'models/types'

export default function Appointment(props: appointmentProps) {
  const { fullname, phone, email, status } = props
  return (
    <article className={style.appointment}>
      <Avatar fullname={fullname} color="hotpink"></Avatar>
      <p className={style.name}>{fullname}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <AppointmentLabel text="Viewed on 14th January 2020" />
    </article>
  )
}

type labelProps = {
  text: string
  color?: string
}

function AppointmentLabel({ text, color = 'default' }: labelProps) {
  return <span className={style.label}>{text}</span>
}
