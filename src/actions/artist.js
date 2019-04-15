export const actionTypes = {
  ARTIST_LOADED: 'artist_loaded'
}

export const loadArtist = (isServer, artist) => dispatch => {
  return dispatch({
    type: actionTypes.ARTIST_LOADED,
    payload: artist
  })
}
