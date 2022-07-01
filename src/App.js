// lib
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { AuthProvider } from "./AuthService";
import { LoggedInRoute } from "./LoggedInRoute";
import MapBox from "./pages/MapBox";
import { ResetPassword } from "./pages/ResetPassword";
import { SignInCheck } from "./pages/SignInCheck";
import { Profile } from "./pages/ProfilePage/Profile";
import { CompanyDetailPage } from "./pages/CompanyDetailsPage/CompanyDetails";
import { Page404 } from "./pages/404/Page404";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path="/" component={Home}></LoggedInRoute>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/resetpassword" component={ResetPassword}></Route>
          <Route exact path="/signincheck" component={SignInCheck}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/mapbox" component={MapBox}></Route>
          <Route exact path="/profile" component={Profile}></Route>
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
