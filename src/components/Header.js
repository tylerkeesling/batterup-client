import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <img
        className='header-logo'
        src={ require('../assets/images/sluggers-s-white@0.5x.png') }
        alt='logo'
      />
    <img
      className='header-logo-right'
      src= { require('../assets/images/sluggers-log-white@0.5x.png') }
      alt='logo'
    />
    </div>
  )
}

export default Header
