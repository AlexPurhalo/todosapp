import { compose, applMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export default (state, reducers) => createStore(combineReducers(reducers), state, composeWithDevTools())
// TODO: add the store specs
