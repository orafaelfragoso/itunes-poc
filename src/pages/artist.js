import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'node-fetch'

import { loadAlbums } from '../actions/albums'
import { loadArtist } from '../actions/artist'
import { loadFeatured } from '../actions/featured'

class Artist extends Component {
  static async getInitialProps ({ reduxStore, req, query }) {
    const isServer = !!req
    const term = query.slug
    const info = await fetch('http://localhost:3001/search/' + term).then(res => res.json())

    reduxStore.dispatch(loadAlbums(isServer, info.albums))
    reduxStore.dispatch(loadFeatured(isServer, info.similar))
    reduxStore.dispatch(loadArtist(isServer, {
      info: info.artist,
      description: info.description,
      more: info.more,
      images: info.images
    }))

    return {}
  }

  render () {
    return <div />
  }
}

export default connect()(Artist)

