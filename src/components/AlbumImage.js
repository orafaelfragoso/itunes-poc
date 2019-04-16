import React from 'react'
import './stylesheets/AlbumImage.scss'

function AlbumImage({size, link}) {
  const image = link.substring(0, link.lastIndexOf("/") + 1) + size + 'x' + size + 'bb.jpg'

  return (
    <img src={image} alt="Album Cover" width={size} height={size} className="album-image" />
  )
}

export default AlbumImage
