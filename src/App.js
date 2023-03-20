import React from "react";

import {
  BrowserRouter as Router,
  Swith,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

import { Article, Brand, CTA, Navbar, Scrolltop } from "./components";
// import  from "./components/scrolltop/Scrolltop";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <Scrolltop />
    </div>
  );
};

export default App;
