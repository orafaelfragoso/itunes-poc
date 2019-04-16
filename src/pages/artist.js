import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'node-fetch'
import Head from 'next/head'
import './stylesheets/artist.scss'

import { loadAlbums } from '../actions/albums'
import { loadArtist } from '../actions/artist'
import { loadFeatured } from '../actions/featured'
import Header from '../components/Header'
import AlbumList from '../containers/AlbumList'
import FeaturedList from '../containers/FeaturedList'

class Artist extends Component {
  static async getInitialProps ({ reduxStore, req, query }) {
    const isServer = !!req
    const term = query.slug
    const info = await fetch('https://itunes-crawler.herokuapp.com/search/' + term).then(res => res.json())

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
    return (
      <React.Fragment>
        <Head>
          <title>{this.props.artist.info.artistName} - Serasa iTunes</title>
        </Head>
        <div className="container">
          <Header 
            title={this.props.artist.info.artistName}
            description={this.props.artist.description}
            images={this.props.artist.images} 
            info={this.props.artist.more}
            link={this.props.artist.info.artistLinkUrl}
          />
          <AlbumList />
          <FeaturedList />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  artist: state.artist
})

export default connect(mapStateToProps)(Artist)

