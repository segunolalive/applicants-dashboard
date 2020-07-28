import * as React from 'react'

import Button from 'components/Button'
import Icon from 'components/Icon'

import { IconType } from 'models/types'

interface Props {
  onClick: (event: React.SyntheticEvent) => void
  children?: React.ReactNode
  type: IconType
}

export default function IconButton({ children, type, onClick }: Props) {
  return (
    <Button onClick={onClick}>
      {children}
      <Icon type={type} />
    </Button>
  )
}
