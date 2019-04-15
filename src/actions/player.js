export const actionTypes = {
  PLAY: 'play',
  PAUSE: 'pause',
  SET_TRACK: 'set_track'
}

export const playTrack = () => dispatch => {
  return dispatch({
    type: actionTypes.PLAY
  })
}

export const pauseTrack = () => dispatch => {
  return dispatch({
    type: actionTypes.PAUSE
  })
}

export const setTrack = (track) => dispatch => {
  return dispatch({
    type: actionTypes.PAUSE,
    payload: track
  })
}

