import React, { Component } from 'react'
import getImagePalette from 'image-palette-core'
import './stylesheets/HeaderImage.scss'

class HeaderImage extends Component {
  state = {
    backgroundColor: '#333'
  }

  async componentDidMount() {
    const colors = await this._getDominantColor(this.props.images.small)
    this.setState({backgroundColor: colors.backgroundColor})
  }

  async _getDominantColor(url) {
    return new Promise((resolve, reject) => {
      try {
        const img = new Image()
        img.src = url + '?' + new Date().getTime()
        img.setAttribute('crossOrigin', '')
        img.onload = () => {
          return resolve(getImagePalette(img))
        }
      } catch (err) {
        return reject(err)
      }
    })
  }

  render() {
    const { images } = this.props

    return (
      <div className="image-container" style={{backgroundColor: this.state.backgroundColor}}>
        <picture>
          <source srcSet={images.small} media="(max-width: 768px)" />
          <source srcSet={images.large} />
          <img srcSet={images.large} alt="Artist Image" />
        </picture>
      </div>
    )
  }
}

export default HeaderImage
