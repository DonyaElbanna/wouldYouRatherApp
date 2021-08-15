import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import {
  Card,
  Button,
  Row,
  Col,
  Form,
  Badge,
  ProgressBar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { formatQuestion } from "../utils/helpers";
import Error from "./Error";

function mapStateToProps({ authedUser, questions, users }, { match }) {
  const id = match.params.question_id;
  const question = questions[id];
  let error = false;

  if (question === undefined) {
    error = true;
    return {
      error,
    };
  } else {
    error = false;
  }

  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser),
    error,
  };
}

class Vote extends Component {
  state = { answer: "" };

  chooseOption = (e) => {
    this.setState({ answer: e.target.value });
    // console.log(this.state.answer);
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

  render() {
    const { authedUser, question, error } = this.props;

    if (error === true) {
      return <Error />;
    }

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
      userVoteTwo,
      totalVotes,
    } = question;

    const voteOnePer = ((votesOne / totalVotes) * 100).toFixed(1);
    const voteTwoPer = ((votesTwo / totalVotes) * 100).toFixed(1);
    // console.log('Per: ', voteOnePer, voteTwoPer)
    const { answer } = this.state;

    //console.log("Vote data: ", this.props);

    let userVote = "";
    if (userVoteOne.includes(authedUser)) {
      userVote = "optionOne";
    } else if (userVoteTwo.includes(authedUser)) {
      userVote = "optionTwo";
    }

    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Go Back
      </Tooltip>
    );

    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Card style={{ width: "40rem" }} border="primary" className="m-auto">
          <Card.Body>
            <Row className="align-items-center justify-content-md-center">
              <Col md="auto" style={{ marginLeft: "20px" }}>
                <img
                  src={avatar}
                  alt={`Avatar of ${name}`}
                  width="90"
                  height="90"
                  style={{ marginBottom: "20px" }}
                />
                <Card.Subtitle className="mb-2 text-muted">
                  {name} is asking:
                </Card.Subtitle>
              </Col>
              <Col style={{ marginLeft: "20px" }}>
                <Card.Title
                  style={{ marginTop: "5px", fontSize: "25px" }}
                  className="mb-2"
                >
                  Would your rather
                </Card.Title>
                {!userVoteOne.includes(authedUser) &&
                !userVoteTwo.includes(authedUser) ? (
                  <div>
                    <Form
                      onSubmit={this.submitVote}
                      style={{ marginTop: "40px", marginLeft: "50px" }}
                    >
                      <Form.Check
                        onChange={this.chooseOption}
                        type="radio"
                        label={optionOne}
                        value="optionOne"
                        name="vote"
                        style={{ marginTop: "40px", fontSize: "20px" }}
                      />
                      <div style={{ fontSize: "19px", marginTop: "20px" }}>
                        Or
                      </div>
                      <Form.Check
                        onChange={this.chooseOption}
                        type="radio"
                        label={optionTwo}
                        value="optionTwo"
                        name="vote"
                        style={{ marginTop: "20px", fontSize: "20px" }}
                      />
                      <Button
                        type="submit"
                        variant="danger"
                        style={{ marginTop: "60px" }}
                        disabled={answer === ""}
                        onClick={this.showResult}
                      >
                        Vote
                      </Button>
                    </Form>
                  </div>
                ) : (
                  <div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        border: "2px solid blue",
                        borderRadius: "5px",
                        marginTop: "20px",
                        paddingLeft: "5px",
                        backgroundColor:
                          userVote === "optionOne" ? "#fcdf5b" : "white",
                      }}
                    >
                      {optionOne}
                      {userVote === "optionOne" ? (
                        <Badge pill bg="danger" style={{ marginLeft: "10px" }}>
                          Your Choice
                        </Badge>
                      ) : null}
                      <ProgressBar
                        striped
                        style={{ height: "20px", margin: "5px" }}
                        variant="primary"
                        now={votesOne}
                        label={`${voteOnePer}%`}
                        max={totalVotes}
                      ></ProgressBar>
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {votesOne} out of {totalVotes}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        border: "2px solid blue",
                        borderRadius: "5px",
                        marginTop: "15px",
                        paddingLeft: "5px",
                        backgroundColor:
                          userVote === "optionTwo" ? "#fcdf5b" : "white",
                      }}
                    >
                      {optionTwo}
                      {userVote === "optionTwo" ? (
                        <Badge pill bg="danger" style={{ marginLeft: "10px" }}>
                          Your Choice
                        </Badge>
                      ) : null}
                      <ProgressBar
                        striped
                        style={{ height: "20px", margin: "5px" }}
                        variant="primary"
                        now={votesTwo}
                        label={`${voteTwoPer}%`}
                        max={totalVotes}
                      ></ProgressBar>
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {votesTwo} out of {totalVotes}
                      </span>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Button href="#home">&#10094;</Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Vote);
