import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { NavLink } from 'react-router-dom'
import { removeAuthedUser } from "../actions/authedUser"; 
import {Navbar, Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

class Navig extends Component {

    logOut = () => {
        const { dispatch } = this.props;
        dispatch(removeAuthedUser());
        
        // this.props.history.push({
        //   pathname: '/',
        //   state: { from: '/home' },
        // });
      };

    render() {

        const { authedUser } = this.props;
        console.log('Nav Dataaaa: ', this.props)

        return (
          <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand href="#home">{`Hi, ${authedUser}!`}</Navbar.Brand>
          <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#add">Add a question</Nav.Link>
            <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
            </Nav>
            <Button onClick={this.logOut}>Logout</Button>
          
          </Container>
        </Navbar>
        );
    }
}

export default connect(
    mapStateToProps,
)(Navig);

 