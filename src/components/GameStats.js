import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeamStats } from '../actions'
import GameStatsItem from './GameStatsItem'

import NavBar from './NavBar'

class GameStats extends Component {
  componentDidMount() {
    this.props.fetchTeamStats()
  }

  render() {
    return (
      <div className='content'>
        <NavBar />
        <div className='container'>
          {
            this.props.teamStats.map(player => {
              return (
                <GameStatsItem
                  key={ player.id }
                  player={ player }
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { fetchTeamStats })(GameStats)
