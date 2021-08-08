import React, { Component } from "react";
import { Card, ListGroup, Badge, Button } from "react-bootstrap";

class Leaderboard extends Component {
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <Card style={{ width: "30rem" }} className="m-auto">
          <Card.Header
            className="text-center"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Leaderboard
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item style={{ marginTop: "10px" }}>
              <Badge
                pill
                bg="warning"
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                1st
              </Badge>
              User1
              <span style={{ display: "flex" }}>
                <Button variant="outline-dark" style={{ marginLeft: "auto" }}>
                  Score
                </Button>
              </span>
            </ListGroup.Item>
            <ListGroup.Item style={{ marginTop: "10px" }}>
              <Badge
                pill
                bg="secondary"
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                2nd
              </Badge>
              User2
              <span style={{ display: "flex" }}>
                <Button variant="outline-dark" style={{ marginLeft: "auto" }}>
                  Score
                </Button>
              </span>
            </ListGroup.Item>
            <ListGroup.Item style={{ marginTop: "10px" }}>
              <Badge
                pill
                bg="danger"
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                3rd
              </Badge>
              User2
              <span style={{ display: "flex" }}>
                <Button variant="outline-dark" style={{ marginLeft: "auto" }}>
                  Score
                </Button>
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default Leaderboard;
