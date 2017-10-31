import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeamStats } from '../actions'
import ReactTable from 'react-table'
import NavBar from './NavBar'
import ChartModal from './ChartModal'
import _ from "lodash";
import 'react-table/react-table.css'
import io from 'socket.io-client'

const socket = io('https://agile-wave-60105.herokuapp.com/')

class GameStats extends Component {
  constructor(props) {
    super(props)
    this.props.fetchTeamStats()
    socket.on('submitPlayerData', data => {
      this.props.fetchTeamStats()
    })

    this.state = {
      showModal: false,
      selectedPlayerId: 0
    }
  }

  toggleModal(id) {
    this.state.showModal ?
      this.setState({ showModal: false })
    :
      this.setState({ showModal: true,
                     selectedPlayerId: id
                   })
  }

  render() {

    const columns = [
      {
        Header: 'id',
        accessor: 'id',
        show: false,
        style: { textAlign: 'center'}
      }, {
        Header: 'Name',
        accessor: 'name',
        style: { textAlign: 'center'}
      },{
        Header: 'GP',
        accessor: 'gp',
        maxWidth: 55,
        style: { textAlign: 'center'}
      }, {
        Header: 'AB',
        accessor: 'ab',
        maxWidth: 55,
        style: { textAlign: 'center'}
      }, {
        Header: 'H',
        accessor: 'hits',
        maxWidth: 55,
        style: { textAlign: 'center'}
      }, {
        Header: '1B',
        accessor: 'single',
        maxWidth: 55,
        style: { textAlign: 'center'}
      }, {
        Header: '2B',
        accessor: 'double',
        maxWidth: 55,
        style: { textAlign: 'center'}
      }, {
        Header: '3B',
        accessor: 'triple',
        maxWidth: 55,
        style: { textAlign: 'center'}
      }, {
        Header: 'HR',
        accessor: 'homerun',
        maxWidth: 55,
        style: { textAlign: 'center'}
      }, {
        Header: 'BB',
        accessor: 'walk',
        maxWidth: 55,
        style: { textAlign: 'center'}
      }, {
        Header: 'AVG',
        accessor: 'avg',
        style: { textAlign: 'center'},
        Footer: (
                  <span>
                    <strong>Avg:</strong>{" "}
                    {_.round(_.mean(_.map(this.props.teamStats, d => Number(d.avg))), 3)}
                  </span>
                )
      }, {
        Header: 'SLG',
        accessor: 'slg',
        style: { textAlign: 'center'},
        Footer: (
                  <span>
                    <strong>Avg:</strong>{" "}
                    {_.round(_.mean(_.map(this.props.teamStats, d => Number(d.slg))), 3)}
                  </span>
                )
      }, {
        Header: 'OBP',
        accessor: 'obp',
        style: { textAlign: 'center'},
        Footer: (
                  <span>
                    <strong>Avg:</strong>{" "}
                    {_.round(_.mean(_.map(this.props.teamStats, d => Number(d.obp))), 3)}
                  </span>
                )
      }
    ]

    return (
      <div className='content'>

        <NavBar />

        {
            <ChartModal
              id={ this.state.selectedPlayerId }
              toggleModal={ this.toggleModal.bind(this) }
              showModal={ this.state.showModal }
            />
        }

        <ReactTable
          className='-striped -highlight stats-table'
          data={this.props.teamStats}
          columns={columns}
          defaultPageSize={ 11 }
          getTdProps={(state, player, col, inst) => {
            return { onClick: event => { this.toggleModal(player.original.id) } }
          }}
        />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { fetchTeamStats })(GameStats)
