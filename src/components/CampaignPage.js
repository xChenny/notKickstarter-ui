import React, {Component} from 'react'
import axios from 'axios'

export default class CampaignPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campaign: {},
      imgUrl: undefined
    }
  }

  async componentDidMount() {
    const campaign = await axios.get(`http://127.0.0.1:3001/campaigns/${this.props.match.params.id}`)
    await this.setState({campaign: campaign.data})
    const imgUrl = await this.getImageUrl(this.state.campaign.pic)
    await this.setState({imgUrl})

  }

  async getImageUrl(key) {
    const url = await axios.get(`http://127.0.0.1:5000/images/${key}`)
    console.log(url.data[0])
    return url.data[0]
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">{this.state.campaign.title}</h1>
        <h2 className="subtitle">{this.state.campaign.desc}</h2>
        <hr />
        <div className="content">
          <div className="tile is-ancestor">
            <div className="tile is-4 is-parent is-vertical">
              <div className="tile is-child">
                {this.state.imgUrl &&
                <img className="is-4" src={this.state.imgUrl} />
                }
              </div>
              <div className="tile box is-child">
                <h2 className='title'>Our Values</h2>
                <div className="content">
                  <p>Mauris erat odio, finibus at sollicitudin non, scelerisque lobortis lectus. Praesent dolor diam, mattis non porta at, viverra ut dolor. Maecenas molestie molestie diam.</p>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile box is-child">
                <h2 className="title">Who we are</h2>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lobortis augue. In ut consectetur turpis. Vivamus libero elit, lobortis eu libero ut, posuere maximus dui. Vivamus ac pulvinar est, sed porttitor velit. Mauris vel odio ultrices, posuere risus at, condimentum eros. Phasellus sed tempor mauris. Etiam arcu neque, laoreet at hendrerit non, mattis eu augue.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lobortis augue. In ut consectetur turpis. Vivamus libero elit, lobortis eu libero ut, posuere maximus dui. Vivamus ac pulvinar est, sed porttitor velit. Mauris vel odio ultrices, posuere risus at, condimentum eros. Phasellus sed tempor mauris. Etiam arcu neque, laoreet at hendrerit non, mattis eu augue.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lobortis augue. In ut consectetur turpis. Vivamus libero elit, lobortis eu libero ut, posuere maximus dui. Vivamus ac pulvinar est, sed porttitor velit. Mauris vel odio ultrices, posuere risus at, condimentum eros. Phasellus sed tempor mauris. Etiam arcu neque, laoreet at hendrerit non, mattis eu augue.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lobortis augue. In ut consectetur turpis. Vivamus libero elit, lobortis eu libero ut, posuere maximus dui. Vivamus ac pulvinar est, sed porttitor velit. Mauris vel odio ultrices, posuere risus at, condimentum eros. Phasellus sed tempor mauris. Etiam arcu neque, laoreet at hendrerit non, mattis eu augue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
