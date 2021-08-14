import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authedUser ? (
        <Component {...props} />
      ) : (
        <div>
          <Redirect
            to={{
              pathname: '/home',
              state: { from: props.location.pathname }
            }}
          />
        </div>
      )
    }
  />
);

export default PrivateRoute;