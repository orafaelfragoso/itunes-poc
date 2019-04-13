import React, { Component } from 'react'
import { connect } from 'react-redux'

class Index extends Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req

    return {}
  }

  render () {
    return <div />
  }
}

export default connect()(Index)
