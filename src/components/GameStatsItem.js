import React, { Component } from 'react'

class GameStatsItem extends Component {
  sumStat(allGames, typeOfStat) {
    return (
      allGames.reduce((acc, game) => {
        return acc += game[typeOfStat]
      }, 0)
    )
  }

  battingAverage(player) { // walks + hits / at-bats; at-bats do not count walks
    let walks = this.sumStat(player.stats, 'walk')
    let hits = this.sumStat(player.stats, 'single') + this.sumStat(player.stats, 'double') + this.sumStat(player.stats, 'triple') + this.sumStat(player.stats, 'homerun')
    let atBats = this.sumStat(player.stats, 'at_bat')
    return ((walks + hits) / atBats).toFixed(3)
  }

  onBasePercentage(player) { // walks + hits / at-bats + walks
    let walks = this.sumStat(player.stats, 'walk')
    let hits = this.sumStat(player.stats, 'single') + this.sumStat(player.stats, 'double') + this.sumStat(player.stats, 'triple') + this.sumStat(player.stats, 'homerun')
    let atBats = this.sumStat(player.stats, 'at_bat')
    return ((walks + hits) / (atBats + walks)).toFixed(3)
  }

  sluggingPercentage(player) { // (Singles + Doubles x 2 + Triples x 3 + Home Runs x 4)/At Bats
    let hits = this.sumStat(player.stats, 'single') + this.sumStat(player.stats, 'double')*2 + this.sumStat(player.stats, 'triple')*3 + this.sumStat(player.stats, 'homerun')*4
    let atBats = this.sumStat(player.stats, 'at_bat')
    return (hits / atBats).toFixed(3)
  }

  render() {
    return (
      <tr>
        <td>1</td>
        <td>Tyler Keesling</td>
      </tr>
    )
  }
}

export default GameStatsItem
