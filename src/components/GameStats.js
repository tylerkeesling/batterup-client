import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeamStats } from '../actions'

import NavBar from './NavBar'
import PlayerModal from './PlayerModal'

class GameStats extends Component {
  constructor(props) {
    super(props)
    this.props.fetchTeamStats()

    this.state = {
      showModal: false,
      selectedPlayer: null
    }

  }

  render() {
    return (
      <div className='content'>
        <NavBar />
        {
          this.state.showModal ? <PlayerModal /> : null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { fetchTeamStats })(GameStats)
