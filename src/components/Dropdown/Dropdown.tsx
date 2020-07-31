import * as React from 'react'

import Icon from 'components/Icon'

import style from './dropdown.module.css'
import { IconType } from 'models/types'

type DropdownProps = {
  defaultValue: string
  options: Record<string, string>
  selectFn: (option: string) => void
  transformFn?: (text: string) => string
}

type selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => void

export default function Dropdown({
  defaultValue,
  options,
  selectFn,
  transformFn = (v) => v,
}: DropdownProps) {
  const [selected, setSelected] = React.useState(defaultValue)

  const onSelect: selectHandler = (event) => {
    const { value } = event.target
    const transformedValue = transformFn(value)
    setSelected(transformedValue)
    selectFn(value)
  }

  return (
    <label className={style.button}>
      {selected}
      <Icon type={IconType.More} />
      <select className={style.select} onChange={onSelect} value={selected}>
        <option disabled>{defaultValue}</option>
        {Object.entries(options).map(([value, label], index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  )
}
