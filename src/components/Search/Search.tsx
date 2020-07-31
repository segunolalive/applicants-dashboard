import * as React from 'react'

import SRText from 'components/SRText'

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'

import style from './search.module.css'

type Props = {
  initialValue?: string
  searchFn: (text: string) => void
}
type submit = (event: React.FormEvent<HTMLInputElement>) => void

export default function Search({ initialValue = '', searchFn }: Props) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchFn(event.target.value)
  }

  return (
    <div className={style.searchContainer}>
      <label htmlFor="search" className={style.label}>
        <SearchIcon
          className={style.searchIcon}
          focusable="false"
          aria-hidden="true"
        />
        <SRText>Search for applicant</SRText>
      </label>
      <input
        type="text"
        inputMode="search"
        defaultValue={initialValue}
        id="search"
        onChange={onChange}
        className={style.searchInput}
        placeholder="Search for applicant"
      />
    </div>
  )
}
