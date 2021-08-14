import React, { Component } from "react";
import { connect } from "react-redux";
import { removeAuthedUser } from "../actions/authedUser";
import { Navbar, Nav, Image, Button, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function mapStateToProps({ authedUser, users }) {
  return {
    name: users[authedUser].name,
    avatar: users[authedUser].avatarURL,
  };
}

class Navig extends Component {
  logOut = () => {
    const { dispatch } = this.props;
    dispatch(removeAuthedUser());
    this.props.history.push("/login");
  };

  render() {
    const { name, avatar } = this.props;
    // console.log("Nav Data: ", this.props);

    return (
      <Navbar id='navig' bg="primary" variant="dark" style={{ marginTop: "5px" }}>
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
            <Image
              src={avatar}
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
              roundedCircle
            />
            {`Hi, ${name}!`}
          </Navbar.Brand>
          <Nav style={{ fontSize: "25px" }} defaultActiveKey="#home">
            <Nav.Link href="#home" style={{ marginRight: "50px" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#add" style={{ marginRight: "50px" }}>
              Add a Poll
            </Nav.Link>
            <Nav.Link href="#leaderboard" style={{ marginRight: "100px" }}>
              Leaderboard
            </Nav.Link>
          </Nav>
          <Button onClick={this.logOut} style={{ fontSize: "18px" }}>
            Logout
          </Button>
        </Container>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Navig));
