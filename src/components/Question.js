import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { Card, Button, Row, Col, ProgressBar, Badge } from "react-bootstrap";

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser),
  };
}

class Question extends Component {
  state = {
    showPoll: false,
  };

  render() {
    const { authedUser, question } = this.props;

    // console.log("Answered questions: ", this.props);

    const {
      //id,
      name,
      //timestamp,
      avatar,
      optionOne,
      optionTwo,
      votesOne,
      votesTwo,
      userVoteOne,
      userVoteTwo
    } = question;

    const { showPoll } = this.state;

    let userVote = ''
    if(userVoteOne.includes(authedUser)) {
      userVote='optionOne'
    } else if (userVoteTwo.includes(authedUser)) {
      userVote = 'optionTwo'
    }

    // console.log('USER VOTE: ', userVote)

    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Card
          style={{ width: "42rem"}}
          border="primary"
          className="m-auto"
        >
          <Card.Body>
              <Row className="align-items-center justify-content-md-center">
                <Col md="auto">
                  <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    width="90"
                    height="90"
                    style={{ marginTop: "50px", marginBottom: "20px" }}
                  />
                  <Card.Subtitle className="mb-2 text-muted">
                    {name} is asking:
                  </Card.Subtitle>
                </Col>
                <Col md={{ span: 6, offset: 2 }}>
                  <Card.Title style={{ marginTop: "5px" }} className="mb-2">
                    Would your rather
                  </Card.Title>
                  <Button
                    variant="outline-dark"
                    disabled
                    style={{
                      fontWeight: "bold",
                      marginTop: "20px",
                      marginBottom: "10px",
                    }}
                  >
                    {optionOne}
                  </Button>
                  <Card.Title>Or</Card.Title>
                  <Button
                    variant="outline-dark"
                    disabled
                    style={{ fontWeight: "bold", display: "block" }}
                  >
                    {optionTwo}
                  </Button>
                </Col>
                <Row style={{ marginTop: "20px" }}>
                  <Col md="auto">
                    <Button
                      variant="danger"
                      style={{ marginTop: "20px", marginBottom: "10px" }}
                      type="button"
                      onClick={() => this.setState({ showPoll: !showPoll })}
                    >
                      {showPoll ? "Hide" : "Show"} Result
                    </Button>
                  </Col>
                  <Col>
                    {showPoll ? (
                      <div style={{ marginLeft: "30px" }}>
                        <div style={{ fontSize: "20px" }}>
                          {optionOne}
                          {userVote === "optionOne" ? (
                            <Badge pill bg="warning" style={{ marginLeft: "20px" }}>
                              your choice
                            </Badge>
                          ) : null}
                          <ProgressBar
                            style={{ height: "20px" }}
                            variant="success"
                            now={votesOne}
                            label={votesOne}
                            max="5"
                          ></ProgressBar>
                        </div>
                        <div style={{ fontSize: "20px", marginTop: "10px" }}>
                          {optionTwo}
                          {userVote === "optionTwo" ? (
                            <Badge pill bg="warning" style={{ marginLeft: "20px" }}>
                              your choice
                            </Badge>
                          ) : null}
                          <ProgressBar
                            style={{ height: "20px" }}
                            variant="success"
                            now={votesTwo}
                            label={votesTwo}
                            max="5"
                          ></ProgressBar>
                        </div>
                      </div>
                    ) : null}
                  </Col>
                </Row>
              </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Question);
