import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { removeAuthedUser } from "../actions/authedUser"; 

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

class Nav extends Component {

    logOut = () => {
        const { dispatch } = this.props;
        dispatch(removeAuthedUser());
        this.props.history.push('/')
        // this.props.history.push({
        //   pathname: '/login',
        //   state: { from: '/home' },
        // });
      };

    render() {

        const { authedUser } = this.props;
        console.log('Nav Dataaaa: ', this.props)

        return (
            <div>
          <ul>
            <li>
              <NavLink to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add">
                New question
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard">
                Leaderboard
              </NavLink>
            </li>
            <li>
                <div>{`Hi, ${authedUser}!`}</div>
                <button onClick={this.logOut}>
                    Logout
                </button>
            </li>
          </ul>
     </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Nav);