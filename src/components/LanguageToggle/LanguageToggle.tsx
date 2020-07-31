import * as React from 'react'
import Button from 'components/Button'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  return (
    <div>
      <Button onClick={() => i18n.changeLanguage('en')}>EN</Button>
      <Button onClick={() => i18n.changeLanguage('de')}>DE</Button>
    </div>
  )
}
