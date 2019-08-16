import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App.js'
import createStore from './store'

ReactDOM.render(
  <Provider store={createStore()}>
    <App />
  </Provider>, 
  document.getElementById("root")
)
