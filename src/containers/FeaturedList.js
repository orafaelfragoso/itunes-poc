import React, { Component } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import './stylesheets/FeaturedList.scss'

class FeaturedList extends Component {

  render() {
    return (
      <div className="featured-container">
        <h2>Featured Artists</h2>
        <ul>
          {this.props.similar.map(artist => (
            <li key={artist.term} onClick={() => Router.push('/artist/' + artist.term)}>
              <div className="wrapper">
                <img src={artist.image} alt={artist.name} />
                <span className="name">{artist.name}</span>
                <span className="genre">{artist.genre}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  similar: state.featured,
})

export default connect(mapStateToProps)(FeaturedList)

