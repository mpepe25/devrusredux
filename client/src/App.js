import React, { Component } from "react";
import Navbar from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import HomePage from "./Pages/HomePage";
import NoMatch from "./Pages/NoMatch";
import Login from "./Pages/Login";
import CreateEvent from "./Pages/CreateEvent";
import Comments from "./Pages/Comments";
import API from "./utils/API";

class App extends Component {
  state = {
    User: false,
    Events: false
  };

  componentWillMount() {
    API.getAllEvents().then(response => {
      console.log(response.data);
      this.setState({ Events: response.data });
    });
  }

  updateGlobalState = (name, val) => {
    this.setState({ [name]: val });
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar User={this.state.User} />
            <Wrapper>
              <Switch>
                {<Route exact path="/" component={Login} />}
                <Route
                  exact
                  path="/login"
                  render={() => (
                    <Login
                      User={this.state.User}
                      updateGlobalState={this.updateGlobalState}
                    />
                  )}
                />
                <Route
                  exact
                  path="/home"
                  render={() => <HomePage Events={this.state.Events} />}
                />
                {
                  <Route
                    exact
                    path="/create"
                    render={() => (
                      <CreateEvent
                        User={this.state.User}
                        Events={this.state.Events}
                        updateGlobalState={this.updateGlobalState}
                      />
                    )}
                  />
                }
                <Route exact path="/comments" component={Comments} />
                <Route component={NoMatch} />
              </Switch>

              {/* <Route path="/Comments" component={Comments} />
            <Route path="/CreateEvent" component={CreateEvent} /> */}
            </Wrapper>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
