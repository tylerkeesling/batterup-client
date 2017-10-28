import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeam } from '../actions'
import NavBar from './NavBar'

class CreateRoster extends Component {
  constructor(props) {
    super(props)
    this.props.fetchTeam()
  }
  render() {
    return (
      <div className='content'>
        <NavBar />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { fetchTeam })(CreateRoster)
