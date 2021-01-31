//make a react funtonal component
// use routes to redirect from react router dom
import React from 'react';
import { Route, Redirect, Component } from 'react-router-dom';

function AuthRoute({ component: Component, ...rest }) {
  let isAuthenticated = false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default AuthRoute;
