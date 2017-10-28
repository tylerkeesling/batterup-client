export const GET_TEAM = 'GET_TEAM'
export const GET_TEAM_STATS = 'GET_TEAM_STATS'

const baseURL = 'http://localhost:8080/api/v1'
// const baseURL = 'https://agile-wave-60105.herokuapp.com/api/v1'
const teamId = 1

function getTeam(team) {
  return {
    type: GET_TEAM,
    team
  }
}

function fetchTeamJson() {
  return fetch(`${baseURL}/players/${teamId}`)
    .then(res => res.json())
}

export function fetchTeam() {
  return function(dispatch) {
    return fetchTeamJson()
      .then(json => dispatch(getTeam(json)))
      .catch(err => console.log('catch', err))
  }
}

// TEAM STATS

function getTeamStats(teamStats) {
  return {
    type: GET_TEAM_STATS,
    teamStats
  }
}

function fetchTeamStatsJson() {
  return fetch(`${baseURL}/playerstats/team/${teamId}`)
    .then(res => res.json())
}

export function fetchTeamStats() {
  return function(dispatch) {
    return fetchTeamStatsJson()
      .then(json => {
        return reformatTeamStats(json)
      })
      .then(json => dispatch(getTeamStats(json)))
      .catch(err => console.log('catch', err))
  }
}



function reformatTeamStats(json) {
  return json.map(player => {
    return ({
      'id': player.id,
      'name': player.name,
      'gp': player.stats.length,
      'ab': sumStat(player.stats, 'at_bat'),
      'hits': numOfHits(player),
      'single': sumStat(player.stats, 'single'),
      'double': sumStat(player.stats, 'double'),
      'triple': sumStat(player.stats, 'triple'),
      'homerun': sumStat(player.stats, 'homerun'),
      'walk': sumStat(player.stats, 'walk'),
      'avg': battingAverage(player),
      'obp': onBasePercentage(player),
      'slg': sluggingPercentage(player)
    })
  })
}

function sumStat(allGames, typeOfStat) {
  return (
    allGames.reduce((acc, game) => {
      return acc += game[typeOfStat]
    }, 0)
  )
}

function numOfHits(player) {
  return sumStat(player.stats, 'single') + sumStat(player.stats, 'double') + sumStat(player.stats, 'triple') + sumStat(player.stats, 'homerun')
}

function battingAverage(player) { // walks + hits / at-bats; at-bats do not count walks
  let walks = sumStat(player.stats, 'walk')
  let hits = sumStat(player.stats, 'single') + sumStat(player.stats, 'double') + sumStat(player.stats, 'triple') + sumStat(player.stats, 'homerun')
  let atBats = sumStat(player.stats, 'at_bat')
  return Number(((walks + hits) / atBats)).toFixed(3)
}

function onBasePercentage(player) { // walks + hits / at-bats + walks
  let walks = sumStat(player.stats, 'walk')
  let hits = sumStat(player.stats, 'single') + sumStat(player.stats, 'double') + sumStat(player.stats, 'triple') + sumStat(player.stats, 'homerun')
  let atBats = sumStat(player.stats, 'at_bat')
  return Number(((walks + hits) / (atBats + walks))).toFixed(3)
}

function sluggingPercentage(player) { // (Singles + Doubles x 2 + Triples x 3 + Home Runs x 4)/At Bats
  let hits = sumStat(player.stats, 'single') + sumStat(player.stats, 'double')*2 + sumStat(player.stats, 'triple')*3 + sumStat(player.stats, 'homerun')*4
  let atBats = sumStat(player.stats, 'at_bat')
  return Number((hits / atBats)).toFixed(3)
}
