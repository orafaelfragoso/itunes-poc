import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppleMusicButton from '../components/AppleMusicButton'
import AlbumImage from '../components/AlbumImage'
import Player from '../components/Player'
import './stylesheets/AlbumList.scss'
import { setTrack, playTrack, pauseTrack } from '../actions/player'

class AlbumList extends Component {

  audioRef = React.createRef('audio')

  _toggleTrack(song) {
    const { player } = this.props
    const hasTrack = !!player.currentTrackID
    const paused = player.paused
    const audioControl = this.audioRef.current

    if (!hasTrack || player.currentTrackID !== song.trackId) {
      this.props.setTrack({
        duration: 0,
        currentTrack: song.previewUrl,
        id: song.trackId
      })

      setTimeout(() => {
        audioControl.play()
      }, 500)
    } else {
      if (paused) {
        this.props.playTrack()
        audioControl.play()
      } else {
        this.props.pauseTrack()
        audioControl.pause()
      }
    }
  }

  render() {
    return (
      <div className="album-container">
        <Player ref={this.audioRef} source={this.props.player.currentTrack} />
        {this.props.albums.map(album => (
          <div className="row" key={album.collectionId} className="album-wrapper">
            <div className="col-xs-12 col-md-4">
              <AlbumImage size={300} link={album.artworkUrl100} />
              <span className="album-track-count">{album.trackCount} songs</span>
            </div>
            <div className="col-xs-12 col-md-8 album-container-list">
              <h2 className="album-title">{album.collectionName}</h2>
              <AppleMusicButton text="Listen on" link={album.collectionViewUrl} />
              <ul className="album-songs">
                {album.songs.map(song => (
                  <li key={song.trackId} onClick={() => this._toggleTrack(song)} className={!this.props.player.paused && this.props.player.currentTrackID === song.trackId ? 'isPlaying' : ''}>
                    <img src={song.artworkUrl30} alt={song.trackName} />
                    <div className="album-songs__info">
                      <div className="album-songs__wrapper">
                        <span className="album-songs__trackName">{song.trackName}</span>
                        <span className="album-songs__trackArtist">{song.artistName}</span>
                      </div>
                      <span className="album-songs__price">{song.trackPrice}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  albums: state.albums,
  player: state.player
})

const mapDispatchToProps = ({
  setTrack,
  playTrack,
  pauseTrack
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList)
