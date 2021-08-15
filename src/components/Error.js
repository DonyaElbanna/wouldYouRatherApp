import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom'

class Error extends Component {
  componentDidMount() {
    //to hide Navig compoenent on error page
    document.getElementById("navig").style.display = "none";
  }

  componentWillUnmount() {
    document.getElementById("navig").style.display = "flex";
  }

  render() {
    console.log(this.props)
    return (
      <div style={{ backgroundColor: "#f7faf8" }}>
        <img
          src="/error.png"
          alt="pageNotFound"
          style={{
            width: "70%",
            height: "85vh",
            display: "flex",
            margin: "auto",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button as={NavLink} to="/home">
            Go Home
          </Button>
        </div>
      </div>
    );
  }
}

export default Error;
