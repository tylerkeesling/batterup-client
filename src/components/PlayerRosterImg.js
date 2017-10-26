import React, { Component } from 'react'

class PlayerRosterImg extends Component {
  constructor() {
    super()

    this.state = {
      hovered: false
    }
  }

  render() {
    return (
      <div
        className='player-item'
        onMouseEnter={ () => this.setState({ hovered: true }) }
        onMouseLeave={ () => this.setState({ hovered: false }) }
      >
        <img
          className={ this.state.hovered ? 'player-img darken-img' : 'player-img'}
          src={ this.props.player.photo }
          alt={ this.props.player.name }
        />
      <p className={ this.state.hovered ? 'player-text' : 'no-text' }>
          { this.props.player.name }
        </p>
      </div>
    )
  }
}

export default PlayerRosterImg
