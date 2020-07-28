import * as React from 'react'

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'

import style from './search.module.css'

interface Props {
  value?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Search({ onChange }: Props) {
  const [value, setValue] = React.useState('')
  return (
    <div className={style.searchContainer}>
      <label htmlFor="search" className={style.label}>
        Search for applicant
      </label>
      <SearchIcon
        className={style.searchIcon}
        focusable="false"
        aria-hidden="true"
      />
      <input
        type="text"
        inputMode="search"
        // value={value}
        id="search"
        onChange={onChange}
        // onChange={(e) => {setValue(e.target.value)}}
        className={style.searchInput}
        placeholder="Search for applicant"
      />
    </div>
  )
}
