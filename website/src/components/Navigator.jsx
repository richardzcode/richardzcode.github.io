import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Lead
} from 'bootstrap-4-react';

export default class Navigator extends Component {
  render() {
    return (
      <Navbar expand="xs" dark bg="dark" fixed="top">
        <Navbar.Toggler target="#navbarsExampleDefault" />
        <Navbar.Nav flex="row">
          <Nav.ItemLink href="https://github.com/richardzcode" mx="2">
            GitHub
          </Nav.ItemLink>
          <Nav.ItemLink href="https://www.linkedin.com/in/richardzcode/" mx="2">
            LinkedIn
          </Nav.ItemLink>
        </Navbar.Nav>

        <Navbar.Collapse id="navbarsExampleDefault">
          <Lead mt="2" text="light">
            coder, explorer, cell phone photographer.
          </Lead>
          <Lead text="light" style={{ fontSize: '0.9em' }}>
            Enjoy building software. Enjoy helping. Making the world a better place.
          </Lead>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
