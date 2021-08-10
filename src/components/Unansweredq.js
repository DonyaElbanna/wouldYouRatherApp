import React, { Component } from "react";
import { connect } from "react-redux";
import {formatQuestion} from "../utils/helpers";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser),
  };
}

class Question extends Component {

  render() {

    const { question } = this.props;
    // console.log("Unanswered questions: ", this.props);

    const {
      //id,
      name,
      //timestamp,
      avatar,
      optionOne,
      optionTwo,
    //   votesOne,
    //   votesTwo,
    } = question;

    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Card
          style={{ width: "40rem", height: "20rem" }}
          border="primary"
          className="m-auto"
        >
          <Card.Body>
            <Container>
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
                    variant="outline-secondary"
                    style={{
                      fontWeight: "bold",
                      marginTop: "20px",
                      marginBottom: "10px",
                    }} >
                    {optionOne}
                  </Button>
                  <Card.Title>Or</Card.Title>
                  <Button
                    variant="outline-secondary"
                    style={{ fontWeight: "bold", display: "block" }} >
                    {optionTwo}
                  </Button>
                </Col>
                <Button href={`#questions/:${question.id}`} style={{marginTop: '35px'}}>
                    Take Poll
                </Button>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Question);