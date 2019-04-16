import React from 'react'
import './stylesheets/AppleMusicButton.scss'

function AppleMusicButton({text, link}) {
  return (
    <a href={link} target="_new" title={`${text} Apple Music`} className="apple-music-btn">
      {text}
      <span>Apple Music</span>
    </a>
  )
}

export default AppleMusicButton
