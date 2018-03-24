import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../App.css";
import Hero from "./Hero";
import Nav from './Nav'
import Grid from "./Grid"
import CampaignPage from './CampaignPage'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <Hero />
            <div className="section">
              <Route exact path="/campaigns" component={Grid} />
              <Route exact path="/campaigns/:id" component={CampaignPage} />
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
