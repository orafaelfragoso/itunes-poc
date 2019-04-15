import { actionTypes } from '../actions/featured'

export default function featured(state = [], action) {
  switch (action.type) {
    case actionTypes.FEATURED_LOADED:
      return [...action.payload]
    default:
      return state
  }
}

