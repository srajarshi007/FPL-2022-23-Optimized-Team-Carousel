import React from "react";
import "./Landing.css";
import Carousel from "../Carousel/Carousel.js";

const LandingPage = (props) => {
  return (
    <>
      <label className="title">Forecast</label>
      <Carousel data = {props}/>
    </>
  );
};

export default LandingPage;
