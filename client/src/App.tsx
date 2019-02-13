import React, { Suspense } from 'react'
import Paper from '@material-ui/core/Paper'
import { Switch, Route } from 'react-router-dom'

import Main from './views/Main'
import requireAuth from './components/requireAuth'
import { Signin, Signup } from './views/Auth'
import { Loading } from './components/Loaders'
import Header from './components/Header';
import './App.css'

const App = () => {
  const AuthMain = requireAuth(Main)
  return (
    <div className="App">
      <div className="App-background">
        <Header />
        <Paper square elevation={3} className="main-content">
          <Suspense fallback={Loading}>
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
