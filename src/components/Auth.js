import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from "../actions/authedUser";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function mapStateToProps({ users }) {
    return {
      users: Object.values(users),
    };
  }

class Auth extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
    
        const  authedUser= this.authedUser.value;
    
        if (authedUser !== "") {
          this.props.dispatch(setAuthedUser(authedUser));
        }
      };

    render() {

        const { users } = this.props
        console.log('Auth Dataaaaa: ', this.props)

        return (
          <Container fluid className="text-center m-auto">
            <Card className="m-auto" style={{ width: "100%", height: '100vh'}} >
              <Card.Title>Welcome to the game</Card.Title>
              <Card.Text></Card.Text>
              <Card.Img variant="top" className="m-auto" style={{ width: "30rem"}} src="/wydpic.png" />
              <Card.Body>
                <footer className="blockquote-footer">
                  You have to sign in to play the game
                </footer>
                <form onSubmit={this.handleSubmit}>
              <label>Select a User: &nbsp; &nbsp;</label>
              <select
                ref={(id) => (this.authedUser = id)}
                style={{ height: "30px" }}
              >
                {users.map((user) => (
                  <option key={user.id}>{user.name}</option>
                ))}
              </select>
              <Button type='submit' variant="primary">
                Login
              </Button>
            </form>
              </Card.Body>
            </Card>
          </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(Auth);