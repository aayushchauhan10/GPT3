import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT3 OpenAI
        </h1>
        <p>
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything. Joy
          alteration with the attachment. party we used to order allow of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="" id="" placeholder="Your Email here" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="users using the app" />
          <p>Over 1.6k users requested access in last 24 hours.</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="image" />
      </div>
    </div>
  );
};

export default Header;
