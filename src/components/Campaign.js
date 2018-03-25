import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Campaign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: undefined
    }
  }

  getImageUrl = async key => {
    const url = await axios.get(`http://127.0.0.1:5000/images/${key}`)
    return url.data[0]
  }

  async componentDidMount() {
    const imgUrl = await this.getImageUrl(this.props.pic)
    await this.setState({imgUrl})
    console.log(this.state.imgUrl)
  } 

  render() {
    const style = {
      width: `30vw`,
      justifyContent: `center`
    }
    const {title, org, goal, desc, id, pic} = this.props
    return (
      <div className="campaign">
        <Link to={`/campaigns/${id}`}>
          <div className="box" style={style}>
            {this.state.imgUrl &&
            <img src={this.state.imgUrl} style={{width: style.width, marginBottom: `2em`, borderRadius: 5}} />
            }
            <h1><strong>{title}</strong></h1>
            <h1>{org}</h1>
            <h2>{goal}</h2>
            <h2>{desc}</h2>
          </div>
        </Link>
      </div>
    )
  }
}

export default Campaign