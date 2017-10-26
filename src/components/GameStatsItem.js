import React, { Component } from 'react'

class GameStatsItem extends Component {
  sumStat(allGames, typeOfStat) {
    return (
      allGames.reduce((acc, game) => {
        return acc += game[typeOfStat]
      }, 0)
    )
  }

  render() {
    return (
      <div>
        {
          console.log(this.sumStat(this.props.player.stats, 'at_bat'))
        }
      </div>
    )
  }
}

export default GameStatsItem
