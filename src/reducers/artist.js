import { actionTypes } from '../actions/artist'

export default function artist(state = {}, action) {
  switch (action.type) {
    case actionTypes.ARTIST_LOADED:
      return {...action.payload}
    default:
      return state
  }
}

