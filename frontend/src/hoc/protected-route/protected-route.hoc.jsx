import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import MainLayout from '../layouts/main-layout';

// TODO: add authentication logic
export default ({ component: Component, current_user, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (current_user)
        return (
          <MainLayout>
            <Component {...props} />
          </MainLayout>
        );
      else return <Redirect to='/sign_in' />;
    }}
  />
);
