import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ApplicantsPage from 'pages/Applicants'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ApplicantsPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
