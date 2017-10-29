import React, { Component } from 'react'
import { connect } from 'react-redux'

class InGame extends Component {
  render() {
    return (
      <div className='content'>
        Hello
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gameRoster: state.gameRoster
  }
}

export default connect(mapStateToProps, null)(InGame)
