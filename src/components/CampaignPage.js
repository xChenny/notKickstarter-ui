import React, {Component} from 'react'
import axios from 'axios'

export default class CampaignPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campaign: {} 
    }
  }

  async componentDidMount() {
    const campaign = await axios.get(`http://127.0.0.1:3001/campaigns/${this.props.match.params.id}`)
    this.setState({campaign: campaign.data})
  }

  render() {
    return (
      <div className="content">
        <h1>{this.state.campaign.title}</h1>
      </div>
    )
  }
}
