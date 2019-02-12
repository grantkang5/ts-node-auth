import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router-dom'

import App from './App'

const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <App />
  </Router>
)

export default AppRouter