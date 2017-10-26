import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameStatsItem from './GameStatsItem'
import { fetchTeamStats } from '../actions'
import { Table } from 'react-bootstrap'

import NavBar from './NavBar'

class GameStats extends Component {
  constructor(props) {
    super(props)
    this.props.fetchTeamStats()

  }


  render() {
    return (
      <div className='content'>
        <NavBar />
        <div className='stats-table'>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>GP</th>
                <th>AB</th>
                <th>H</th>
                <th>1B</th>
                <th>2B</th>
                <th>3B</th>
                <th>HR</th>
                <th>BB</th>
                <th>AVG</th>
                <th>SLG</th>
                <th>OBP</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.teamStats.map(playerStats => {
                  console.log('stats',playerStats)
                  return <GameStatsItem key={playerStats.id} playerStats={playerStats} />
                })
              }
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { fetchTeamStats })(GameStats)
