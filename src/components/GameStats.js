import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  } from '../actions'
import { Link } from 'react-router-dom'

import NavBar from './NavBar'

class GameStats extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className='content'>
        <NavBar />
        <div className='container'>
          <Link to='/dashboard'>back</Link>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {  })(GameStats)
