import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Dropdown,
  Image
} from "react-bootstrap";
import { withRouter } from "react-router-dom";

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

class Auth extends Component {

  state = { selectedUser: null };

  selectUser = (id) => {
    this.setState({ selectedUser: id });
  };

  logIn = (e) => {
    e.preventDefault();

    const {selectedUser} = this.state;
    const { dispatch } = this.props

    if (selectedUser) {
      dispatch(setAuthedUser(selectedUser));
      this.props.history.push("/home");
    }
  };

  render() {
    const { users } = this.props;
    const { selectedUser } = this.state

    const userId = users.map((user) => (
      user.id
    ))

    // console.log("Auth Data: ", this.props);

    return (
      <div style={{ marginTop: "5px" }}>
        <Container fluid className="text-center m-auto">
          <Card className="m-auto" style={{ height: "100vh" }}>
            <Card.Title style={{ marginTop: "40px", marginBottom: "20px" }}>
              Welcome to the game
            </Card.Title>
            <Card.Img
              variant="top"
              className="m-auto"
              style={{ width: "18rem" }}
              src="/wydpic.png"
            />
            <Card.Body>
              <footer className="blockquote-footer">
                You have to sign in to play the game.
              </footer>
              <Row style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Col md='auto'>
                <Dropdown>
                <Dropdown.Toggle variant='light' style={{width: '200px', backgroundColor: '#e3e1e1'}}>
                  {!selectedUser
                  ? <span>Select a user</span>
                  : selectedUser === userId[0]
                  ? <span>Sarah Edo</span> 
                  : selectedUser === userId[1]
                  ? <span>Tyler McGinnis</span>
                  : selectedUser === userId[2]
                  ? <span>John Doe</span>
                  : null}
                </Dropdown.Toggle>
                <Dropdown.Menu >
                  <Dropdown.Item></Dropdown.Item>
                  {users.map((user) => (
                    <Dropdown.Item
                      key={user.id}
                      onClick={(e) => {
                        this.selectUser(user.id);
                      }}
                    >
                      <div>
                        <Image
                          src={user.avatarURL}
                          style={{ width: "45px", height: "45px", marginRight: '5px' }}
                          roundedCircle
                        />
                        {user.name}
                        <Dropdown.Divider />
                      </div>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
                </Col>
              <Col md='auto' >
                <Button type="submit" disabled={selectedUser === null} onClick={this.logIn}>
                  Login
                </Button>
              </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(Auth));
