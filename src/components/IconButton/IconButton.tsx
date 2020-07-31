import * as React from 'react'

import Button from 'components/Button'
import Icon from 'components/Icon'

import { IconType } from 'models/types'

interface Props {
  onClick: (event: React.SyntheticEvent) => void
  children?: React.ReactNode
  type: IconType
  className?: string
}

export default function IconButton({ children, type, ...props }: Props) {
  return (
    <Button {...props}>
      {children}
      <Icon type={type} />
    </Button>
  )
}
