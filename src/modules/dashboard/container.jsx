import React from 'react'
import PropTypes from 'prop-types'

const Container = props => {
  return (
    <>
      <header>
        Header
      </header>
      <section>{props.children}</section>
      <footer>Footer</footer>
    </>
  )
}

Container.propTypes = {

}

export default Container
