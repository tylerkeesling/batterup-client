import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePlayerStats } from '../actions'
import { Redirect } from 'react-router-dom'
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import Spinner from 'react-spinkit'
import NavBar from './NavBar'

class InGame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      outCount: 0,
      rbi: 0,
      hitType: 'out',
      fireRedirect: false
    }

  }

  findBatterName(index) {
    let batter = this.props.myTeam.filter(player => {
      return player.id === this.props.gameRoster[index].player_id ? player : null
    })
    return batter[0].name
  }

  addRBI() {
    let rbiCount = this.state.rbi
    console.log(rbiCount);
    this.setState({ rbi: rbiCount + 1 })
  }

  subtractRBI() {
    let rbiCount = this.state.rbi
    if(this.state.rbi === 0) return null
    else (this.setState({ rbi: rbiCount - 1 } ))
  }

  resetOuts() {
    this.setState({ outCount: 0 })
  }

  submitStats() {
    let updatedStats = {
      'id': this.props.gameRoster[0].id,
      'at_bat': this.props.gameRoster[0].at_bat + 1,
      'rbi': this.props.gameRoster[0].rbi + this.state.rbi
    }
    switch(this.state.hitType) {
      case 'out':
        this.setState({
          outCount: this.state.outCount + 1,
          rbi: 0
        })
        return this.props.updatePlayerStats(updatedStats)
      case 'single':
        this.setState({ rbi: 0 })
        updatedStats.single = this.props.gameRoster[0].single + 1
        return this.props.updatePlayerStats(updatedStats)
      case 'double':
        this.setState({ rbi: 0 })
        updatedStats.double = this.props.gameRoster[0].double + 1
        return this.props.updatePlayerStats(updatedStats)
      case 'triple':
        this.setState({ rbi: 0 })
        updatedStats.triple = this.props.gameRoster[0].triple + 1
        return this.props.updatePlayerStats(updatedStats)
      case 'homerun':
        this.setState({ rbi: 0 })
        updatedStats.homerun = this.props.gameRoster[0].homerun + 1
        return this.props.updatePlayerStats(updatedStats)
      case 'walk':
        this.setState({ rbi: 0 })
        updatedStats.walk = this.props.gameRoster[0].walk + 1
        updatedStats.at_bat = this.props.gameRoster[0].at_bat - 1
        return this.props.updatePlayerStats(updatedStats)
      default:
      return null
    }
  }

  render() {
    console.log(this.state)
    if(this.props.gameRoster.length === 0) {
      return (
        <div className='content'>
          <NavBar />
          <div className='container'>
            <div className='spinner'>
              <Spinner name="ball-scale-multiple" color="coral" />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='content'>
          <NavBar />
          <div className='container batter-box'>
            <div className='batter'>
              Batter Up: <span className='batter-name'>{ this.findBatterName(0) }</span>
            </div>
            {
              (this.props.gameRoster.length > 1) ?
                <div className='next-batter'>On Deck: <span className='next-batter-name'>{ this.findBatterName(1) }</span></div>
              :
              <div></div>
            }
            <span className='hit-selection-text'>Hit Type:</span>
            <div className='hit-selection'>
              <ToggleButtonGroup
                type="radio"
                name="hit-type"
                defaultValue='out'
                onChange={ value => this.setState({ hitType: value }) }>
                <ToggleButton className='hit-button' value='single'>Single</ToggleButton>
                <ToggleButton className='hit-button' value='double'>Double</ToggleButton>
                <ToggleButton className='hit-button' value='triple'>Triple</ToggleButton>
                <ToggleButton className='hit-button' value='homerun'>Homerun</ToggleButton>
                <ToggleButton className='hit-button' value='walk'>Walk</ToggleButton>
                <ToggleButton className='hit-button' value='out'>Out</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <div className='container batter-box'>
            <span className='hit-selection-text'>RBI(s):</span>
            <div className='rbi-selection'>
              <Button
                onClick={ () => this.subtractRBI() }
                className='rbi-btn'
                >-</Button>
              <div className='rbi-text'>
                { this.state.rbi }
              </div>
              <Button
                onClick={ () => this.addRBI() }
                className='rbi-btn'
                >+</Button>
            </div>
            <Button
              onClick={ ()=> this.submitStats() }
              bsStyle='success'
              className='next-batter-btn'>
              Next Batter
            </Button>
          </div>
          {
            this.state.outCount >= 3 ?
            <div className="modal-box">
              <h4>3 outs!</h4>
              <p>Waiting for the next inning...</p>
              <Button
                bsStyle='success'
                onClick={ () => this.resetOuts() }>
                Start Next Inning
              </Button>
              <Button
                bsStyle='danger'
                onClick={ () => this.setState({ fireRedirect: true}) }>
                End Game
              </Button>
            </div>
            :
              <div></div>
          }
          {
            this.state.fireRedirect && (<Redirect to='/gamestats' />)
          }
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { updatePlayerStats })(InGame)
