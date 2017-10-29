import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeam, createGameRoster } from '../actions'
import { Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import NavBar from './NavBar'

class CreateRoster extends Component {
  constructor(props) {
    super(props)
    this.props.fetchTeam()

    this.state = {
      availableRoster: this.props.myTeam,
      gameRoster: [],
      fireRedirect: false
    }
  }

  addToGameRoster(selection) {
    this.setState({
      availableRoster: this.state.availableRoster.filter(player => player.id !== selection.id),
      gameRoster: [...this.state.gameRoster, this.state.availableRoster.find(player => player.id === selection.id)]
    })
  }

  removeFromGameRoster(selection) {
    this.setState({
      availableRoster: [...this.state.availableRoster, this.state.gameRoster.find(player => player.id === selection.id)],
      gameRoster: this.state.gameRoster.filter(player => player.id !== selection.id)
    })
  }

  startGame() {
    let player_ids = this.state.gameRoster.map(player => player.id)
    this.props.createGameRoster({players: player_ids})
    this.setState({ fireRedirect: true })
  }

  render() {
    return (
      <div className='content'>
        <NavBar />
        <Button
          bsStyle="success"
          bsSize="large"
          block
          onClick={ () => this.startGame() }>
          Select Team & Start Game!
        </Button>
        <Col xs={5} xsOffset={1}>
          <h4 style={ {textAlign:'center'} }>
            Your Team:
          </h4>
          <ListGroup>
            {
              this.state.availableRoster.map(player => {
                return (
                  <ListGroupItem
                    key={ player.id }
                    bsStyle='danger'
                    bsClass='roster-item list-group-item'
                    onClick={ ()=>this.addToGameRoster(player) }>
                    { player.name }
                  </ListGroupItem>
                )
              })
            }
          </ListGroup>
        </Col>
        <Col xs={5}>
          <h4 style={ {textAlign:'center'} }>
            Game Roster:
          </h4>
          <ListGroup>
            {
              this.state.gameRoster.map(player => {
                return (
                  <ListGroupItem
                    key={ player.id }
                    bsStyle='success'
                    bsClass='roster-item list-group-item'
                    onClick={ () => this.removeFromGameRoster(player) }>
                    { player.name }
                  </ListGroupItem>
                )
              })
            }
          </ListGroup>
        </Col>
        {
          this.state.fireRedirect && (<Redirect to='/ingame' />)
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { fetchTeam, createGameRoster })(CreateRoster)
