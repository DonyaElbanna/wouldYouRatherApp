import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  ListGroup,
  Badge,
  Image,
  Button,
  Row,
  Col,
} from "react-bootstrap";

//getting users info and sorting them according to score
function mapStateToProps({ authedUser, users }) {
  const usersList = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatar: user.avatarURL,
      numberAsked: user.questions.length,
      numberAnswered: Object.keys(user.answers).length,
      score: user.questions.length + Object.keys(user.answers).length,
    }))
    .sort((a, b) => b.score - a.score);
  return {
    authedUser,
    usersList,
  };
}

class Leaderboard extends Component {
  //to show detailed score(number of questions added and taken)
  state = { showDetails: false };

  render() {
    const { authedUser, usersList } = this.props;
    // console.log("Leaderboard Data: ", this.props);

    const { showDetails } = this.state;

    return (
      <div style={{ marginTop: "30px" }}>
        <Card style={{ width: "30rem" }} className="m-auto">
          <Card.Header
            className="text-center"
            style={{ fontSize: "23px", fontWeight: "bold" }}
          >
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Leaderboard
            </Row>
            <Row>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => this.setState({ showDetails: !showDetails })}
                >
                  {showDetails ? "Hide" : "Show"} Detailed Scores
                </Button>
              </div>
            </Row>
          </Card.Header>
          <ListGroup variant="flush">
            {usersList.map((user, index) => (
              <ListGroup.Item
                key={user.id}
                style={{
                  marginTop: "10px",
                  backgroundColor: authedUser === user.id ? "#dae2e8" : null,
                }}
              >
                {index === 0 ? (
                  <Row>
                    <Col>
                      <Badge
                        pill
                        id="badge"
                        bg="warning"
                        style={{
                          fontSize: "17px",
                          fontWeight: "bold",
                          marginRight: "10px",
                          width: "53px",
                        }}
                      >
                        1st
                      </Badge>
                    </Col>
                  </Row>
                ) : index === 1 ? (
                  <Row>
                    <Col>
                      <Badge
                        pill
                        bg="secondary"
                        style={{
                          fontSize: "17px",
                          fontWeight: "bold",
                          marginRight: "10px",
                        }}
                      >
                        2nd
                      </Badge>
                    </Col>
                  </Row>
                ) : index === 2 ? (
                  <Row>
                    <Col>
                      <Badge
                        pill
                        bg="danger"
                        style={{
                          fontSize: "17px",
                          fontWeight: "bold",
                          marginRight: "10px",
                        }}
                      >
                        3rd
                      </Badge>
                    </Col>
                  </Row>
                ) : null}

                <Row>
                  <div id="badge"></div>
                  <Col md="auto">
                    <Image
                      rounded
                      src={user.avatar}
                      alt={`Avatar of ${user.name}`}
                      width="90"
                      height="90"
                      style={{ marginBottom: "20px", marginLeft: "20px" }}
                    />
                  </Col>
                  <Col></Col>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "30px",
                    }}
                  >
                    <Card
                      style={{
                        backgroundColor: "#b8c3d1",
                        fontSize: "30px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      <Card.Header style={{ fontSize: "25px" }}>
                        Score
                      </Card.Header>
                      {user.score}
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Title style={{ marginLeft: "20px" }}>
                      {user.name}
                    </Card.Title>
                  </Col>
                  <Col md="auto"></Col>

                  {showDetails ? (
                    <div>
                      <Card
                        style={{
                          backgroundColor: "#b8c3d1",
                          marginTop: "10px",
                        }}
                      >
                        <Card.Header
                          className="text-center"
                          style={{ fontSize: "17px", fontWeight: "bold" }}
                        >
                          Detailed Score
                        </Card.Header>
                        <Card.Title
                          style={{ marginLeft: "5px", marginTop: "5px" }}
                        >
                          Polls Added: {user.numberAsked}
                        </Card.Title>
                        <Card.Title style={{ marginLeft: "5px" }}>
                          Polls Taken: {user.numberAnswered}
                        </Card.Title>
                      </Card>
                    </div>
                  ) : null}
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Leaderboard);
