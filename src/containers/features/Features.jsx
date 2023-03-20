import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving and disrusts easily",
    text: "Improving the quality of your code makes it easier to understand and write in a oop concept which is well orgranised",
  },
  {
    title: "Become the tended active",
    text: "Improving the quality of your code makes it easier to understand and write in a oop concept which is well orgranised",
  },
  {
    title: "Message me or am nothing",
    text: "Improving the quality of your code makes it easier to understand and write in a oop concept which is well orgranised",
  },
  {
    title: "Really boy law country",
    text: "Improving the quality of your code makes it easier to understand and write in a oop concept which is well orgranised",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features gradient__bg section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is here and you just have to realise it. Step into Future
          today & Make it Happen.
        </h1>
        <p>
          <a href="#">Request early access to get started</a>
        </p>
      </div>
      <div className="gpt3__features-content">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
