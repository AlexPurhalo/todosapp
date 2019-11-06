import { createStore, combineReducers } from 'redux'

export default (state, reducers) => createStore(combineReducers(reducers), state)
// TODO: add the store specs
