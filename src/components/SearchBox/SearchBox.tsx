import * as React from 'react'

import SRText from 'components/SRText'

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'

import style from './search-box.module.css'

type Props = {
  initialValue?: string
  searchFn: (text: string) => void
}

type changehandler = (event: React.ChangeEvent<HTMLInputElement>) => void

export default function SearchBox({ initialValue = '', searchFn }: Props) {
  const onChange: changehandler = (event) => {
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
