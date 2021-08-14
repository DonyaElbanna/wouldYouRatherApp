import React, { Component } from 'react';
import { Navbar, Nav, Image } from "react-bootstrap";

class AuthNav extends Component {
  render() {
    return (
        <Navbar id='navig' bg="primary" variant="dark" style={{ marginTop: "5px", height:'65px' }}>
          <Navbar.Brand href="#home" style={{ fontSize: "30px", }}>
            <Image
              src="/wydpic.png"
              style={{ width: "100px", height: "60px", marginLeft: "40px", marginRight: '10px' }}
            />
            Welcome!
          </Navbar.Brand>
          <Nav className="text-center m-auto" style={{ fontSize: "25px" }} defaultActiveKey="#home">
            <Nav.Link href="#home" style={{ marginRight: "50px" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#add" style={{ marginRight: "50px" }}>
              Add a Poll
            </Nav.Link>
            <Nav.Link href="#leaderboard" style={{ marginRight: "50px" }}>
              Leaderboard
            </Nav.Link>
          </Nav>
      </Navbar>
    );
  }
}

export default AuthNav;