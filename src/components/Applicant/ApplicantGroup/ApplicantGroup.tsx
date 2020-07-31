import * as React from 'react'
import Applicant from '../Applicant'

import { applicantProps, applicantStatus } from 'models/types'
import { APPLICANT_STATUSES } from 'utils'

import style from './applicant-group.module.css'

type Prop = {
  group: applicantStatus
  applicants: applicantProps[]
}

export default function ApplicantGroup({ group, applicants }: Prop) {
  return (
    <section className={style.group}>
      <h2 className={style.heading}>
        {APPLICANT_STATUSES[group]} ({applicants.length})
      </h2>
      <div className={style.grid}>
        {applicants.map((applicant) => (
          <Applicant {...applicant} key={applicant.id} />
        ))}
      </div>
    </section>
  )
}
