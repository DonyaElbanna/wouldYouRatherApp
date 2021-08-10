import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Auth from "./Auth";
import Home from "./Home";
import Navig from "./Navig";
import Addq from "./Addq";
import Leaderboard from "./Leaderboard";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingBar from 'react-redux-loading'

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    loading: users === null, // to render login pg after we get users
  };
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, loading } = this.props;
    return (
      <div>
        <LoadingBar />
        {loading === true ? null : (
          <div>
            {!authedUser ? (
              <Auth />
            ) : (
              <div>
                <Fragment>
                  <Navig />
                  <div>
                    <Route path="/home" component={Home} />
                    <Route path="/add" component={Addq} />
                    <Route path="/leaderboard" component={Leaderboard} />
                  </div>
                </Fragment>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
//Using the connect() function upgrades a component to a container.
//Containers can read state from the store and dispatch actions.
