import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './components/App.js'
import todosReducer from './todosReducer'
import filterReducer from './filterReducer'
import { createStore } from './store'

const store = createStore({ 
  todos: todosReducer,
  filter: filterReducer 
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
)

