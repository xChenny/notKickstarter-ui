import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios'
import "../App.css";
import Hero from "./Hero";
import Grid from "./Grid"
import Account from './Account'
import CampaignPage from './CampaignPage'
import Nav from './CampaignPageNav'
import Community from './CampaignPageCommunity'
import Funds from './CampaignPageFunds'
import Submit from './SubmitCampaign'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <Hero />
            <Route path="/campaigns/:id" component={Nav} />
            <div className="section">
              <Route exact path="/campaigns" component={Grid} />
              <Route exact path="/submitCampaign" component={Submit} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/campaigns/:id" component={CampaignPage} />
              <Route exact path="/campaigns/:id/funds" component={Funds} />
              <Route exact path="/campaigns/:id/community" component={Community} />
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
