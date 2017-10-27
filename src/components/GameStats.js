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
            <TableHeaderColumn dataField='id'
              width='40px'
              dataAlign='center'
              isKey
              dataSort
            >id</TableHeaderColumn>
            <TableHeaderColumn
              tdStyle={ { fontSize: '14px' } }
              thStyle={ { fontSize: '18px' } }
              dataField='name'
              width='120px'
              dataAlign='center'
              dataSort
            >Name</TableHeaderColumn>
            <TableHeaderColumn
              dataField='gp'
              tdStyle={ { fontSize: '16px' } }
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >GP</TableHeaderColumn>
            <TableHeaderColumn
              dataField='ab'
              tdStyle={ { fontSize: '16px' } }
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >AB</TableHeaderColumn>
            <TableHeaderColumn
              dataField='hits'
              tdStyle={ { fontSize: '16px' } }
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >H</TableHeaderColumn>
            <TableHeaderColumn
              dataField='single'
              tdStyle={ { fontSize: '16px' } }
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >1B</TableHeaderColumn>
            <TableHeaderColumn
              dataField='double'
              tdStyle={ { fontSize: '16px' } }
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >2B</TableHeaderColumn>
            <TableHeaderColumn
              dataField='triple'
              tdStyle={ { fontSize: '16px' } }
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >3B</TableHeaderColumn>
            <TableHeaderColumn
              dataField='homerun'
              tdStyle={ { fontSize: '16px' } }
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >HR</TableHeaderColumn>
            <TableHeaderColumn
              dataField='walk'
              tdStyle={ { fontSize: '16px' } }
              thStyle={ { fontSize: '18px' } }
              dataAlign='center'
              dataSort
            >BB</TableHeaderColumn>
            <TableHeaderColumn
              dataField='avg'
              tdStyle={ { fontSize: '16px' } }
              thStyle={ { fontSize: '18px' } }
              dataAlign='center' dataSort
            >AVG</TableHeaderColumn>
            <TableHeaderColumn
              dataField='obp'
              tdStyle={ { fontSize: '16px' } }
              thStyle={ { fontSize: '18px' } }
              dataAlign='center' dataSort
            >OBP</TableHeaderColumn>
            <TableHeaderColumn
              dataField='slg'
              tdStyle={ { fontSize: '16px' } }
              thStyle={ { fontSize: '18px' } }
              dataAlign='center' dataSort
            >SLG</TableHeaderColumn>
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
