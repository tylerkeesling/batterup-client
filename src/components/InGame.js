import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePlayerStats } from '../actions'
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import Spinner from 'react-spinkit'
import NavBar from './NavBar'

class InGame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      outCount: 0,
      rbi: 0,
      hitType: 'out'
    }
  }

  findBatterName(index) {
    let batter = this.props.myTeam.filter(player => {
      return player.id === this.props.gameRoster[index].player_id ? player : null
    })
    return batter[0].name
  }

  getHitType(event) {
    this.setState({})
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

  submitStats() {
    console.log('hello');
    let test = {
	    "id": 23,
	    "at_bat": 1,
	    "single": 1
    }
    console.log(test);
    this.props.updatePlayerStats(test)
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
                <ToggleButton className='hit-button homerun-btn' value='homerun'>Homerun</ToggleButton>
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
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { updatePlayerStats })(InGame)


// <div className='rbi-box'>
//   <span className='hit-selection-text'>RBI(s):</span>
//   <div className='rbi-count-box'>
//     <Button
//       onClick={ () => this.subtractRBI() }
//       className='rbi-btn'
//     >-</Button>
//   <div className='rbi-text'>{ this.state.rbi }</div>
//     <Button
//       onClick={ () => this.addRBI() }
//       className='rbi-btn'
//     >+</Button>
//   </div>
// </div>
