import React from 'react'
import axios from 'axios'
import Grid from './Grid'
import { Link } from 'react-router-dom'


const Account = () => {

  const style = {
    marginLeft: `3rem`
  }

  return (
    <div className="container">
      <h1 className="title">Your Account</h1>
      <hr />

      <h2 className="subtitle">Your Campaigns</h2>
      <Grid userId={1} />
      <Link to="/submitCampaign" className="button is-success" style={style}>Create a Campaign!</Link>
    </div>
  )
}

export default Account