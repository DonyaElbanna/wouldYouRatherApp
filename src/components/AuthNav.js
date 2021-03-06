import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Image } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

class AuthNav extends Component {
  redirect = () => {
    if (!this.props.authedUser) {
      alert("You have to sign in first!");
    }
  };

  render() {
    const location = this.props.history.location.pathname;

    return (
      <Navbar
        id="navig"
        bg="primary"
        variant="dark"
        style={{ marginTop: "5px", height: "65px" }}
      >
        <Navbar.Brand style={{ fontSize: "30px" }}>
          <Image
            src="/wydpic.png"
            style={{
              width: "100px",
              height: "60px",
              marginLeft: "40px",
              marginRight: "10px",
            }}
          />
          Welcome!
        </Navbar.Brand>
        <Nav
          className="text-center m-auto"
          style={{ fontSize: "25px" }}
          activeKey={
            location === "/home" || location === "/"
              ? "/home"
              : location === "/add"
              ? "/add"
              : location === "/leaderboard"
              ? "/leaderboard"
              : "/home"
          }
        >
          <Nav.Link
            as={NavLink}
            to="/home"
            onClick={this.redirect}
            style={{ marginRight: "50px" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/add"
            onClick={this.redirect}
            style={{ marginRight: "50px" }}
          >
            Add Poll
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/leaderboard"
            onClick={this.redirect}
            style={{ marginRight: "50px" }}
          >
            Leaderboard
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps)(withRouter(AuthNav));
