import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Card, Button, Form } from "react-bootstrap";

class Addq extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  changeOptionOne = (e) => {
    const optionOne = e.target.value;
    this.setState(() => ({
      optionOne,
    }));
  };

  changeOptionTwo = (e) => {
    const optionTwo = e.target.value;
    this.setState(() => ({
      optionTwo,
    }));
  };

  submitPoll = (e) => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    //console.log("The poll is: ", this.state);
    dispatch(handleAddQuestion(optionOne, optionTwo));

    //resetting input fields after submitting
    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
    }));
  };

  render() {
    const { optionOne, optionTwo } = this.state;

    return (
      <div style={{ marginTop: "30px" }}>
        <Card className="m-auto" style={{ width: "30rem" }}>
          <Card.Header
            className="text-center"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Add a poll question
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ marginTop: "30px" }}>
              Would you rather
            </Card.Text>
            <Form onSubmit={this.submitPoll}>
              <Form.Group className="mb-3" controlId="optionOne">
                <Form.Control
                  placeholder="Option One"
                  value={optionOne}
                  onChange={this.changeOptionOne}
                />
              </Form.Group>
              <Card.Text>Or</Card.Text>
              <Form.Group className="mb-3" controlId="optionTwo">
                <Form.Control
                  placeholder="Option Two"
                  value={optionTwo}
                  onChange={this.changeOptionTwo}
                />
              </Form.Group>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="danger"
                  type="submit"
                  disabled={optionOne === "" || optionTwo === ""}
                >
                  Submit
                </Button>
              </div>
              <footer
                className="blockquote-footer"
                style={{ marginTop: "18px" }}
              >
                To view your newly created poll, go to the home page.
              </footer>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default connect()(Addq);
