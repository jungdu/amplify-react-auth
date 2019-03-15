import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { withAuthenticator } from "aws-amplify-react";
import { Auth } from "aws-amplify";

class App extends Component {
  // Auth.currentAuthenticatedUser()

  componentDidMount() {
    Auth.currentSession()
      .then(data => console.log(data.idToken.payload))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button> Record Event</button>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
