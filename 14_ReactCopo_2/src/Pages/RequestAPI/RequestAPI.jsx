import React, { Component } from 'react'
import { connect } from 'react-redux'

class RequestAPI extends Component {
  render() {
    return (
      <div>RequestAPI</div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(RequestAPI)