import * as React from 'react'

import IconButton from 'components/IconButton'
import SRText from 'components/SRText'

import { applicantProps, IconType } from 'models/types'

import style from './applicant-header.module.css'

type HeaderProps = {
  total: number
  groups: Record<string, applicantProps[]>
}
type SummaryProps = {
  count: number
  label: string
}

export default function ApplicantHeader({ total, groups }: HeaderProps) {
  return (
    <div className={style.header}>
      <div className={style.title}>
        <IconButton type={IconType.Back} onClick={() => {}}>
          <SRText>go back</SRText>
        </IconButton>
        <h1>Applicants</h1>
      </div>
      <div className={style.summaries}>
        <ApplicantSummary count={total} label="Total" />
        <ApplicantSummary count={groups.Interested?.length} label="New" />
        <ApplicantSummary
          count={groups.Property_Viewed?.length}
          label="Viewed"
        />
        <ApplicantSummary
          count={groups.Appointment_Set?.length}
          label="Appointment"
        />
        <ApplicantSummary
          count={groups.Offer_Accepted?.length}
          label="Others"
        />
      </div>
    </div>
  )
}

function ApplicantSummary({ count = 0, label }: SummaryProps) {
  return (
    <div className={style.summary}>
      <b>{count}</b>
      <span>{label}</span>
    </div>
  )
}
