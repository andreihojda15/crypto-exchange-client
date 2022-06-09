import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeProvider from './utils/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)
