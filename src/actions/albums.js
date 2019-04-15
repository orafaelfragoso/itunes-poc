export const actionTypes = {
  ALBUMS_LOADED: 'albums_loaded'
}

export const loadAlbums = (isServer, albums) => dispatch => {
  return dispatch({
    type: actionTypes.ALBUMS_LOADED,
    payload: albums
  })
}

