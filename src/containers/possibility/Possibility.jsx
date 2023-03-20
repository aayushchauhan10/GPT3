import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibility} alt="vr" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination.
        </h1>
        <p>
          Yet through traveling assistance go to bed early or gabbar will come
          and so on things to do here. There will be so much of the priorities
          you have to look for.
        </p>
        <h4>Request an early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
