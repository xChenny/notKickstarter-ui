import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loc: ''
    }
  }

  componentDidMount() {
    const path = this.props.location.pathname
    switch(path) {
      case "/campaigns":
        this.setState({loc: 'browse'})
        break
      case "/account":
        this.setState({loc: 'account'})
        break
      default:
        return
    }
  }

  onClick(e) {
    e.preventDefault()
    const html = e.target.innerHTML
    switch(html) {
      case "Browse Campaigns":
        this.setState({loc: 'browse'})
        break
      case "Account":
        this.setState({loc: 'account'})
        break
      default:
        return
    }
  }

  render() {
    return (
      <div className="tabs is-left is-boxed">
        <ul>
          <li className={(this.state.loc === 'browse') ? "is-active" : ""} onClick={e => this.onClick(e)}><Link to='/campaigns'>Browse Campaigns</Link></li>
          <li className={(this.state.loc === 'account') ? "is-active" : ""} onClick={e => this.onClick(e)}><Link to='/account'>Account</Link></li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Nav)