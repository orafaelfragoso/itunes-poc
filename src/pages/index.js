import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'

class Index extends Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req

    return {}
  }

  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Serasa iTunes</title>
        </Head>
      </React.Fragment>
    )
  }
}

export default connect()(Index)
