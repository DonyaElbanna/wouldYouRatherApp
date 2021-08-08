import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";

class Addq extends Component {
  render() {
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
                <Form.Control placeholder="Option One" />
              </Form.Group>
              <Card.Text>Or</Card.Text>
              <Form.Group className="mb-3" controlId="optionTwo">
                <Form.Control placeholder="Option Two" />
              </Form.Group>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="primary" type="submit">
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

export default Addq;
