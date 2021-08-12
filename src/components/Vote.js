import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { Card, Button, Row, Col, Form, Badge, ProgressBar} from "react-bootstrap";
import { formatQuestion } from "../utils/helpers";

function mapStateToProps({ authedUser, questions, users }, { match }) {
  const id = match.params.question_id;
  const question = questions[id];
  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser)
  };
}

class Vote extends Component {
  state = { answer: "", showPoll: false };

  chooseOption = (e) => {
    this.setState({ answer: e.target.value });
    console.log(this.state.answer);
  };

  submitVote = (e) => {
    e.preventDefault();

    const { dispatch, authedUser, question } = this.props;
    const { answer } = this.state;

    dispatch(
      handleAddAnswer({
        authedUser,
        qid: question.id,
        answer: answer,
      })
    );
  };

  showResult = () => {
    document.getElementById("result").style.display = "block";
    document.getElementById("question").style.display = "none";

  };

  render() {
    const {
      authedUser,
      question
    } = this.props;

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

    const { answer, showPoll } = this.state

    //console.log("Vote  data: ", this.props);

    let userVote = ''
    if(userVoteOne.includes(authedUser)) {
      userVote='optionOne'
    } else if (userVoteTwo.includes(authedUser)) {
      userVote = 'optionTwo'
    }

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
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                />
                <Card.Subtitle className="mb-2 text-muted">
                  {name} is asking:
                </Card.Subtitle>
              </Col>
              <Col md={{ span: 6, offset: 2 }}>
                <Card.Title style={{ marginTop: "5px" }} className="mb-2">
                  Would your rather
                </Card.Title>
                <div id='question' style={{display: 'block'}}>
                <Form onSubmit={this.submitVote} style={{ marginTop: "40px" }}>
                  <Form.Check
                    onChange={this.chooseOption}
                    type="radio"
                    label={optionOne}
                    value="optionOne"
                    name="vote"
                    style={{ marginTop: "40px" }}
                  />
                  <Form.Check
                    onChange={this.chooseOption}
                    type="radio"
                    label={optionTwo}
                    value="optionTwo"
                    name="vote"
                    style={{ marginTop: "30px" }}
                  />
                  <Button
                    type="submit"
                    style={{ marginTop: "60px" }}
                    disabled={answer === ""}
                    onClick={this.showResult}
                  >
                    Vote
                  </Button>
                </Form>
                </div>
              </Col>
          <Row id="result" style={{ marginTop: "20px", display: 'none' }}>
            <Col md='auto'>
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

export default connect(mapStateToProps)(Vote);
