import React, { Component } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Helmet } from 'react-helmet'
import './App.css'

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Helmet>
          <title>Buzzword Bingo Card Generator</title>
          <meta
            name="description"
            content="It's time for some Buzzword Bingo!"
          />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <div className="App">
          <header className="App-header" />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
