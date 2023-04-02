import React from 'react';
import { Route } from 'react-router-dom';
import withAuth from './WithAuth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    <Component {...props} />
  )} />
);

export default withAuth(ProtectedRoute);
