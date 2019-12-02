// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// New - import the React Router components, and the Profile page component
import Profile from "./views/Profile";
import Footer from "./components/Footer";
import initFontAwesome from "./utils/initFontAwesome";
import { Container } from "reactstrap";

import Home from "./views/Home";
initFontAwesome();

const  App=() => {
  return (
    <Router>
    <div id="app" className="d-flex flex-column h-100">
      <NavBar  />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Container>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
