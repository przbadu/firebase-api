import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './hoc/protected-route/protected-route.hoc';

// components
import SignInPage from './pages/sign-in-page/sign-in-page';
import SignUpPage from './pages/sign-up-page/sign-up-page';
const DashboardPage = () => <h1>dashboard page</h1>;
const SecondPage = () => <h1>second page</h1>;

export default () => (
  <div>
    <Switch>
      <Route path='/sign_in' component={SignInPage} />
      <Route path='/sign_up' component={SignUpPage} />
      <ProtectedRoute path='/' exact component={DashboardPage} />
      <ProtectedRoute path='/second' exact component={SecondPage} />
    </Switch>
  </div>
);
