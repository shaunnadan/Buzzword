import React, { Component } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Helmet } from 'react-helmet'
import { Home } from './pages'

const theme = {
  colors: {
    primary: '',
    secondary: '',
    tertiary: '',
    color: '',
    header: 'white',
  },
  header: {
    fontSize: '50px',
    textTransform: 'uppercase',
    fontFamily: 'Palatino',
    textAlign: 'center',
  },
  copy: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '10px',
  },
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Buzzword Bingo Card Generator</title>
          <meta
            name="description"
            content="It's time for some Buzzword Bingo!"
          />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Home />
      </ThemeProvider>
    )
  }
}

export default App
