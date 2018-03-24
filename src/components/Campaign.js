import React from 'react'
import {Link} from 'react-router-dom'

const Campaign = ({title, org, goal, desc, id, pic}) => {

  const style = {
    width: `30vw`,
    justifyContent: `center`
  }

  return (
    <div className="campaign">
      <Link to={`/campaigns/${id}`}>
        <div className="box" style={style}>
          <img src="../../public/africa.jpg" style={{width: style.width, marginBottom: `2em`}}/>
          <h1><strong>{title}</strong></h1>
          <h1>{org}</h1>
          <h2>{goal}</h2>
          <h2>{desc}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Campaign