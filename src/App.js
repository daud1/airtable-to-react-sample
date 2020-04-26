import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Dashboard from "./dash/components/Dashboard.container";
import React from "react";
import { SignIn } from "./auth";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0px;
  padding: 0px
  align-items: center;
`;
class App extends React.Component {
  render() {
    return (
      <Container className="container">
        <Router>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={SignIn} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
