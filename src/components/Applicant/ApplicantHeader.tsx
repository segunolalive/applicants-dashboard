import * as React from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  return (
    <div className={style.header}>
      <div className={style.title}>
        <IconButton type={IconType.Back} onClick={() => {}}>
          <SRText>{t('go back')}</SRText>
        </IconButton>
        <h1>{t('applicants')}</h1>
      </div>
      <div className={style.summaries}>
        <ApplicantSummary count={total} label="total" />
        <ApplicantSummary count={groups.Interested?.length} label="new" />
        <ApplicantSummary
          count={groups.Property_Viewed?.length}
          label="viewed"
        />
        <ApplicantSummary
          count={groups.Appointment_Set?.length}
          label="appointment"
        />
        <ApplicantSummary
          count={groups.Offer_Accepted?.length}
          label="others"
        />
      </div>
    </div>
  )
}

function ApplicantSummary({ count = 0, label }: SummaryProps) {
  const { t } = useTranslation()
  return (
    <div className={style.summary}>
      <b>{count}</b>
      <span>{t(label)}</span>
    </div>
  )
}
