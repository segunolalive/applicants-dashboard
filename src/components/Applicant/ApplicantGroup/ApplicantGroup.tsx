import * as React from 'react'
import { applicantProps, applicantStatus } from 'models/types'
import Applicant from '../Applicant'

import style from './applicant-group.module.css';

type Prop = {
  group: applicantStatus
  applicants: applicantProps[]
}

const APPLICANT_STATUSES = {
  Appointment_Set: 'Appointment set',
  Property_Viewed: 'Property viewed',
  Interested: 'Interested',
  Offer_Accepted: 'Offer accepted',
}

export default function ApplicantGroup({ group, applicants }: Prop) {
  return (
    <section className={style.group}>
      <h2 className={style.heading}>{APPLICANT_STATUSES[group]} ({applicants.length})</h2>
      <div className={style.grid}>
        {applicants.map((applicant) => (
          <Applicant {...applicant} key={applicant.id} />
        ))}
      </div>
    </section>
  )
}
