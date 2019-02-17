import React, { Suspense, lazy } from 'react'
import Paper from '@material-ui/core/Paper'
import { Switch, Route } from 'react-router-dom'

import requireAuth from './components/requireAuth'
import { Loading } from './components/Loaders'
import Header from './components/Header'
import './App.css'

const Main = lazy(() => import('./views/Main'))
const Signin = lazy(() => import('./views/Auth/Signin'))
const Signup = lazy(() => import('./views/Auth/Signup'))
const AuthMain = requireAuth(Main)

const App = () => {
  return (
    <div className="App">
      <div className="App-background">
        <Header />
        <Paper square elevation={3} className="main-content">
          <Suspense fallback={<Loading delay={250} />}>
            <Switch>
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/" component={AuthMain} />
            </Switch>
          </Suspense>
        </Paper>
      </div>
    </div>
  )
}

export default App
