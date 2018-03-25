import React, {Component} from "react";
import axios from 'axios'
import Campaign from './Campaign'
import _ from 'lodash'
import { withRouter } from 'react-router'

class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campaigns: [],
      didMount: false
    }
  }

  async componentDidMount() {
    let campaigns
    switch (this.props.location.pathname) {
      case "/campaigns":
        campaigns = await axios.get("http://127.0.0.1:3001/campaigns")
        break
      case "/account":
        campaigns = await axios.get(`http://localhost:3001/campaigns?author=${this.props.userId}`)
        break
      default:
        return
    }
    this.setState({campaigns: campaigns.data})
    this.setState({didMount: true})
  }

  render() {
    return (
      <div className="section">
          {/* Split # of campaigns into 3s */}
          {this.state.didMount && (this.state.campaigns.length === 0) ?
              <p>No Running Campaigns!</p> :
              _.chunk(this.state.campaigns, 3).map(arr => {
                return <div className="columns" key={Math.random() * 10000}>
                  {arr.map(cmpn => {
                    return <div className="column flexy-boi" key={Math.random() * 10000}>
                      <Campaign title={cmpn.title} org={cmpn.org} goal={cmpn.goal} desc={cmpn.desc} id={cmpn.id} pic={cmpn.pic} />
                    </div>
                  })}
                </div>
              })
          }
      </div>
    );
  }
};

export default withRouter(Grid)