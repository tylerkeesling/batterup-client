import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Collapse>
          <Nav>

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
