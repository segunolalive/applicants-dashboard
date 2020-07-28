import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Search from 'components/Search'
import IconButton from 'components/IconButton'
import Appointment from 'components/Appointment'

import Container from 'components/Container'

import { IconType } from 'models/types'

import './app.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={() => (
            <Container>
              <Search
                onChange={(e) => {
                  console.log(e.target.value)
                }}
              />
              <IconButton type={IconType.More} onClick={() => {}}>
                Status
              </IconButton>
              <IconButton type={IconType.More} onClick={() => {}}>
                Bids
              </IconButton>
              <div className="app">
                <Appointment
                  fullname="adebisi Emeka Ola"
                  phone="+49 146 344 23811"
                  status="Appointment_Set"
                  email="Friedrich.heinrich@gmail.com"
                />
                <Appointment
                  fullname="adebisi Emeka Ola"
                  phone="+49 146 344 23811"
                  status="Appointment_Set"
                  email="Friedrich.heinrich@gmail.com"
                />
                <Appointment
                  fullname="adebisi Emeka Ola"
                  phone="+49 146 344 23811"
                  status="Appointment_Set"
                  email="Friedrich.heinrich@gmail.com"
                />
                <Appointment
                  fullname="adebisi Emeka Ola"
                  phone="+49 146 344 23811"
                  status="Appointment_Set"
                  email="Friedrich.heinrich@gmail.com"
                />
                <Appointment
                  fullname="adebisi Emeka Ola"
                  phone="+49 146 344 23811"
                  status="Appointment_Set"
                  email="Friedrich.heinrich@gmail.com"
                />
                <Appointment
                  fullname="adebisi Emeka Ola"
                  phone="+49 146 344 23811"
                  status="Appointment_Set"
                  email="Friedrich.heinrich@gmail.com"
                />
              </div>
            </Container>
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
