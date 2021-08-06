import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from "../actions/authedUser";


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
            <form onSubmit={this.handleSubmit}>
            <label>Select a User: &nbsp; &nbsp;</label>
            <select ref={(id) => (this.authedUser = id)} style={{height: '30px'}}>
              {users.map((user) => (
                <option key={user.id}>{user.name}</option>
              ))}
            </select>
            <button type="submit">
              Log in
            </button>
          </form>
        );
    }
}

export default connect(
    mapStateToProps,
)(Auth);