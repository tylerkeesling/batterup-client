import React, { Component } from 'react'
import Login from './Login'

class Welcome extends Component {
  render() {
    return (
      <div className='content'>
        <div className='welcome-page-container'>
          <div className='middle-container'>
            <img
              className='left-logo'
              src={ require('../assets/images/batter-up-white@0.5x.png') }
              alt='left-logo'
              />
            <div className='login-container'>
              <Login />
            </div>
          </div>
          <div className='middle-container-bottom'></div>
          <div className='app-quotes'>
            <div className='user-testimony'>
              <p className='actual-quote'>"Sluggers is a real homerun."</p>
              <p className='my-name'>- Rob Olson, Denver CO</p>
            </div>
            <div className='the-app-quote'>
              <p className='actual-quote'>"The app that tracks your stats!"</p>
              <p className='my-name'>- Nina Keesling, Kennett Square PA</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
