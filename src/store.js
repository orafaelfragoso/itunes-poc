import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import player from './reducers/player'
import albums from './reducers/albums'
import artist from './reducers/artist'
import featured from './reducers/featured'

export function initializeStore (initialState = {}) {
  return createStore(
    combineReducers({
      player,
      albums,
      artist,
      featured
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
