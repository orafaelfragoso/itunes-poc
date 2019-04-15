export const actionTypes = {
  FEATURED_LOADED: 'featured_loaded'
}

export const loadFeatured = (isServer, featured) => dispatch => {
  return dispatch({
    type: actionTypes.FEATURED_LOADED,
    payload: featured
  })
}

