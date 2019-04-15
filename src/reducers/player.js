import { actionTypes } from '../actions/player'

const INITIAL_STATE = {
  paused: true,
  duration: 0,
  currentTrack: '',
  currentTrackID: 1
}

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.PLAY:
      return {...state, paused: false}
    case actionTypes.PAUSE:
      return {...state, paused: true}
    case actionTypes.SET_TRACK:
      const { duration, currentTrack, id } = action.payload
      return {
        paused: false,
        currentTrackID: id,
        duration,
        currentTrack
      }
    default:
      return state
  }
}
