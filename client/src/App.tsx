import React, { useState } from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0C7FFF' },
    secondary: { main: '#FFE979' }
  },
  typography: {
    useNextVariants: true,
  },
})

const App = () => {
  const [value, handleChange] = useState<number | null>(2)

  return (
    <div className="App">
      <div className="App-background">
        <header className="header">
          <Button onClick={() => axios.get('/api/secret')}>Sign in</Button>
          <Button>Sign up</Button>
        </header>
        <MuiThemeProvider theme={theme}>
          <Paper square elevation={3}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              style={{ padding: 15 }}
              onChange={(e, value) => handleChange(value)}
              variant="fullWidth"
            >
              <Tab label="Page 1" />
              <Tab label="Page 2" />
              <Tab label="Page 3" />
              <Tab label="Page 4" />
            </Tabs>
          </Paper>
        </MuiThemeProvider>
      </div>
    </div>
  )
}

export default App