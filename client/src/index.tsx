import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo-hooks'

import AppRouter from './Router'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0C7FFF' },
    secondary: { main: '#FFE979' }
  },
  typography: {
    useNextVariants: true,
  },
})

const client = new ApolloClient({
  cache: (new InMemoryCache()).restore({})
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <AppRouter />
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
