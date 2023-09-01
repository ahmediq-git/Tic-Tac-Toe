import React, { Component } from 'react'
import {containerStyle} from '../components/containerStyle'

class ErrorPage extends Component {
  render() {
    return (
      <div style={containerStyle}>OOPS there has been an Error</div>
    )
  }
}

export default ErrorPage