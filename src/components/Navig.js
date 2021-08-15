import React, { Component } from "react";
import { connect } from "react-redux";
import { removeAuthedUser } from "../actions/authedUser";
import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

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
    this.props.history.push("/");
  }; //when user logout, they'll be redirected to the loginpage

  render() {
    const { name, avatar } = this.props;
    // console.log("Nav Data: ", this.props);
    // console.log(this.props.history.location.pathname)

    //to match and highlight the navbar item with the url
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
            src={avatar}
            style={{
              width: "60px",
              height: "60px",
              marginLeft: "40px",
              marginRight: "10px",
            }}
            roundedCircle
          />
          {`Hi, ${name}!`}
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
          <Nav.Link as={NavLink} to="/home" style={{ marginRight: "50px" }}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add" style={{ marginRight: "50px" }}>
            Add Poll
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/leaderboard"
            style={{ marginRight: "50px" }}
          >
            Leaderboard
          </Nav.Link>
        </Nav>
        <Button
          onClick={this.logOut}
          style={{ fontSize: "18px", marginRight: "40px" }}
        >
          Logout
        </Button>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Navig));
