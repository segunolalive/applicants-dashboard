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
  const [value, setValue] = React.useState(initialValue)

  const handleSubmit = (
    event: React.FormEvent<HTMLInputElement | HTMLFormElement>
  ) => {
    event.preventDefault()
    searchFn(value)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
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
        value={value}
        id="search"
        onChange={onChange}
        onBlur={handleSubmit}
        className={style.searchInput}
        placeholder="Search for applicant"
      />
    </form>
  )
}
