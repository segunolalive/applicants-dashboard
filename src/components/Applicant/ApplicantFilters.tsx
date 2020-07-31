import * as React from 'react'

import Search from 'components/Search'
import IconButton from 'components/IconButton'

import { IconType } from 'models/types'

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
        <IconButton type={IconType.More} onClick={() => {}}>
          Status
        </IconButton>
      </div>
    </div>
  )
}
