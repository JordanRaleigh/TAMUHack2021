//make a react funtonal component
// use routes to redirect from react router dom
import React from "react";
import { Route, Redirect, Component } from "react-router-dom";
import Client from "./Client";

function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        Client.isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
}

export default AuthRoute;
