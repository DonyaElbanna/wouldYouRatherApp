import React, { Component } from "react";
import { connect } from "react-redux";
//import { NavLink } from 'react-router-dom'
import { removeAuthedUser } from "../actions/authedUser";
import { Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

class Navig extends Component {
  logOut = () => {
    const { dispatch } = this.props;
    dispatch(removeAuthedUser());

    // this.props.history.push({
    //   pathname: '/',
    //   state: { from: '/home' },
    // });
  };

  render() {
    const { authedUser } = this.props;
    console.log("Nav Data: ", this.props);

    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: "25px" }}>
            {`Hi, ${authedUser}!`}
          </Navbar.Brand>
          <Nav style={{ fontSize: "20px" }} defaultActiveKey="#home">
            <Nav.Link href="#home" style={{ marginRight: "50px" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#add" style={{ marginRight: "50px" }}>
              Add a Poll
            </Nav.Link>
            <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
          </Nav>
          <Button onClick={this.logOut}>Logout</Button>
        </Container>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps)(Navig);
