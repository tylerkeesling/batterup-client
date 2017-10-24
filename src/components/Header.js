import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img
          className='header-logo'
          src={ require('../assets/images/sluggers-s-white@0.5x.png') }
          alt='logo'
        />
      </div>
    )
  }
}

export default Header
