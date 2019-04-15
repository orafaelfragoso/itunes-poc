import React, { Component } from 'react'
import HeaderImage from './HeaderImage'
import HeaderTitle from './HeaderTitle'
import HeaderDescription from './HeaderDescription'
import HeaderList from './HeaderList'
import './stylesheets/Header.scss'

function Header({title, description, info, images}) {
  return (
    <div className="header-container">
      <HeaderImage images={images} />
      <div className="info-container"> 
        hello
      </div>
    </div>
  )
}

export default Header
