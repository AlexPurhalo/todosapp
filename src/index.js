import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.js'
import { todos } from './reducers'

const store = createStore(combineReducers({ todos }))
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
)
