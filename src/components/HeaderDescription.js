import React from 'react'
import './stylesheets/HeaderDescription.scss'

export default function HeaderDescription({text}) {
  const limitedText = text.substring(0, 820)
  const formattedText = limitedText.substring(0, limitedText.lastIndexOf('.'))

  return <p className="header-description">{formattedText}.</p>
}

