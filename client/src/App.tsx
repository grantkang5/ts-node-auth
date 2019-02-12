import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Switch, Route } from 'react-router-dom'

import Main from './views/Main'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="App-background">
        <Paper square elevation={3}>
          <Switch>
            <Route to="/" component={Main} />
            <Route to="/login" component={() => <div>Login</div>} />
            <Route to="/signup" component={() => <div />} />
          </Switch>
        </Paper>
      </div>
    </div>
  )
}

export default App
