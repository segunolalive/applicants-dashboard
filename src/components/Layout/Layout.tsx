import * as React from 'react'

import Header from 'components/Header'
import Container from 'components/Container'

import style from './layout.module.css'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={style.page}>
      <Header />
      <main className={style.main}>
        <Container className={style.container}>{children}</Container>
      </main>
      <Container>
        <footer className={style.footer}>AGB • Datenschutz • Impressum</footer>
      </Container>
    </div>
  )
}
