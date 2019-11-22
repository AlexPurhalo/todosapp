import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

export const createStore = (reducers) => {
  const reducer = combineReducers(reducers) 
  return configureStore({ reducer })
}

