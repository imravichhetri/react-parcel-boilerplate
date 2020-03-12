import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import AppContainer from './src/modules/app/container'

const Index = props => {
  return (
    <AppContainer/>
  )
}

var mountNode = document.getElementById("application");
ReactDOM.render(<Index name="Jane" />, mountNode);

export default Index
