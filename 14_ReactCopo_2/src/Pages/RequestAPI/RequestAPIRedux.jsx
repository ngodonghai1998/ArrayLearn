import React, { Component } from 'react'
import { connect } from 'react-redux'

class RequestAPIRedux extends Component {
  render() {
    return (
      <div>RequestAPIRedux</div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(RequestAPIRedux)