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
              <p>Bacon ipsum dolor amet prosciutto turducken hamburger shankle shank. Venison biltong doner, cow tri-tip chuck boudin. Capicola biltong turkey, ball tip frankfurter fatback short loin short ribs ribeye. Tenderloin pig cow bacon tail pancetta meatball shankle short ribs bresaola fatback cupim shank rump shoulder. Tongue spare ribs pig prosciutto meatball shank pork belly ball tip. Meatball leberkas jerky, short ribs bacon pork chop capicola tongue chicken short loin andouille landjaeger beef ribs turducken ground round.</p>
            </div>
            <div className='dash-info-right'>
              <h3><strong>Game Info</strong></h3>
                <h4><strong>Next Game:</strong></h4>
                  <p>Legends of the Hittin Temple (4-4) vs. Big Swingers (6-2)</p>
                  <p>Tuesday, November 7th @ 7:00PM</p>
                <h4><strong>Last Game:</strong></h4>
                  <p>Legends of the Hittin Temple (3-4) vs. Pinch Hitters (5-3)</p>
                  <p><strong>Result:</strong> 15-13 A win for the Legends!</p>

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
