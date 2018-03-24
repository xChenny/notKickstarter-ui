import React, {Component} from "react";
import axios from 'axios'
import Campaign from './Campaign'
import _ from 'lodash'

export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campaigns: []
    }
  }

  async componentDidMount() {
    const campaigns = await axios.get("http://127.0.0.1:3001/campaigns")
    this.setState({campaigns: campaigns.data})
  }

  render() {
    return (
      <div className="section">
          {/* Split # of campaigns into 3s */}
          {_.chunk(this.state.campaigns, 3).map(arr => {
            return <div className="columns" key={Math.random() * 10000}>
              {arr.map(cmpn => {
                return <div className="column flexy-boi" key={Math.random() * 10000}>
                  <Campaign title={cmpn.title} org={cmpn.org} goal={cmpn.goal} desc={cmpn.desc} id={cmpn.id} />
                </div>
              })}
            </div>
          })}
      </div>
    );
  }
};
