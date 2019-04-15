import { actionTypes } from '../actions/albums'

export default function albums(state = [], action) {
  switch (action.type) {
    case actionTypes.ALBUMS_LOADED:
      return [...action.payload]
    default:
      return state
  }
}
