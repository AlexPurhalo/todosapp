import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App.js'
import createStore from './store'
import reducers from './reducers'

const state = {}
const store = createStore(state, reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
)

