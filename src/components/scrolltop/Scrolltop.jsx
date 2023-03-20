import React, { useState, useEffect } from "react";
import scrolltoTop from "../../assets/scrolltoTop.png";
import "./scrolltop.css";

const Scrolltop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <a
        href="#gototop"
        className="scroll"
        style={{ display: visible ? "inline" : "none" }}
      >
        <img src={scrolltoTop} alt="" className="image" />
      </a>
    </div>
  );
};

export default Scrolltop;
