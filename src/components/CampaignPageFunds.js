import React from "react";
import Ledger from "./Ledger";

const Funds = (goal, balance, progress) => {
  return (
    <div className="container">
      <h1 className="title">Funding Progress</h1>
      <hr />
      <nav className="level is-mobile">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Backers</p>
            <p className="title">3,456</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Dollars pledged</p>
            <p className="title">456K</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Goal</p>
            <p className="title">500K</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Likes</p>
            <p className="title">789</p>
          </div>
        </div>
      </nav>
      <br />
      <progress
        className="progress is-primary is-large"
        value="456"
        max="500"
      />
      <br />
      <h2 className="title">Spendings</h2>
      <hr />
      <Ledger />
    </div>
  );
};

export default Funds;
