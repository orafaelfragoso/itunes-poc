import React, { Component } from 'react'
import HeaderImage from './HeaderImage'
import HeaderTitle from './HeaderTitle'
import HeaderDescription from './HeaderDescription'
import HeaderList from './HeaderList'
import AppleMusicButton from './AppleMusicButton'
import './stylesheets/Header.scss'

function Header({title, description, info, images, link}) {
  return (
    <div className="header-container">
      <HeaderImage images={images} />
      <div className="info-container"> 
        <div className="row">
          <div className="col-md-8 col-xs-12">
            <HeaderTitle text={title} />
            <HeaderDescription text={description} />
          </div>
          <div className="col-md-4 col-xs-12">
            <AppleMusicButton text="View on" link={link} />
            <HeaderList info={info} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
