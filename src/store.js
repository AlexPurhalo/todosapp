import { createStore, combineReducers } from 'redux'
import { todos } from './reducers'

export default function(initState={}) {
  return createStore(combineReducers({ todos }), initState)
}

