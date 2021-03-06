import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Col } from 'react-bootstrap'
import { Doughnut, Bar } from 'react-chartjs-2';

const ChartModal = ({ teamStats, showModal, toggleModal, id }) => {
  let player = findPlayerById(teamStats, id)[0] || {}
  let barOptions ={
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          },
          title: {
            display: true,
            text: 'Averages',
            fontSize: 20
          }
        }
  let doughnutOptions = {
    title: {
      display: true,
      text: 'Spread of Hit Types',
      fontSize: 20
    }
  }
  return (
    <Modal
      show={ showModal }
      onHide={ toggleModal }
      bsSize="large"
      aria-labelledby="contained-modal-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">
          Statistics for: <strong>{player.name}</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='chart-content'>
          <Col sm={12} md={6}>
            <Doughnut
              data={ doughnutData(player) }
              height={250}
              options={ doughnutOptions }
            />
          </Col>
          <Col sm={12} md={6}>
            <Bar
              data={ barData(teamStats, player) }
              options={ barOptions }
              height={250}
            />
          </Col>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ toggleModal }>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function mapStateToProps(state) {
  return {
    teamStats: state.teamStats
  }
}

export default connect(mapStateToProps, null)(ChartModal)

function findPlayerById(teamStats, id) {
  return teamStats.filter((player) => {
    return player.id === id
  })
}

function doughnutData(data) {
  return {
    datasets: [{
      data: [data.single, data.double, data.triple, data.homerun, data.walk],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#36A2EB'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#36A2EB'
      ]
    }],
    labels: ['Single', 'Double', 'Triple', 'Homerun', 'Walk']
  }
}

function barData(teamStats, player) { // need
  let teamAVG = (sumStat(teamStats, 'avg')/teamStats.length).toFixed(3)
  let teamOBP = (sumStat(teamStats, 'obp')/teamStats.length).toFixed(3)
  let teamSLG = (sumStat(teamStats, 'slg')/teamStats.length).toFixed(3)
  return {
    datasets: [{
      label: 'Player',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [player.avg, player.slg, player.obp]
    },{
      label: 'Team',
      backgroundColor: 'rgba(99, 129, 255, 0.2)',
      borderColor: 'rgba(99, 129, 255, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(99, 129, 255, 0.2)',
      hoverBorderColor: 'rgba(99, 129, 255, 1)',
      data: [teamAVG, teamSLG, teamOBP]
    }],
    labels: ['Batting Average', 'Slugging %', 'On Base %'],
    ticks: {
      min: 0
    }
  }
}

function sumStat(allGames, typeOfStat) {
  return (
    allGames.reduce((acc, game) => {
      return acc += Number(game[typeOfStat])
    }, 0)
  )
}
