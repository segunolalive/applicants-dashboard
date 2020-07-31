import * as React from 'react'

import Search from 'components/SearchBox'
import IconButton from 'components/IconButton'
import Dropdown from 'components/Dropdown'

import { IconType } from 'models/types'
import { APPLICANT_STATUSES } from 'utils'

import style from './applicant-filters.module.css'

type Props = {
  initialValue?: string
  searchFn: (text: string) => void
}

export default function ApplicantFilters({ initialValue, searchFn }: Props) {
  return (
    <div className={style.filters}>
      <Search initialValue={initialValue} searchFn={searchFn} />
      <div className={style.buttons}>
        <IconButton type={IconType.More} onClick={() => {}}>
          Bids
        </IconButton>
        <Dropdown
          defaultValue={'Status'}
          options={APPLICANT_STATUSES}
          selectFn={console.log}
          transformFn={s => s.split('_').join(' ')}
        />
      </div>
    </div>
  )
}
