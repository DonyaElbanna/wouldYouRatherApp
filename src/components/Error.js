import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Error extends Component {
  componentDidMount() {
    //to hide Navig compoenent on error page
    document.getElementById("navig").style.display = "none";
  }

  componentWillUnmount() {
    document.getElementById("navig").style.display = "flex";
  }

  render() {
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
          <Button href="#home">Go Home</Button>
        </div>
      </div>
    );
  }
}

export default Error;
