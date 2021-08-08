import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class HomeNav extends Component {
  render() {
    return (
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="#Unansqs"
        style={{ marginTop: "10px", fontSize: "20px" }}
      >
        <Nav.Item>
          <Nav.Link href="#Unansqs">Unanswered Polls</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Ansqs">Answered Polls</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default HomeNav;
