import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeamStats } from '../actions'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

import NavBar from './NavBar'

class GameStats extends Component {
  constructor(props) {
    super(props)
    this.props.fetchTeamStats()

    this.options = {
      defaultSortName: 'name',  // default sort column name
      defaultSortOrder: 'asc'  // default sort order
    }

  }

  showModal(row) {
    console.log(row);
  }

  render() {
    const options = {
      onRowDoubleClick: this.showModal
    }
    return (
      <div className='content'>
        <NavBar />
        <div className='stats-table'>
          <BootstrapTable
            data={ this.props.teamStats }
            options={ options }
            striped
            hover
            exportCSV>
            <TableHeaderColumn dataField='id' width='40px' dataAlign='center' isKey dataSort>id</TableHeaderColumn>
            <TableHeaderColumn
              tdStyle={ { fontWeight: 'bold' } }
              thStyle={ { fontSize: '18px' } }
              dataField='name'
              width='105px'
              dataAlign='center'
              dataSort
            >Name</TableHeaderColumn>
            <TableHeaderColumn
              dataField='gp'
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >GP</TableHeaderColumn>
            <TableHeaderColumn
              dataField='ab'
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >AB</TableHeaderColumn>
            <TableHeaderColumn
              dataField='hits'
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >H</TableHeaderColumn>
            <TableHeaderColumn
              dataField='single'
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >1B</TableHeaderColumn>
            <TableHeaderColumn
              dataField='double'
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >2B</TableHeaderColumn>
            <TableHeaderColumn
              dataField='triple'
              thStyle={ { fontSize: '18px' } } dataAlign='center' dataSort>3B</TableHeaderColumn>
            <TableHeaderColumn
              dataField='homerun'
              thStyle={ { fontSize: '18px' } } dataAlign='center' dataSort>HR</TableHeaderColumn>
            <TableHeaderColumn dataField='walk' thStyle={ { fontSize: '18px' } } dataAlign='center' dataSort>BB</TableHeaderColumn>
            <TableHeaderColumn dataField='avg' thStyle={ { fontSize: '18px' } } dataAlign='center' dataSort>AVG</TableHeaderColumn>
            <TableHeaderColumn dataField='obp' thStyle={ { fontSize: '18px' } } dataAlign='center' dataSort>OBP</TableHeaderColumn>
            <TableHeaderColumn dataField='slg' thStyle={ { fontSize: '18px' } } dataAlign='center' dataSort>SLG</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { fetchTeamStats })(GameStats)
