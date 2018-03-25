import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Nav extends Component {

  componentDidUpdate() {
    const path = `/campaigns/${this.props.match.params.id}`
    const location = this.props.location.pathname
    console.log(`The current location is: ${location}`)
    console.log(`The current path is: ${path}`)
  }

  render() {
    const path = `/campaigns/${this.props.match.params.id}`
    const location = this.props.location.pathname
    const navItem = 'navbar-item is-tab'
    return (
      <nav className="navbar has-shadow">
        <div className="container">
          <div className="navbar-tabs">
            <Link to={path} className={(location === `/campaigns/${this.props.match.params.id}`) ? `${navItem} is-active` : navItem}>
              <span className="icon is-small tab-icon"><i className="fas fa-home"></i></span>
              <span> Campaign Home</span>
            </Link>
            <Link to={`${path}/funds`} className={(location.includes('funds')) ? `${navItem} is-active` : navItem}>
              <span className="icon is-small tab-icon"><i className="fas fa-money-bill-alt"></i></span>
              <span>Funds Tracker</span>
            </Link>
            <Link to={`${path}/community`} className={(location.includes('community')) ? `${navItem} is-active` : navItem}>
              <span className="icon is-small tab-icon"><i className="fas fa-users"></i></span>
              <span>Community</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
