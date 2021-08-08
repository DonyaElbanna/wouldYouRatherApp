import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
// import Container from 'react-bootstrap/Container'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import {
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

class Auth extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const authedUser = this.authedUser.value;

    if (authedUser) {
      this.props.dispatch(setAuthedUser(authedUser));
    } else {
      alert("Please sign in first");
    }
  };

  render() {
    const { users } = this.props;
    console.log("Auth Dataaaaa: ", this.props);

    return (
      <Container fluid className="text-center m-auto">
        <Card className="m-auto" style={{ width: "100%", height: "100vh" }}>
          <Card.Title style={{ marginTop: "40px", marginBottom: "20px" }}>
            Welcome to the game
          </Card.Title>
          <Card.Img
            variant="top"
            className="m-auto"
            style={{ width: "25rem" }}
            src="/wydpic.png"
          />
          <Card.Body>
            <footer className="blockquote-footer">
              You have to sign in to play the game
            </footer>
            <Form className="m-auto">
              <Row
                className="align-items-center justify-content-md-center"
                style={{ marginTop: "60px" }}
              >
                <Col md="auto">
                  <Form.Label>Select a User</Form.Label>
                </Col>
                <Col md="auto">
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Select a user..."
                  >
                    <Form.Select ref={(id) => (this.authedUser = id)}>
                      {users.map((user) => (
                        <option key={user.id}>{user.name}</option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col md="auto">
                  <Button type="submit" onClick={this.handleSubmit}>
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Auth);
