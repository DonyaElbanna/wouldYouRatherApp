import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion
    //,formatDate 
} from '../utils/helpers'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'

function mapStateToProps({authedUser, users, questions}, { id }) {
    const question = questions[id]
    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    };
}

class Question extends Component {

    state = {
        showPoll: false,
    }

    vote = (e, id) => {
        e.preventDefault()
        //adjust voting
    }


    render() {
        console.log(this.props)
        const {question} = this.props
        const {//id,
            name,
            //timestamp,
            avatar,
            optionOne,
            optionTwo,
            votesOne,
            votesTwo} = question
        const {showPoll} = this.state

        return (
          <div style={{ marginTop: "20px", marginBottom: '20px' }}>
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
                        width="70"
                        height="70"
                        style={{ marginTop: "50px", marginBottom: "20px" }}
                      />
                      <Card.Subtitle className="mb-2 text-muted">
                        {name} asks:
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
                        }}
                        onClick={(e) => this.vote(e)}
                      >
                        {optionOne}
                      </Button>
                      <Card.Title>Or</Card.Title>
                      <Button
                        variant="outline-secondary"
                        style={{ fontWeight: "bold", display: "block" }}
                        onClick={(e) => this.vote(e)}
                      >
                        {optionTwo}
                      </Button>
                    </Col>
                    <Row>
                      <Col></Col>
                      <Col>
                        <Button
                          variant="danger"
                          style={{ marginTop: "20px", marginBottom: "10px" }}
                          type="button"
                          onClick={() => this.setState({ showPoll: !showPoll })}
                        >
                          {showPoll ? "Hide" : "Show"} poll
                        </Button>
                        {showPoll ? (
                          <div>
                            <div>
                              <progress value={votesOne} max="5"></progress>
                              <span>{` ${votesOne}`}</span>
                            </div>
                            <div>
                              <progress value={votesTwo} max="5"></progress>
                              <span>{` ${votesTwo}`}</span>
                            </div>
                          </div>
                        ) : null}
                      </Col>
                    </Row>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Question);