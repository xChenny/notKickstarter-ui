import React from "react";
import {Link} from 'react-router-dom'
import Nav from './Nav'

const Hero = () => {
  return (
    <section className="hero is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            <Link to="/">
              NotKickstarter
            </Link>
          </h1>
          <h2 className="subtitle">The New Way to Give and Invest</h2>
        </div>
      </div>
      <div className="hero-foot">
        <Nav />
      </div>
    </section>
  );
};

export default Hero;
