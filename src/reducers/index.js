import { combineReducers } from 'redux'
import { GET_TEAM } from '../actions'

function myTeam(state = [], action) {
  switch (action.type) {
    case GET_TEAM:
      return action.team
    default:
      return state
  }
}

const rootReducer = combineReducers({ myTeam })

export default rootReducer
