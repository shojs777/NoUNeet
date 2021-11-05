// lib
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { AuthProvider } from './AuthService';
import { LoggedInRoute } from './LoggedInRoute';
import MapBox from './pages/MapBox';
import { ResetPassword } from './pages/ResetPassword';
import { SignInCheck } from './pages/SignInCheck';
import { Profile } from './pages/ProfilePage/Profile';
import { CompanyDetailPage } from './pages/CompanyDetailsPage/CompanyDetails';
import { Page404 } from './pages/404/Page404';

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path="/" component={Home}></LoggedInRoute>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/resetpassword" component={ResetPassword}></Route>
          <Route path="/signincheck" component={SignInCheck}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/mapbox" component={MapBox}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route
            exact
            path="/company/:id"
            component={CompanyDetailPage}
          ></Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
