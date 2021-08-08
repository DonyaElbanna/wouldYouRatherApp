import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class HomeNav extends Component {
  render() {
    return (
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="#Unq"
        style={{ marginTop: "10px", fontSize: "20px" }}
      >
        <Nav.Item>
          <Nav.Link href="#Unq">Unanswered Polls</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Aq">Answered Polls</Nav.Link>{" "}
        </Nav.Item>
      </Nav>
    );
  }
}

export default HomeNav;
