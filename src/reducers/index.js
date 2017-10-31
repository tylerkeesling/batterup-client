import { combineReducers } from 'redux'
import { GET_TEAM, GET_TEAM_STATS, POST_GAME_ROSTER, PUT_PLAYER_GAME } from '../actions'

function myTeam(state = [], action) {
  switch (action.type) {
    case GET_TEAM:
      return action.team
    default:
      return state
  }
}

function teamStats(state = [], action) {
  switch (action.type) {
    case GET_TEAM_STATS:
      return action.teamStats
    default:
      return state
  }
}

function gameRoster(state = [], action) {
  switch(action.type) {
    case POST_GAME_ROSTER:
      return action.gameRoster
    case PUT_PLAYER_GAME:
      return [...state, ...action.playerGameStats].slice(1)
    default:
      return state
  }
}

const rootReducer = combineReducers({ myTeam, teamStats, gameRoster })

export default rootReducer
