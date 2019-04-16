import React from 'react'
import './stylesheets/HeaderList.scss'

function HeaderList({info}) {
  const keys = Object.keys(info)

  return (
    <ul className="header-list">
      {keys.map(k => (
        <li key={k}>
          <span className="header-list__title">{k}</span>
          <span className="header-list__description">{info[k]}</span>
        </li>
      ))}
    </ul>
  )
}

export default HeaderList
