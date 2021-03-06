import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/dashboard'><NavItem>Dashboard</NavItem></LinkContainer>
            <LinkContainer to='/gamestats'><NavItem>Game Stats</NavItem></LinkContainer>
            <LinkContainer to='/createroster'><NavItem>Game On!</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Edit Profile
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
