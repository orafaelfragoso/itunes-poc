import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

export function initializeStore (initialState = {}) {
  return createStore(
    combineReducers({

    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
