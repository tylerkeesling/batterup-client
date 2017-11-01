import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeam, fetchTeamStats } from '../actions'
import NavBar from './NavBar'
import PlayerRosterImg from './PlayerRosterImg'
import '../styles/dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.props.fetchTeam()

    this.state = {
      showModal: false
    }
  }
  render() {
    return (
      <div className='content'>
        <NavBar />
        <div className='container dashboard-container'>
          <div className='dash-info'>
            <div className='dash-info-left'>
              <img
                className='coach-img'
                alt='coach'
                src={ require('../assets/images/Randy_Savage_1986.jpg') }
                />
              <h3><strong>Message from the Coach:</strong></h3>
              <p>Hey, Brother! <br></br>
                I hope you really knock it out of the park on the presentation, brother!
              </p>
              <p>
                Tis the night before Playoffs when all through the season, <br></br>
              We scored many runs and drank beers for no good reason; <br></br>
            Our opponents were tough, hitting home-runs with care, <br></br>
          In hopes that a championship title would soon be theirs; <br></br>
        But The Legends were nestled all snug in 7th seed, <br></br>
                While visions of 1st place trophies danced in their dreams.
              </p>
              <p>- Coach</p>
            </div>
            <div className='dash-info-right'>
              <h3><strong>Game Info</strong></h3>
                <h4><strong>Next Game:</strong></h4>
                  <p>Legends of the Hittin Temple (7 seed) vs. Big Swingers (3 seed)</p>
                  <p>Tuesday, November 7th @ 8:00PM</p>
                <h4><strong>Last Game:</strong></h4>
                  <p>Legends of the Hittin Temple (7 seed) vs. Pinch Hitters (2 seed)</p>
                  <p><strong>Result:</strong> 10-7 A playoff win for the Legends!</p>

            </div>
          </div>
          <div className='dash-roster-container'>
            <div className='dash-roster-title'><h3><strong>The Legends of the Hittin Temple</strong></h3></div>
            <div className='dash-roster'>
              {
                this.props.myTeam.map(player => {
                  return (
                    <PlayerRosterImg
                      key={ player.id }
                      player={ player }
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { fetchTeam, fetchTeamStats })(Dashboard)
