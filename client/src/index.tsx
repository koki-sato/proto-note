import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

const app = document.getElementById('app')

if (app instanceof Element) {
  ReactDOM.render(<App />, app)
}
