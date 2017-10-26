export const GET_TEAM = 'GET_TEAM'

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
      .then(json => {
        return json
      })
      .then(json => dispatch(getTeam(json)))
      .catch(err => console.log('catch', err))
  }
}
