import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({
  isLoggedIn,
  path,
  component,
}) {
  return isLoggedIn ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to="/login" />
  );
}

export default PrivateRoute;
