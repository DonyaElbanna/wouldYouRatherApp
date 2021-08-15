import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Card, Button, Form } from "react-bootstrap";

class Addq extends Component {
  //state starting empty
  state = {
    optionOne: "",
    optionTwo: "",
  };

  //updating options in the state
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

    //adding the 2 options to the store
    dispatch(handleAddQuestion(optionOne, optionTwo));
    // alert('Your poll has been submitted!')
    this.props.history.push("/home");
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
            <Form>
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
                  onClick={this.submitPoll}
                  disabled={optionOne === "" || optionTwo === ""}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default connect()(Addq);
//we used connect to get access to dispatch, we didn't pass any props as we don't need any
//we just created a local state that only this comp will have access to
