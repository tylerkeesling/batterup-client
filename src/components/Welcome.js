import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <div className='welcome-page-container'>
        <div className='middle-container'>
            <img
              className='left-logo'
              src={ require('../assets/images/sluggers-log-white@0.5x.png') }
              alt='left-logo'
            />
          <div className='login-container'>
            login placeholder
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
