import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";
import { useEffect } from "react";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Sidebar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 100%;
`;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
